import {IVideo} from '../../interfaces/IVideo';

export const getVideoContent = (video: IVideo) => {
  if (!video) {
    return null;
  }

  return video.content;
};
