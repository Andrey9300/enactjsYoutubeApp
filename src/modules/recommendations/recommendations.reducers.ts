import {combineReducers, Reducer} from 'redux';

import {ERecommendations} from './recommendations.constants';

export type TPlaylistAction = TypedAction<
  typeof import('./recommendations.actions')
>;

export const recommendations: Reducer<number[], TPlaylistAction> = (
  state = [],
  action,
) => {
  switch (action.type) {
    case ERecommendations.RECOMMENDATIONS_SUCCESS: {
      return [...state, ...action.payload];
    }
    case ERecommendations.RECOMMENDATIONS_ERROR: {
      return state;
    }
    default:
      return state;
  }
};

export const recommendationsReducer = combineReducers({
  recommendations,
});
