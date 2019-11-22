import {all, fork, takeEvery} from 'redux-saga/effects';

import {EKidsSerials} from './kidsSerials.constants';
import {kidsSerialsSaga} from './kidsSerials.sagas';

function* kidsSerialsSagaWatcher() {
  yield takeEvery(EKidsSerials.KIDS_SERIALS_START, kidsSerialsSaga);
}

export function* allKidsSerialsSagasWatcher() {
  yield all([fork(kidsSerialsSagaWatcher)]);
}
