import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import color from 'color'
import _ from 'lodash'

import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

import utils from './utils.js'
import styles from './styles'
import postData from './postData.js'
import PostBlock from './postBlock.js'



///////////////////////////////////////////////////////////////////////////////////////

const DELETE_ACTION = "DELETE";
const RANDOM_ACTION = "RANDOM";

const initialState = postData;

const reducer = (state, action) => {
  if(_.isNil(state)) {
    return initialState;
  }

  switch(action.type) {
    case DELETE_ACTION:
      return _(state).filter(post => post.id !== action.postId).value();

    case RANDOM_ACTION:
      return _(state).concat([utils.createRandomPost()]).value();
  }

  return initialState;
}

const createDeleteAction = (postId) => ({
  type: DELETE_ACTION,
  postId,
})

const createRandomAction = () => ({
  type: RANDOM_ACTION
})

const store = createStore(reducer);

const mapStateToProps = (state) => {
  return {
    postings: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (postId) => dispatch(createDeleteAction(postId)),
    random: () => dispatch(createRandomAction()),
  };
}

///////////////////////////////////////////////////////////////////////////////////////

let PostCreate = (props) => {
  return (
    <p style={styles.PostCreateStyles.PostButton}>
      <button onClick={props.random}>Generate Random Post</button>
    </p>
  )
}

let PostList = (props) => {
  return (
    <div>
      {
        _(props.postings).sortBy(e => e.title).map((post, key) => 
          <PostBlock
            title={post.title}
            body={post.body}
            user={post.userId}
            delete={() => props.delete(post.id)}
            key={key}
          />
        ).value()
      }
    </div>
  )
}

PostCreate = connect(mapStateToProps, mapDispatchToProps)(PostCreate)
PostList = connect(mapStateToProps, mapDispatchToProps)(PostList)

///////////////////////////////////////////////////////////////////////////////////////

const BlogElements = () => (
  <div>
    <PostCreate />
    <PostList />
  </div>
)

const Blog = () => (
  <Provider store={store}>
    <BlogElements />
  </Provider>
)

export default Radium(Blog)
