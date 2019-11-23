import {all, fork, takeEvery} from 'redux-saga/effects';

import {EPlaylist} from './playlist.constants';
import {playlistPlayVideoSaga} from './playlist.sagas';

function* playlistPlayVideoSagaWatcher(): any {
  yield takeEvery(EPlaylist.PLAYLIST_PLAY_VIDEO, playlistPlayVideoSaga);
}

export function* allPlaylistSagasWatcher(): any {
  yield all([fork(playlistPlayVideoSagaWatcher)]);
}
