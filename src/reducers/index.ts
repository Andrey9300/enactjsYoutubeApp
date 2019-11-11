import {combineReducers} from 'redux';
import {IRoutesStore, routesReducer} from '../modules/routes/routes.reducers';
import {IPlaylistStore, playlistReducer} from '../modules/playlist/playlist.reducers';

export interface IStore {
  routesReducer: IRoutesStore;
  playlistReducer: IPlaylistStore;
}

export const rootReducer = combineReducers<IStore>({
  routesReducer,
  playlistReducer,
});
