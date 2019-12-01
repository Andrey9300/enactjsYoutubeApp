import {all, fork, takeEvery} from 'redux-saga/effects';

import {ERoutes} from './routes.constants';
import {setRouteSaga} from './routes.sagas';

function* setRouteSagaWatcher(): any {
  yield takeEvery(ERoutes.SET_ROUTE, setRouteSaga);
}

export function* allRoutesSagasWatcher() {
  yield all([fork(setRouteSagaWatcher)]);
}
