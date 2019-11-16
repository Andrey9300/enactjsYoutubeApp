import {IVideo} from '@/interfaces/IVideo';
import {getVideoContent} from './content';

export const getVideoDescription = (video: IVideo) => {
  const content = getVideoContent(video);

  if (!content) {
    return null;
  }

  return content.description;
};
