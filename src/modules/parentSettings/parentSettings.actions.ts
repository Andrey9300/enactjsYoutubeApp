import {EParentSettings} from './parentSettings.constants';

export interface IParentSettings {
  age?: number;
  timer?: number;
  timerStartTimestamp?: number;
  waitingParentControl?: boolean;
}

export const setParentSettings = (payload: IParentSettings) =>
  ({
    type: EParentSettings.SET_PARENT_SETTINGS,
    payload,
  } as const);

export const setCodeChecked = (payload: boolean) =>
  ({
    type: EParentSettings.SET_CODE_CHECKED,
    payload,
  } as const);
