import {Provider} from 'react-redux';
import React from 'react';

import {App} from './components/App/App';
import {configureStore} from './store/configureStore';
import {rootSaga} from './sagas/index';

const store = configureStore();
store.runSaga(rootSaga);

function patchXhr(): void {
  const XHRProto = XMLHttpRequest.prototype;
  const HB_DOMAIN = 'hb.bizmrg.com';
  const DISABLE_CREDENTIALS_FIELD = '__DISABLE_CREDENTIALS_FIELD__';

  const oldOpen = XHRProto.open;
  // tslint:disable-next-line: variable-name
  XHRProto.open = function(..._args: unknown[]): void {
    const args = _args as Parameters<typeof oldOpen>;
    const url = args[1];

    if (url.includes(HB_DOMAIN)) {
      Reflect.set(this, DISABLE_CREDENTIALS_FIELD, true);
    }
    return oldOpen.apply(this, args);
  };

  const oldSend = XHRProto.send;
  XHRProto.send = function(...args: Parameters<typeof oldSend>): void {
    if (Reflect.get(this, DISABLE_CREDENTIALS_FIELD)) {
      this.withCredentials = false;
    }

    return oldSend.apply(this, args);
  };
}
patchXhr();

export const AppElement = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
