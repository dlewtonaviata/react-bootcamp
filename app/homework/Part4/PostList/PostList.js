import React from 'react';
import _ from 'lodash';

import PostBlock from '../PostBlock/PostBlock.js';



const PostList = (props) => (
  <div>
    {
      _.size(props.postings) < 1 ? 
        _(props.init()).sortBy(e => e.title).map((post, key) => 
          <PostBlock
            title={post.title}
            body={post.body}
            user={post.userId}
            delete={() => props.delete(post.id)}
            key={key}
          />
        ).value()
      :
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
);

export default PostList;