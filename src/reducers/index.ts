import {combineReducers} from 'redux';
import {routesReducer} from '../modules/routes/routes.reducers';
import {videosReducer} from '../modules/videos/videos.reducers';
import {recommendationsReducer} from '../modules/recommendations/recommendations.reducers';
import {kidsSerialsReducer} from '../modules/kidsSerials/kidsSerials.reducers';
import {kidsSerialReducer} from '../modules/kidsSerial/kidsSerial.reducers';

export const rootReducer = combineReducers({
  routesReducer,
  videosReducer,
  recommendationsReducer,
  kidsSerialsReducer,
  kidsSerialReducer,
});

export interface IStore extends ReturnType<typeof rootReducer> {}
