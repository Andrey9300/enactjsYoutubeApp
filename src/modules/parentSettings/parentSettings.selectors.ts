import {IStore} from '@/reducers';

export const selectCodeChecked = (state: IStore) =>
  state.parentSettingsReducer.codeChecked;

export const selectTimerStartTimestamp = (state: IStore) =>
  state.parentSettingsReducer.parentSettings.timerStartTimestamp;

export const selectTimer = (state: IStore) =>
  state.parentSettingsReducer.parentSettings.timer;

export const selectWaitingParentControl = (state: IStore) =>
  state.parentSettingsReducer.parentSettings.waitingParentControl;
