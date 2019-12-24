import {put, select} from 'redux-saga/effects';

import {setRoute, setShowMenu, TRoutes} from './routes.actions';
import {
  selectCodeChecked,
  selectWaitingParentControl,
} from '../parentSettings/parentSettings.selectors';
import {setCodeChecked} from '../parentSettings/parentSettings.actions';

export function* setRouteSaga({payload}: Action<TRoutes>) {
  const waitingParentControl = yield select(selectWaitingParentControl);

  if (waitingParentControl) {
    return;
  }

  if (payload === 'parentControl') {
    const codeChecked = yield select(selectCodeChecked);

    if (!codeChecked) {
      yield put(setRoute('checkCode'));
    } else {
      yield put(setCodeChecked(false));
    }
  }

  if (payload === 'player') {
    yield put(setShowMenu(false));
  } else {
    yield put(setShowMenu(true));
  }
}
