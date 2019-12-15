import {put} from 'redux-saga/effects';

import {setRoute} from '../routes/routes.actions';

export function* setCodeCheckedSaga(action: Action<boolean>) {
  if (action.payload) {
    yield put(setRoute('parentControl'));
  }
}
