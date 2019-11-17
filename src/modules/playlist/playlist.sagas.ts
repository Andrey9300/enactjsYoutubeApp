import {call, put} from 'redux-saga/effects';

import {
  IPlaylistGetPayload,
  playlistError,
  playlistSuccess,
} from './playlist.actions';
import {EPlaylistParameters} from './playlist.constants';
import {videoPlaylistService} from '../../services/video';

export interface IParamsForPlaylist {
  limit?: number;
  resume?: 'true' | 'false';
  ids?: string /** 1,2,3 */;
  category?: string;
  from_start?: boolean;
}

/**
 * Вызывается только при инициализации плеера
 */
export function* videoPlaylistStartSaga() {
  yield call(videoPlaylistGetSaga, {
    resume: 'true',
  });

  // const playlist = yield select(getPlaylist);
  //
  // if (playlist && playlist.length) {
  //   yield call(
  //     [PostMessageHelper, 'sendPostMessage'],
  //     EPostMessageTypes.PLAYER_GOT_PLAYLIST,
  //   );
  //
  //   yield put(videoPlaylistStartVideoByIndex({selectedIndex: 0}));
  // } else {
  //   yield put(videoPlaylistError({}));
  // }
}

export function* videoPlaylistGetSaga(
  params: IParamsForPlaylist & Partial<IPlaylistGetPayload>,
) {
  params = params || {};
  const limit = EPlaylistParameters.LIMIT_VIDEO_FOR_PLAYLIST;

  const paramsForPlaylist: IParamsForPlaylist = {
    ...params,
    limit,
  };

  const axiosResponse = yield call(videoPlaylistService, paramsForPlaylist);

  if ('error' in axiosResponse) {
    yield put(playlistError({}));
    return;
  }

  const {response} = axiosResponse;
}
