import React from 'react';

import styles from './styles.js'

const NewPost = (props) => (
  <p style={styles.PostButton}>
      <button onClick={() => props.random()}>Generate Random Post</button>
  </p>
);

export default NewPost;