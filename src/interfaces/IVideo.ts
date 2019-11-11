interface IVideoApi {
  /**
   * `playlist` property is not correctly used; it changes `type`
   * (not TS type, but internal structure) inside reducer
   * (see `getPlaylistSrc` func), so we can't use initial `IVideoApi` object again
   * for `videoPlayStart`
   */
  original_playlist?: string;
  content: IContent;
  metadata: IMetadata;
  not_found?: boolean /** TODO: поддержать */;
  series?: ISeries /** TODO: поддержать */;
  chunk_len: number;
}

export interface IVideo extends IVideoApi {
  originalIndex: number;
  prevHeight?: number;
  prevWidth?: number;
  currentTime?: number;
  prevCurrentTime?: number;
  remainingTime?: number;
  fullscreenState?: boolean;
  height?: number;
  width?: number;
  volume?: number;
  toggleVolume?: number;
  qualityLevels?: any;
  selectedIndex?: number;
  bufferedPercent?: number;
  playOptions?: {
    loop?: boolean;
  };
  /** TODO: исправить тип после появления languages и subtitles на бэке */
  languages?: string[];
  subtitles?: string[];
  /** TODO: PULSAR-987 */
  rightHolder?: boolean;
}

export interface IContent {
  id: number;
  title: string;
  description: string;
  logo: IImage;
  genres: [];
  poster: IImage[];
  external_links: string[];
  preview?: IPreview[];
  rating: IRating;
  thumbnails?: IThumbnails[];
}

interface IPreview {
  width: number;
  height: number;
  links: TPreviewLinks;
}

export interface IThumbnails {
  width: number;
  height: number;
  thumb_width: number;
  thumb_height: number;
  second_per_frame: number;
  rows: number;
  columns: number;
  total: number;
  links: TThumbLinks;
}

type TContentType = 'webp' | 'jpeg';

type TPreviewLinks = Record<TContentType, string>;

export type TThumbLinks = Record<TContentType, string[]>;

interface IMetadata {
  manifest: string /** m3u8 plain text */;
  start_video: number /** seconds */;
  duration: number /** seconds */;
  duration_ms: number;
  duration_human: number;
  compatibility: number;
  is_favorite: boolean /** TODO: сделать приведение найминга полей из api в camelCase */;
  is_discommend: boolean;
  reactions: IReaction[];
  personal_rating: number;
}

interface IImage {
  url: string;
  webp_url: string;
  height: number;
  width: number;
}

interface IRating {
  imdb: number;
  mail: number;
}

export interface IReaction {
  type: any;
  chunks: IChunk[];
  count: number;
}

export interface IChunk {
  chunk: number;
  count: number;
}

export interface ISeries {
  id: number;
  number: number;
  episode: number;
  title: string;
  description: string;
  meta: {
    id: number;
  };
}
