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
        <PageHeader title="Blog Low Down">
          This is a fairly new <strong>Blog</strong> I dont have content yet but planning on pushing some through soon for now, I have very intereasting story about my travels.
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
