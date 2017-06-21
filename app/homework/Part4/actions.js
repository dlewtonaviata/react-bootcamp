const CREATE_POST_LIST = 'CREATE_POST_LIST';
const DELETE_ACTION = 'DELETE';
const RANDOM_ACTION = 'RANDOM';

const createDeleteAction = (postId) => ({
  type: DELETE_ACTION,
  postId,
});

const createRandomAction = () => ({
  type: RANDOM_ACTION
});

const createPostListAction = (posts) => ({
  type: CREATE_POST_LIST,
  posts,
});

export const actionTypes = {
  CREATE_POST_LIST: 'CREATE_POST_LIST',
  DELETE_ACTION: 'DELETE',
  RANDOM_ACTION: 'RANDOM',
}

export const actions = {
  createDeleteAction,
  createRandomAction,
  createPostListAction,
}