import {IVideo} from '../../interfaces/IVideo';
import {getVideoTitle} from '../../utils/IVideo/title';

export const getVideoWithRightHolder = (video: IVideo) => {
  const title = getVideoTitle(video);

  if (!title) {
    return video;
  }

  const newTitle = title.replace(/^\[DEMO\]/, '');

  video.rightHolder =
    video.rightHolder === undefined
      ? newTitle.length !== title.length
      : video.rightHolder;

  const nVideo = {
    ...video,
    content: {
      ...video.content,
      title: newTitle,
    },
  };

  return nVideo;
};
