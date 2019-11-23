import {combineReducers, Reducer, AnyAction} from 'redux';

import {ERoutes} from './routes.constants';

export type TRoutesAction = TypedAction<typeof import('./routes.actions')>;

export const route: Reducer<string, TRoutesAction> = (
  state = 'kids', // поменять
  action,
) => {
  switch (action.type) {
    case ERoutes.SET_ROUTE: {
      return action.payload;
    }
    default:
      return state;
  }
};

export const showMenu: Reducer<boolean, AnyAction> = (
  state = false,
  action,
) => {
  switch (action.type) {
    case ERoutes.SET_SHOW_MENU: {
      return action.payload;
    }
    default:
      return state;
  }
};

export const routesReducer = combineReducers({
  route,
  showMenu,
});
