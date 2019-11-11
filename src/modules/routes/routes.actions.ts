import {ERoutes} from './routes.constants';

export const setRoute = (payload: string) =>
  ({
    type: ERoutes.SET_ROUTE,
    payload,
  } as const);

export const showMenu = (payload: boolean) =>
  ({
    type: ERoutes.SHOW_MENU,
    payload,
  } as const);
