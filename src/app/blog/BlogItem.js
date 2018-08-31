import React from 'react';
import BlogNav from './shard/BlogNav';
import BlogContent from './shard/BlogContent';

const BlogItem = (props) => (
  <div className="box">
    <BlogContent limit={50} {...props}>
      <BlogNav date={props.date} to={{
        pathname: `/blog/${props.path}`,
        state: { props }
      }} />
    </BlogContent>
  </div>
);

export default BlogItem;
