import {call, put} from 'redux-saga/effects';

import {lastSeenError, lastSeenSuccess} from './lastSeen.actions';
import {lastSeenService} from '../../services/lastSeen';
import {normalizeVideos} from '../../services/normalizers/video';
import {EVideoParameters} from '../videos/videos.constants';
import {videosApply} from '../videos/videos.actions';

export interface IParamsForPlaylist {
  limit?: number;
  resume?: 'true' | 'false';
  ids?: string /** 1,2,3 */;
  category?: string;
  from_start?: boolean;
}

export function* lastSeenStartSaga() {
  const limit = EVideoParameters.LIMIT_VIDEO_FOR_PLAYLIST;

  const paramsForPlaylist: IParamsForPlaylist = {
    limit,
  };

  const axiosResponse = yield call(lastSeenService, paramsForPlaylist);

  if ('error' in axiosResponse) {
    yield put(lastSeenError({}));
    return;
  }

  const {response} = axiosResponse;

  const normalizeVideo = normalizeVideos(response);

  yield put(videosApply(normalizeVideo.entities.videos));
  yield put(lastSeenSuccess(normalizeVideo.result));
}
