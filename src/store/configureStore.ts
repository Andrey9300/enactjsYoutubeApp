import {createStore, applyMiddleware, compose, Middleware} from 'redux';
import createSagaMiddleware, {END} from 'redux-saga';

import {rootReducer} from '../reducers';

export function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const middleware: Middleware[] = [sagaMiddleware];

  const composeEnhancers = compose;

  const store: any = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middleware),
  ));

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
}

// import {createStore} from 'redux';
//
// import {rootReducer} from '../reducers';
//
// export function configureStore(initialState = {}) {
//   const store = createStore(
//     rootReducer,
//     initialState
//   );
//
//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('../reducers', () => {
//       const nextRootReducer = require('../reducers').default;
//
//       store.replaceReducer(nextRootReducer);
//     });
//   }
//
//   return store;
// }
