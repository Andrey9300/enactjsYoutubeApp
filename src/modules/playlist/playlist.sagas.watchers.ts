import {all, fork, takeEvery} from 'redux-saga/effects';

import {EPlaylist} from './playlist.constants';
import {
  playlistPlayVideoSaga,
  playlistPlayNextVideoSaga,
} from './playlist.sagas';

function* playlistPlayVideoSagaWatcher(): any {
  yield takeEvery(EPlaylist.PLAYLIST_PLAY_VIDEO, playlistPlayVideoSaga);
}

function* playlistPlayNextVideoSagaWatcher(): any {
  yield takeEvery(
    EPlaylist.PLAYLIST_PLAY_NEXT_VIDEO,
    playlistPlayNextVideoSaga,
  );
}

export function* allPlaylistSagasWatcher(): any {
  yield all([
    fork(playlistPlayVideoSagaWatcher),
    fork(playlistPlayNextVideoSagaWatcher),
  ]);
}
