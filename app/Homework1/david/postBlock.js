import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles'

const PostBlock = (props) => {
  const postStyles = styles.PostBlockStyles;

  return (
    <div style={postStyles.Block}>
      <h1 style={postStyles.Header}>{props.title}</h1>
      <p style={postStyles.Body}>{props.body}</p>
      <p style={postStyles.Footer}>{props.user ? `Post By: User #${props.user}` : ''}</p>
    </div>
  );
};

PostBlock.PropTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.number,
}

export default PostBlock;