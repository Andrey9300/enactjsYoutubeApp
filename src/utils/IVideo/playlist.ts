import {EConstants} from '../constants';

export function getPlaylistSrc(playlist: string): string {
  if (!playlist || !playlist.length) {
    return '';
  }

  return `data:${EConstants.PLAYLIST_TYPE_DEFAULT};base64,${btoa(playlist)}`;
}
