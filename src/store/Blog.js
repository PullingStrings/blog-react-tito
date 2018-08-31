import * as contentful from 'contentful';
import * as  actions from './blog/actions';

const client = contentful.createClient({
  space: 'uvr4nfp7vhcj',
  accessToken: '0be2cbda51ce1f767bd978421c7f2c125bc211ca01a8093393d07098b16e7b1e'
});

export function loadBlog() {
  return dispatch => {
    dispatch(actions.blogLoading());
    return client.getEntries()
      .then(({items}) => {
        dispatch(actions.loadBlogSuccess(items));
      })
      .catch(error => {
        console.log(error);
        dispatch(actions.blogLoading(false));
      });
  };
}

// export function loadMusic() {
//   return dispatch => {
//     dispatch(actions.musicLoading());
//     return client.getEntries()
//       .then(({items}) => {
//         dispatch(actions.loadMusicSuccess(items));
//       })
//       .catch(error => {
//         console.log(error);
//         dispatch(actions.musicLoading(false));
//       });
//   };
// }
