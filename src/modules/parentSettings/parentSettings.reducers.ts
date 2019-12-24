import {combineReducers, Reducer} from 'redux';

import {EParentSettings, isInfinite} from './parentSettings.constants';
import {IParentSettings} from './parentSettings.actions';
import {persistedState} from '../../store/configureStore';

type TParentSettingsAction = TypedAction<
  typeof import('./parentSettings.actions')
>;

export const getInitialParentSettingsState = (persistedState) => {
  if (
    !persistedState ||
    !persistedState.state ||
    !persistedState.state.parentSettingsReducer ||
    !persistedState.state.parentSettingsReducer.parentSettings
  ) {
    return {
      age: 8,
      timer: isInfinite,
      timerStartTimestamp: null,
      waitingParentControl: false,
    };
  } else {
    return persistedState.state.parentSettingsReducer.parentSettings;
  }
};

const parentSettings: Reducer<IParentSettings, TParentSettingsAction> = (
  state = getInitialParentSettingsState(persistedState),
  action,
) => {
  switch (action.type) {
    case EParentSettings.SET_PARENT_SETTINGS: {
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
};

const codeChecked: Reducer<boolean, TParentSettingsAction> = (
  state = false,
  action,
) => {
  switch (action.type) {
    case EParentSettings.SET_CODE_CHECKED: {
      return action.payload;
    }
    default:
      return state;
  }
};

export const parentSettingsReducer = combineReducers({
  parentSettings,
  codeChecked,
});
