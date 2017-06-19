import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import color from 'color'
import _ from 'lodash'

import postData from './postData.js'
import PostBlock from './postBlock.js'

/*
   Homework 1: Rendering Data

   Requirements:
   1. Render the list of post data (hint: use map)
   2. Style the posts using at least 2 css selectors and at least 10 styles
   3. Make sure there are no warnings/errors in the console
   4. Choose one (or more) of the following additional tasks:
     i.   Make the page responsive (rows when on desktop, column when on mobile)
     ii.  Sort the posts by title, alphabetically
     iii. Add a header above the posts with a creative title (style it nicely)
*/

const Blog = () => {
  return (
    <div>
      {
        _(postData).sortBy(e => e.title).map((post, key) => 
          <PostBlock title={post.title} body={post.body} user={post.userId} key={key} />
        ).value()
      }
    </div>
  )
}

export default Radium(Blog)
