import {all, call, fork, takeEvery} from 'redux-saga/effects';

import {ERecommendations} from './recommendations.constants';
import {recommendationsStartSaga} from './recommendations.sagas';

function* recommendationsStartSagaWatcher(): any {
  yield takeEvery(
    ERecommendations.RECOMMENDATIONS_START,
    recommendationsStartSaga,
  );
}

export function* allRecommendationsSagasWatcher(): any {
  yield all([fork(recommendationsStartSagaWatcher)]);
}
