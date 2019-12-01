import {IVideo} from '../../interfaces/IVideo';
import poster from './poster.svg';

export const FAKE_VIDEO: IVideo = {
  metadata: {
    manifest: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
    start_video: 0,
    duration: null,
    duration_ms: null,
    duration_human: null,
    compatibility: null,
    is_favorite: false,
    is_discommend: false,
    reactions: [],
    personal_rating: 0,
  },
  content: {
    id: 1,
    title: '',
    description: '',
    logo: null,
    genres: [],
    poster: [
      {
        height: 640,
        url: poster,
        webp_url: null,
        width: 320,
      },
    ],
    external_links: [],
    category: 'series',
    preview: [],
    rating: null,
    thumbnails: [],
  },
  chunk_len: 10,
  originalIndex: 0,
};
