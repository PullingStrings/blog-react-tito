import React from 'react';
import BlogNav from './shard/BlogNav';
import BlogContent from './shard/BlogContent';

const MusicItem = (props) => (
  <div className="box">
    <BlogContent limit={150} {...props}>
      <BlogNav date={props.date} to={{
        pathname: `/music/${props.path}`,
        state: { props }
      }} />
    </BlogContent>
  </div>
);

export default MusicItem;
