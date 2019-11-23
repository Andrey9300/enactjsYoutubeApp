import {all, fork, takeEvery} from 'redux-saga/effects';

import {ELastSeen} from './lastSeen.constants';
import {lastSeenStartSaga} from './lastSeen.sagas';

function* lastSeenStartSagaWatcher(): any {
  yield takeEvery(ELastSeen.LAST_SEEN_START, lastSeenStartSaga);
}

export function* allLastSeenSagasWatcher(): any {
  yield all([fork(lastSeenStartSagaWatcher)]);
}
