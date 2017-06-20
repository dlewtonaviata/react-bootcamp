import { createStore } from 'redux';
import _ from 'lodash';

import postData from './Utils/PostData.js'
import utils from './Utils/utils.js'

export const DELETE_ACTION = "DELETE";
export const RANDOM_ACTION = "RANDOM";

const initialState = postData;

const reducer = (state, action) => {
  if(_.isNil(state)) {
    return initialState;
  }

  switch(action.type) {
    case DELETE_ACTION:
      return _(state).filter(post => post.id !== action.postId).value();

    case RANDOM_ACTION:
      console.log("Random Action");
      return _(state).concat([utils.createRandomPost()]).value();
  }

  return initialState;
}

const store = createStore(reducer);

// Action Creators

export const createDeleteAction = (postId) => ({
  type: DELETE_ACTION,
  postId,
});

export const createRandomAction = () => ({
  type: RANDOM_ACTION
});

export default store;