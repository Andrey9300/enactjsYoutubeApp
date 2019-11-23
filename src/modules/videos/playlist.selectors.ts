import {IStore} from '@/reducers';

export const getVideos = (state: IStore) => state.videosReducer.videos;
