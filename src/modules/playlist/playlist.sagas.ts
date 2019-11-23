import {select, call, put} from 'redux-saga/effects';

import {getPlaylistCurrentVideoId} from './playlist.selectors';
import {getVideos} from '../videos/playlist.selectors';
import {PlayerService} from '../../services/playerService';
import {getVideoManifest} from '../../utils/IVideo/manifest';

export function* playlistPlayVideoSaga() {
  const videoId = yield select(getPlaylistCurrentVideoId);
  const videos = yield select(getVideos);
  const currentVideo = videos[videoId];
  const playerService = yield call([PlayerService, 'getInstance']);

  yield call([playerService, 'play'], getVideoManifest(currentVideo));
}
