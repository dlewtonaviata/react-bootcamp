import { connect } from 'react-redux';

import { createDeleteAction, fetchPostListAsyncAction } from '../state.js';
import PostList from './PostList.js';

const mapStateToProps = (state) => {
  return {
    postings: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => dispatch(fetchPostListAsyncAction()),
    delete: (postId) => dispatch(createDeleteAction(postId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)