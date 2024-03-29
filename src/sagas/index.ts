import {fork, all} from 'redux-saga/effects';
import {allRecommendationsSagasWatcher} from '../modules/recommendations/recommendations.sagas.watchers';
import {allKidsSerialsSagasWatcher} from '../modules/kidsSerials/kidsSerials.sagas.watchers';
import {allKidsSerialSagasWatcher} from '../modules/kidsSerial/kidsSerial.sagas.watchers';
import {allLastSeenSagasWatcher} from '../modules/lastSeen/lastSeen.sagas.watchers';
import {allPlaylistSagasWatcher} from '../modules/playlist/playlist.sagas.watchers';
import {allRoutesSagasWatcher} from '../modules/routes/routes.sagas.watchers';
import {allParentSettingsSagasWatcher} from '../modules/parentSettings/parentSettings.sagas.watchers';

export function* rootSaga(): any {
  yield all([fork(allRecommendationsSagasWatcher)]);
  yield all([fork(allKidsSerialsSagasWatcher)]);
  yield all([fork(allKidsSerialSagasWatcher)]);
  yield all([fork(allLastSeenSagasWatcher)]);
  yield all([fork(allPlaylistSagasWatcher)]);
  yield all([fork(allRoutesSagasWatcher)]);
  yield all([fork(allParentSettingsSagasWatcher)]);
}
