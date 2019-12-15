import {ERoutes} from './routes.constants';

export type TRoutes =
  | 'main'
  | 'search'
  | 'lastSeen'
  | 'player'
  | 'profile'
  | 'channels'
  | 'kids'
  | 'parentControl'
  | 'checkCode';

export const setRoute = (payload: TRoutes) =>
  ({
    type: ERoutes.SET_ROUTE,
    payload,
  } as const);

export const setShowMenu = (payload: boolean) =>
  ({
    type: ERoutes.SET_SHOW_MENU,
    payload,
  } as const);
