import {all, fork, takeEvery} from 'redux-saga/effects';

import {EParentSettings} from './parentSettings.constants';
import {setCodeCheckedSaga} from './parentSettings.sagas';

function* setCodeCheckedSagaWatcher() {
  yield takeEvery(EParentSettings.SET_CODE_CHECKED, setCodeCheckedSaga);
}

export function* allParentSettingsSagasWatcher() {
  yield all([fork(setCodeCheckedSagaWatcher)]);
}
