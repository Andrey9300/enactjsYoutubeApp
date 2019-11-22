import {call, put} from 'redux-saga/effects';

import {
  recommendationsError,
  recommendationsSuccess,
} from './recommendations.actions';
import {videoPlaylistService} from '../../services/video';
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

// TODO: добавить параметры запроса
export function* recommendationsStartSaga() {
  const limit = EVideoParameters.LIMIT_VIDEO_FOR_PLAYLIST;

  const paramsForPlaylist: IParamsForPlaylist = {
    limit,
    ids: '489024',
  };

  const axiosResponse = yield call(videoPlaylistService, paramsForPlaylist);

  if ('error' in axiosResponse) {
    yield put(recommendationsError({}));
    return;
  }

  const {response} = axiosResponse;

  const normalizeVideo = normalizeVideos(response);

  yield put(videosApply(normalizeVideo.entities.videos));
  yield put(recommendationsSuccess(normalizeVideo.result));
}
