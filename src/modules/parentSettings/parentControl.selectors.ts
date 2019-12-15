import {IStore} from '@/reducers';

export const selectCodeChecked = (state: IStore) =>
  state.parentSettingsReducer.codeChecked;
