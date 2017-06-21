import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { effects } from 'redux-saga';

import axios from 'axios';
import _ from 'lodash';

import utils from './Utils/utils.js'

import { actionTypes, actions } from './actions.js';
import { rootSaga, sagaMiddleware } from './sagas.js';

const initialState = [];

const reducer = (state, action) => {
  if(_.isNil(state)) {
    return initialState;
  }

  switch(action.type) {
    case actionTypes.DELETE_ACTION:
      return _(state).filter(post => post.id !== action.postId).value();

    case actionTypes.RANDOM_ACTION:
      return _(state).concat([utils.createRandomPost()]).value();

    case actionTypes.CREATE_POST_LIST:
      return action.posts;
  }

  return initialState;
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;