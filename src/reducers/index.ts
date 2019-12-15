import {combineReducers} from 'redux';
import {routesReducer} from '../modules/routes/routes.reducers';
import {videosReducer} from '../modules/videos/videos.reducers';
import {recommendationsReducer} from '../modules/recommendations/recommendations.reducers';
import {kidsSerialsReducer} from '../modules/kidsSerials/kidsSerials.reducers';
import {kidsSerialReducer} from '../modules/kidsSerial/kidsSerial.reducers';
import {lastSeenReducer} from '../modules/lastSeen/lastSeen.reducers';
import {playlistReducer} from '../modules/playlist/playlist.reducers';
import {parentSettingsReducer} from '../modules/parentSettings/parentSettings.reducers';

export const rootReducer = combineReducers({
  routesReducer,
  videosReducer,
  recommendationsReducer,
  kidsSerialsReducer,
  kidsSerialReducer,
  lastSeenReducer,
  playlistReducer,
  parentSettingsReducer,
});

export interface IStore extends ReturnType<typeof rootReducer> {}
