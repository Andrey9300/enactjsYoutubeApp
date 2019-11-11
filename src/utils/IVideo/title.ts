import {IVideo} from '@/interfaces/IVideo';
import {getVideoContent} from './content';

export const getVideoTitle = (video: IVideo) => {
  const content = getVideoContent(video);

  if (!content) {
    return null;
  }

  return content.title;
};
