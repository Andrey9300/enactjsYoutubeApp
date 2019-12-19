import {select, call, put} from 'redux-saga/effects';

import {getPlaylist, getPlaylistCurrentVideoId} from './playlist.selectors';
import {getVideos} from '../videos/playlist.selectors';
import {PlayerService} from '../../services/playerService';
import {getVideoManifest} from '../../utils/IVideo/manifest';
import {playlistSetCurrentVideo} from './playlist.actions';

export function* playlistPlayVideoSaga() {
  const videoId = yield select(getPlaylistCurrentVideoId);

  yield call(playlistPlayIndexVideoSaga, videoId);
}

export function* playlistPlayNextVideoSaga() {
  const playlist = yield select(getPlaylist);
  const videoId = yield select(getPlaylistCurrentVideoId);
  const currentIndex = playlist.findIndex(
    (playlistVideoId) => playlistVideoId === videoId,
  );
  const nextVideoId = playlist[currentIndex + 1];

  if (!nextVideoId) {
    return;
  }

  yield call(playlistPlayIndexVideoSaga, nextVideoId);
}

export function* playlistPlayIndexVideoSaga(videoId: number) {
  const videos = yield select(getVideos);

  if (!videos[videoId]) {
    return;
  }

  yield put(playlistSetCurrentVideo(videoId));
}
