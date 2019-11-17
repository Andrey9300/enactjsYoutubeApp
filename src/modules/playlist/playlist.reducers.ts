import {combineReducers, Reducer} from 'redux';

import {IVideo} from '../../interfaces/IVideo';
import {EPlaylist} from './playlist.constants';

export type TPlaylistAction = TypedAction<typeof import('./playlist.actions')>;

export interface IPlaylistStore {
  playlist: IVideo[];
}

export const playlist: Reducer<IVideo[], TPlaylistAction> = (
  state = [],
  action,
) => {
  switch (action.type) {
    case EPlaylist.PLAYLIST_SUCCESS: {
      return state.concat(action.payload);
    }
    default:
      return state;
  }
};

export const playlistReducer = combineReducers({
  playlist,
});
