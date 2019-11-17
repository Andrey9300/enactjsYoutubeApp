import {fork, all} from 'redux-saga/effects';
import {allPlaylistSagasWatcher} from '../modules/playlist/playlist.sagas.watchers';

export function* rootSaga(): any {
  yield all([fork(allPlaylistSagasWatcher)]);
}
