import { connect } from 'react-redux';

import { createDeleteAction } from '../state.js';
import PostList from './PostList.js';

const mapStateToProps = (state) => {
  return {
    postings: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (postId) => dispatch(createDeleteAction(postId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)