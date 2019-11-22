import {call, put} from 'redux-saga/effects';

import {
  kidsSerialError,
  kidsSerialLoading,
  kidsSerialSuccess,
  ISeriesStartPayload,
} from './kidsSerial.actions';
import {videoListService} from '../../services/video';
import {normalizeVideos} from '../../services/normalizers/video';
import {videosApply} from '../videos/videos.actions';

export function* kidsSerialSaga({payload}: Action<ISeriesStartPayload>) {
  yield put(kidsSerialLoading());

  const axiosResponse = yield call(videoListService, {
    ids: payload.seriesIds,
  });

  if ('error' in axiosResponse) {
    yield put(kidsSerialError());
    return;
  }
  const {response} = axiosResponse;
  const normalizeVideo = normalizeVideos(response);

  yield put(videosApply(normalizeVideo.entities.videos));
  yield put(
    kidsSerialSuccess({
      [payload.serialId]: {
        videos: normalizeVideo.result,
        serialName: payload.serialName,
      },
    }),
  );
}
