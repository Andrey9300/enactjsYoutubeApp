import {EPlaylist} from './playlist.constants';
import {IVideo} from '../../interfaces/IVideo';

export const playlistGet = (payload: IPlaylistGetPayload | null) =>
  ({
    type: EPlaylist.PLAYLIST_GET,
    payload,
  } as const);

export const playlistSuccess = (payload: IVideo) =>
  ({
    type: EPlaylist.PLAYLIST_SUCCESS,
    payload,
  } as const);

export const playlistError = (payload: any) =>
  ({
    type: EPlaylist.PLAYLIST_ERROR,
    payload,
  } as const);

export const videoPlaylistStart = () =>
  ({type: EPlaylist.VIDEO_PLAYLIST_START} as const);

export interface IPlaylistGetPayload {
  from_start: boolean;
}
