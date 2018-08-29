import React from 'react';
import { connect } from 'react-redux';
// import * as contentful from 'contentful';
import MusicItem from './blog/MusicItem';
import PageHeader from './components/PageHeader';
import PageContent from './components/PageContent';
import { Loader } from './components/Loader';

class Music extends React.Component {

  render() {
    return (
      <div>
        <PageHeader color="is-info" title="Code Blog">
          I really love <strong>Music</strong> as well, I will be talking about which genres I enjoy, and possibly yoll can even listen to some, from friends and fam. <strong>Enjoy</strong>.
        </PageHeader>
        { this.props.blog.loading ? <Loader className='has-text-primary'>Loading</Loader> :
          <PageContent>
            { this.props.blog.musicPosts.map(({fields}, i) =>
              <MusicItem key={i} {...fields} />
            )}
          </PageContent>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    music: console.log(state)
  };

}
export default connect(mapStateToProps)(Music);
