import {combineReducers, Reducer} from 'redux';

import {IKidsSerialsSuccess} from './kidsSerials.actions';
import {EKidsSerials} from './kidsSerials.constants';

type TKidsSerialsAction = TypedAction<typeof import('./kidsSerials.actions')>;

const initialState: IKidsSerialsSuccess = [];

const kidsSerials: Reducer<IKidsSerialsSuccess, TKidsSerialsAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case EKidsSerials.KIDS_SERIALS_CLEAN: {
      return initialState;
    }
    case EKidsSerials.KIDS_SERIALS_SUCCESS: {
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
};

export const kidsSerialsReducer = combineReducers({
  kidsSerials,
});
