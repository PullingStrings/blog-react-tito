import React from 'react';
import PageContent from './components/PageContent';
import BlogNav from './blog/shard/BlogNav';
import BlogContent from './blog/shard/BlogContent';

const BlogPost = ({ location: { state: { props } }}) => (
  <PageContent>
    <BlogNav date={props.date} status={props.status} to="/blog" />
    <BlogContent {...props } />
  </PageContent>
);

export default BlogPost;
