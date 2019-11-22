import {all, fork, takeEvery} from 'redux-saga/effects';

import {EKidsSerial} from './kidsSerial.constants';
import {kidsSerialSaga} from './kidsSerial.sagas';

function* kidsSerialSagaWatcher() {
  yield takeEvery(EKidsSerial.KIDS_SERIAL_START, kidsSerialSaga);
}

export function* allKidsSerialSagasWatcher() {
  yield all([fork(kidsSerialSagaWatcher)]);
}
