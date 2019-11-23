import {EVideos} from './videos.constants';
import {IVideo} from '../../interfaces/IVideo';

export interface IVideos {
  [key: number]: IVideo;
}

export const videosApply = (payload: IVideos) =>
  ({
    type: EVideos.VIDEOS_APPLY,
    payload,
  } as const);

export const videosUpdate = (payload: IVideo) =>
  ({
    type: EVideos.VIDEOS_UPDATE,
    payload,
  } as const);

export const videosError = () =>
  ({
    type: EVideos.VIDEOS_ERROR,
  } as const);
