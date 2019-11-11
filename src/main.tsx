import {Provider} from 'react-redux';
import React from 'react';

import {App} from './components/App/App';
import {configureStore} from './store/configureStore';
import {rootSaga} from './sagas/index';

const store = configureStore();
store.runSaga(rootSaga);

export const AppElement = () => (
	<Provider store={store}>
		<App />
	</Provider>
);
