import {all, fork, takeEvery, call, delay} from 'redux-saga/effects';

import {EParentSettings} from './parentSettings.constants';
import {setCodeCheckedSaga, checkTimerSaga} from './parentSettings.sagas';

function* setCodeCheckedSagaWatcher() {
  yield takeEvery(EParentSettings.SET_CODE_CHECKED, setCodeCheckedSaga);
}

function* checkTimerSagaWatcher() {
  while (true) {
    yield delay(10000);
    yield call(checkTimerSaga);
  }
}

export function* allParentSettingsSagasWatcher() {
  yield all([fork(setCodeCheckedSagaWatcher), fork(checkTimerSagaWatcher)]);
}
