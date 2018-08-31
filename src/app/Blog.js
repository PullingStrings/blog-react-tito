import React from 'react';
import { connect } from 'react-redux';
// import * as contentful from 'contentful';
import BlogItem from './blog/BlogItem';
import PageHeader from './components/PageHeader';
import PageContent from './components/PageContent';
import { Loader } from './components/Loader';
// import BlogPage from './components/BlogPage';

class Blog extends React.Component {

  render() {
    return (
      <div>
        <PageHeader title="Code Blog">
          Your standard <strong>Blog</strong> one that talks about a range of shit some good some not so good, but I will at least try to keep it entertaining. This blog is a chronological mix of random posts on React, JavaScript, and my <strong>and other things I am really intreasted in</strong>.
        </PageHeader>
        { this.props.blog.loading ? <Loader className='has-text-primary'>Loading</Loader> :
          <PageContent>
            { this.props.blog.posts.map(({fields}, i) =>
              <BlogItem key={i} {...fields} />
            )}
          </PageContent>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    blog: state.blog

  };
}
export default connect(mapStateToProps)(Blog);
