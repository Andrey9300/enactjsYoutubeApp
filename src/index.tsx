import React from 'react';
import {render} from 'react-dom';
import {AppElement} from './main';

const appElement = (<AppElement />);

// In a browser environment, render instead of exporting
if (typeof window !== 'undefined') {
	render(appElement, document.getElementById('root'));
}

export default appElement;
