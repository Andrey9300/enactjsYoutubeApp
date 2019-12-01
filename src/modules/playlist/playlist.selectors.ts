import {IStore} from '@/reducers';

export const getPlaylist = (state: IStore) => state.playlistReducer.playlist;

export const getPlaylistCurrentVideoId = (state: IStore) =>
  state.playlistReducer.playlistCurrentVideo;
