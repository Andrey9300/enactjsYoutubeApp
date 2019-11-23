import {EPlaylist} from './playlist.constants';

export const playlistSuccess = (payload: number[]) =>
  ({
    type: EPlaylist.PLAYLIST_SUCCESS,
    payload,
  } as const);

export const playlistError = (payload: any) =>
  ({
    type: EPlaylist.PLAYLIST_ERROR,
    payload,
  } as const);

export const playlistSetVideos = (payload: number[]) =>
  ({type: EPlaylist.PLAYLIST_SET_VIDEOS, payload} as const);

export const playlistSetCurrentVideo = (payload: number) =>
  ({type: EPlaylist.PLAYLIST_SET_VIDEO, payload} as const);

export const playlistPlayVideo = () =>
  ({type: EPlaylist.PLAYLIST_PLAY_VIDEO} as const);
