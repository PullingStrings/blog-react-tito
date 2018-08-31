/**
* Blog Actions
*/
import * as types from './types';

export function blogLoading(isLoading = true) {
  return { type: types.BLOG_LOADING, isLoading};
}
export function loadBlogSuccess(posts) {
  return { type: types.LOAD_BLOG_SUCCESS, posts};
}

// export function musicLoading(isLoading = true) {
//   return { type: types.BLOG_LOADING_MUSIC, isLoading};
// }
// export function loadMusicSuccess(musicPosts) {
//   return { type: types.LOAD_BLOG_MUSIC_SUCCESS, musicPosts};
// }
