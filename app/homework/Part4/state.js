import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { effects } from 'redux-saga';

import axios from 'axios';
import _ from 'lodash';

import postData from './Utils/PostData.js'
import utils from './Utils/utils.js'

export const CREATE_POST_LIST = 'CREATE_POST_LIST';
export const DELETE_ACTION = 'DELETE';
export const RANDOM_ACTION = 'RANDOM';

const ASYNC_GET_POSTS = 'ASYNC_GET_POSTS';

const { put, call, takeLatest, select, all } = effects;

const initialState = [];

const reducer = (state, action) => {
  if(_.isNil(state)) {
    return initialState;
  }

  switch(action.type) {
    case DELETE_ACTION:
      return _(state).filter(post => post.id !== action.postId).value();

    case RANDOM_ACTION:
      return _(state).concat([utils.createRandomPost()]).value();

    case CREATE_POST_LIST:
      return action.posts;
  }

  return initialState;
}

// Action Creators

export const createDeleteAction = (postId) => ({
  type: DELETE_ACTION,
  postId,
});

export const createRandomAction = () => ({
  type: RANDOM_ACTION
});

export const createPostListAction = (posts) => ({
  type: CREATE_POST_LIST,
  posts,
});

// Actions Needed for Sagas

export const fetchPostListAsyncAction = () => ({
  type: ASYNC_GET_POSTS,
});

// Saga Definitions

function * getPostListSaga() {
  const httpResult = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
  yield put(createPostListAction(httpResult.data));
}

function * rootSaga() {
  yield all([
    getPostListSaga(),
    takeLatest(ASYNC_GET_POSTS, getPostListSaga),
  ]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;