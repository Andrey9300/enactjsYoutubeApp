import {fork, all} from 'redux-saga/effects';
import {allRecommendationsSagasWatcher} from '../modules/recommendations/recommendations.sagas.watchers';
import {allKidsSerialsSagasWatcher} from '../modules/kidsSerials/kidsSerials.sagas.watchers';
import {allKidsSerialSagasWatcher} from '../modules/kidsSerial/kidsSerial.sagas.watchers';

export function* rootSaga(): any {
  yield all([fork(allRecommendationsSagasWatcher)]);
  yield all([fork(allKidsSerialsSagasWatcher)]);
  yield all([fork(allKidsSerialSagasWatcher)]);
}
