import {all, call, fork, takeEvery} from 'redux-saga/effects';

import {EPlaylist} from './playlist.constants';
import {videoPlaylistStartSaga} from './playlist.sagas';

function* videoPlaylistStartSagaWatcher(): any {
  yield takeEvery(EPlaylist.VIDEO_PLAYLIST_START, videoPlaylistStartSaga);
}

export function* allPlaylistSagasWatcher(): any {
  yield all([fork(videoPlaylistStartSagaWatcher)]);
}
