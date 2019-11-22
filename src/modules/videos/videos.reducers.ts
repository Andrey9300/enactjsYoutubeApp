import {combineReducers, Reducer} from 'redux';

import {IVideo} from '../../interfaces/IVideo';
import {EVideos} from './videos.constants';

export type TVideosAction = TypedAction<typeof import('./videos.actions')>;

export interface IVideosStore {
  [key: number]: IVideo;
}

export const initialVideoState: IVideo = {
  metadata: {
    manifest: null,
    start_video: null,
    duration: null,
    duration_ms: null,
    duration_human: null,
    compatibility: null,
    is_favorite: false,
    is_discommend: false,
    reactions: null,
    personal_rating: null,
  },
  content: {
    id: null,
    title: null,
    description: null,
    logo: null,
    genres: [],
    poster: [],
    external_links: [],
    preview: [],
    rating: null,
    thumbnails: [],
  },
  chunk_len: 10,
  originalIndex: null,
};

export const videos: Reducer<IVideosStore, TVideosAction> = (
  state = [],
  action,
) => {
  switch (action.type) {
    case EVideos.VIDEOS_APPLY: {
      return {...state, ...action.payload};
    }
    case EVideos.VIDEOS_UPDATE: {
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
};

export const videosReducer = combineReducers({
  videos,
});
