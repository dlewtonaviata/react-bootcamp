import createSagaMiddleware, { effects } from 'redux-saga';
import axios from 'axios';
import _ from 'lodash';

import { actionTypes, actions } from './actions.js';

const { put, call, takeLatest, all } = effects;
const ASYNC_GET_POSTS = 'ASYNC_GET_POSTS';

export const fetchPostListAsyncAction = () => ({
  type: ASYNC_GET_POSTS,
});

export function * getPostListSaga() {
  const httpResult = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
  yield put(actions.createPostListAction(httpResult.data));
}

export function * rootSaga() {
  yield all([
    getPostListSaga(),
    takeLatest(ASYNC_GET_POSTS, getPostListSaga),
  ]);
}

export const sagaMiddleware = createSagaMiddleware();