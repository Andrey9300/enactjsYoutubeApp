import {IVideo} from '../../interfaces/IVideo';
import {FAKE_VIDEO} from '../data/video.data';
import {getRandomInt} from '../../utils/math';
import {posters} from '../data/posters';

const DEFAULT_COLLECTION_LENGTH = 10;

export const getMockVideoInfoCollection = (
  collectionLength = DEFAULT_COLLECTION_LENGTH,
  category: string = null,
) => {
  const videoInfoCollection: IVideo[] = [];
  const maxId = 100000;
  const maxDuration = 3000;

  for (let i = 1; i <= collectionLength; i++) {
    const randomInt = getRandomInt(0, maxId);
    videoInfoCollection.push({
      ...FAKE_VIDEO,
      content: {
        ...FAKE_VIDEO.content,
        id: randomInt,
        title: `${randomInt} this is a fallback title`,
        description: `${randomInt} this is a fallback description`,
        poster: [
          {
            height: 640,
            url: posters[i % 8],
            webp_url: null,
            width: 320,
          },
        ],
        category,
      },
      metadata: {
        ...FAKE_VIDEO.metadata,
        duration: getRandomInt(0, maxDuration),
      },
      originalIndex: i,
    });
  }

  return videoInfoCollection;
};
