import {IVideo} from '../../interfaces/IVideo';

export const videoInfo: IVideo = {
  metadata: {
    manifest: null,
    start_video: null,
    duration: null,
    duration_ms: null,
    duration_human: null,
    compatibility: null,
    is_favorite: null,
    is_discommend: null,
    personal_rating: null,
    reactions: null,
  },
  content: {
    id: null,
    title: null,
    description: null,
    logo: null,
    genres: [],
    poster: null,
    external_links: null,
    preview: null,
    thumbnails: null,
    rating: null,
  },
  chunk_len: 10,
  originalIndex: 0,
};
