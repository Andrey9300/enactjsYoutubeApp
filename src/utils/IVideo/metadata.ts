import {IVideo} from '../../interfaces/IVideo';

export const getVideoMetadata = (video: IVideo) => {
  if (!video) {
    return null;
  }

  return video.metadata;
};
