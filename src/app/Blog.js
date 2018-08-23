import React from 'react';
import * as contentful from 'contentful';
import BlogItem from './blog/BlogItem';
import PageHeader from './components/PageHeader';

class Blog extends React.Component {


//empty post array
  state = {
    posts: []
  }

  //Contentful createClient object
  client = contentful.createClient({
    space: 'uvr4nfp7vhcj',
    accessToken: '0be2cbda51ce1f767bd978421c7f2c125bc211ca01a8093393d07098b16e7b1e' });

  //call a fetchPosts function which will call a setPosts function
  componentDidMount() {
    this.fetchPosts()
      .then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries()
    setPosts = response => {
      this.setState({
        posts: response.items
      });
      console.log(response.items);
    }

    render() {
      return (
        <div>
          <PageHeader color="is-info" title="Code Blog">
            Your standard <strong>JavaScript</strong> programming blog, albeit, probably not very good, but I will at least try to keep it entertaining. This blog is a chronological mix of random posts on Angular, React, Functional Programming, and my <strong>project walkthroughs</strong>.
          </PageHeader>
          <hr />
          { this.state.posts.map(({fields}, i) =>
            <BlogItem key={i} {...fields} />
          )}
        </div>
      );
    }
}

export default Blog;
