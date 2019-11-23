import {combineReducers, Reducer} from 'redux';

import {EKidsSerial} from './kidsSerial.constants';
import {IKidsSerial} from './kidsSerial.actions';

type TKidsSerialAction = TypedAction<typeof import('./kidsSerial.actions')>;

const kidsSerial: Reducer<IKidsSerial, TKidsSerialAction> = (
  state = [],
  action,
) => {
  switch (action.type) {
    case EKidsSerial.KIDS_SERIAL_CLEAN: {
      return [];
    }
    case EKidsSerial.KIDS_SERIAL_SUCCESS: {
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
};

export const kidsSerialReducer = combineReducers({
  kidsSerial,
});
