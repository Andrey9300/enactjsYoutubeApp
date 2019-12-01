import {put} from 'redux-saga/effects';

import {setShowMenu, TRoutes} from './routes.actions';

export function* setRouteSaga(action: Action<TRoutes>) {
  if (action.payload === 'player') {
    yield put(setShowMenu(false));
  } else {
    yield put(setShowMenu(true));
  }
}
