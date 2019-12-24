import {IStore} from '@/reducers';

export const selectIsCheckCodeRoute = (state: IStore) =>
  state.routesReducer.route === 'checkCode';
