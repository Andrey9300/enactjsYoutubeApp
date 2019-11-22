import {IVideo} from '../../interfaces/IVideo';
import {getVideoContent} from './content';

export const getVideoId = (video: IVideo) => {
  const content = getVideoContent(video);

  if (!content) {
    return null;
  }

  return content.id;
};
