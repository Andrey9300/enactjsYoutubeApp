import {combineReducers, Reducer} from 'redux';

import {EPlaylist} from './playlist.constants';

export type TPlaylistAction = TypedAction<typeof import('./playlist.actions')>;

export const playlist: Reducer<number[], TPlaylistAction> = (
  state = [],
  action,
) => {
  switch (action.type) {
    case EPlaylist.PLAYLIST_SET_VIDEOS: {
      return action.payload;
    }
    case EPlaylist.PLAYLIST_ERROR: {
      return state;
    }
    default:
      return state;
  }
};

export const playlistCurrentVideo: Reducer<number, TPlaylistAction> = (
  state = null,
  action,
) => {
  switch (action.type) {
    case EPlaylist.PLAYLIST_SET_VIDEO: {
      return action.payload;
    }
    default:
      return state;
  }
};

export const playlistReducer = combineReducers({
  playlist,
  playlistCurrentVideo,
});
