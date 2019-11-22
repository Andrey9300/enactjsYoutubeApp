import {IVideo} from '../../interfaces/IVideo';
import {getVideoId} from './id';
import {getVideoTitle} from './title';

export function isVideoValid(video: IVideo): boolean {
  const notFound = video.not_found;
  const id = getVideoId(video);
  const title = getVideoTitle(video);

  return Boolean(!notFound && id && title);
}
