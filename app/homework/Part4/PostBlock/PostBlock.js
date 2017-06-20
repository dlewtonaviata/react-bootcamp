import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.js'

const PostBlock = (props) => {
  return (
    <div style={styles.Block}>
      <h1 style={styles.Header}>{props.title}</h1>
      <button style={styles.Delete} onClick={props.delete}>X</button>
      <p style={styles.Body}>{props.body}</p>
      <p style={styles.Footer}>{props.user ? `Post By: User #${props.user}` : ''}</p>
    </div>
  );
};

PostBlock.PropTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.number,
}

export default PostBlock;