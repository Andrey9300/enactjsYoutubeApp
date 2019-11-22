import {IVideo} from '../../interfaces/IVideo';
import {FAKE_M3U8} from './m3u8';

export const FAKE_VIDEO: IVideo = {
  metadata: {
    manifest: FAKE_M3U8,
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
    title: 'this is a fallback title',
    description: 'this is a fallback description',
    logo: null,
    genres: [],
    poster: [],
    external_links: [],
    preview: [],
    rating: null,
    thumbnails: [],
  },
  chunk_len: 10,
  originalIndex: 0,
};

export const FAKE_VIDEO_PLAYLIST_RESPONSE: IVideo[] = [FAKE_VIDEO];
