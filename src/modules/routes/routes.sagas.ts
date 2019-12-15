import {put, select} from 'redux-saga/effects';

import {setRoute, setShowMenu, TRoutes} from './routes.actions';
import {selectCodeChecked} from '../parentSettings/parentControl.selectors';
import {setCodeChecked} from '../parentSettings/parentSettings.actions';

export function* setRouteSaga(action: Action<TRoutes>) {
  if (action.payload === 'player') {
    yield put(setShowMenu(false));
  } else {
    yield put(setShowMenu(true));
  }

  if (action.payload === 'parentControl') {
    const codeChecked = yield select(selectCodeChecked);

    if (!codeChecked) {
      yield put(setRoute('checkCode'));
    } else {
      yield put(setCodeChecked(false));
    }
  }
}
