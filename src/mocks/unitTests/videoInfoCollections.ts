import {IVideo} from '../../interfaces/IVideo';
import {videoInfo} from './videoInfo';

export const getMockVideoInfoCollection = (collectionLength = 10) => {
  const videoInfoCollection: IVideo[] = [];

  for (let i = 1; i <= collectionLength; i++) {
    videoInfoCollection.push({
      ...videoInfo,
      content: {
        ...videoInfo.content,
        id: i,
        title: `title ${i}`,
        description: `description ${i}`,
        poster: [{
          url: 'http://media.w3.org/2010/05/sintel/poster.png',
          webp_url: '',
          height: 100,
          width: 100,
        }],
      },
    });
  }

  return videoInfoCollection;
};
