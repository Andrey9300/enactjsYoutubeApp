import {IStore} from '@/reducers';

export const getPlaylistCurrentVideoId = (state: IStore) =>
  state.playlistReducer.playlistCurrentVideo;
