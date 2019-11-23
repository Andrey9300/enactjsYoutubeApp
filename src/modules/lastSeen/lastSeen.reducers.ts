import {combineReducers, Reducer} from 'redux';

import {ELastSeen} from './lastSeen.constants';

export type TPlaylistAction = TypedAction<typeof import('./lastSeen.actions')>;

export const lastSeen: Reducer<number[], TPlaylistAction> = (
  state = [],
  action,
) => {
  switch (action.type) {
    case ELastSeen.LAST_SEEN_SUCCESS: {
      return [...state, ...action.payload];
    }
    case ELastSeen.LAST_SEEN_ERROR: {
      return state;
    }
    default:
      return state;
  }
};

export const lastSeenReducer = combineReducers({
  lastSeen,
});
