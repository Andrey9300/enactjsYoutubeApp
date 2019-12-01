import React from 'react';
import {render} from 'react-dom';
import {AppElement} from './main';
// import {playlistNextWithCategory} from './mocks/playlist/playlist.mocks';
// playlistNextWithCategory();
const appElement = <AppElement />;

// In a browser environment, render instead of exporting
if (typeof window !== 'undefined') {
  render(appElement, document.getElementById('root'));
}
/**
 * api mocks for development
 *
 * e.g.
 * import {playlistNextWithCategory} from '@/mocks/playlist/playlist.mocks';
 * playlistNextWithCategory();
 */

export default appElement;
