import { connect } from 'react-redux';

import { createRandomAction } from '../state.js';
import NewPost from './NewPost.js';

const mapStateToProps = (state) => {
  return {
    postings: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    random: () => dispatch(createRandomAction()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)