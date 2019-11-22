import {all, call, put, select} from 'redux-saga/effects';

import {
  kidsSerialsError,
  kidsSerialsLoading,
  kidsSerialsSuccess,
  ISerialsStartPayload,
} from './kidsSerials.actions';
import {normalizeSeries} from '../../services/normalizers/serials';
import {tvSerialsListService} from '../../services/tvSerials';
import {kidsSerialStart} from '../kidsSerial/kidsSerial.actions';
import {selectEpisodesIdsBySeriesId} from './kidsSerials.selectors';
import {serialIds} from './kidsSerials.constants';

export function* kidsSerialsSaga({payload}: Action<ISerialsStartPayload>) {
  yield put(kidsSerialsLoading());

  const axiosResponse = yield call(tvSerialsListService, {
    ids: payload.serialsIds,
  });

  if ('error' in axiosResponse) {
    yield put(kidsSerialsError());
    return;
  }
  const {response} = axiosResponse;
  const normalizedKidsSerials = normalizeSeries(response);

  yield put(kidsSerialsSuccess(normalizedKidsSerials.entities.series));

  yield all(
    serialIds.map((serialId) => {
      let serialName = '';
      if (
        normalizedKidsSerials.entities.series &&
        normalizedKidsSerials.entities.series[serialId]
      ) {
        serialName = normalizedKidsSerials.entities.series[serialId].name;
      }
      return call(kidsSeriesIdsSaga, serialId, serialName);
    }),
  );
}

function* kidsSeriesIdsSaga(serialId, serialName) {
  const seriesIds = yield select(selectEpisodesIdsBySeriesId, serialId);
  yield put(kidsSerialStart({seriesIds, serialId, serialName: serialName}));
}
