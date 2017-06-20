import React from 'react';
import Radium from 'radium';
import { Provider } from 'react-redux';

import PostList from './PostList/PostListContainer.js';
import NewPost from './NewPost/NewPostContainer.js';
import store from './state.js'

const BlogElements = () => (
  <div>
    <NewPost />
    <PostList />
  </div>
);

const Blog = () => (
  <Provider store={store}>
    <BlogElements />
  </Provider>
);

export default Radium(Blog);
