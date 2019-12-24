import {put, select} from 'redux-saga/effects';

import {setRoute} from '../routes/routes.actions';
import {setParentSettings} from './parentSettings.actions';
import {isInfinite} from './parentSettings.constants';
import {
  selectTimer,
  selectTimerStartTimestamp,
} from './parentSettings.selectors';
import {selectIsCheckCodeRoute} from '../routes/routes.selectors';

export function* setCodeCheckedSaga({payload}: Action<boolean>) {
  if (payload) {
    yield put(
      setParentSettings({
        waitingParentControl: false,
        timerStartTimestamp: Date.now(),
      }),
    );
    yield put(setRoute('parentControl'));
  }
}

export function* checkTimerSaga() {
  const timer = yield select(selectTimer);
  const isCheckCodeRoute = yield select(selectIsCheckCodeRoute);

  if (timer === isInfinite || isCheckCodeRoute) {
    yield put(setParentSettings({waitingParentControl: false}));
    return;
  }

  const timerStartTimestamp = yield select(selectTimerStartTimestamp);
  const msInMin = 60000;
  const timerInMs = timer * msInMin;
  const currentTime = Date.now();

  if (timerStartTimestamp + timerInMs <= currentTime) {
    yield put(setParentSettings({waitingParentControl: true}));
    yield put(setRoute('waitingParentControl'));
  }
}
