import {IVideo} from '../../interfaces/IVideo';
import {getVideoContent} from './content';

export const getPosterSrc = (video: IVideo): string => {
  const content = getVideoContent(video);
  const defaultPoster = 'http://media.w3.org/2010/05/video/poster.png';

  let url: string;
  const {poster, preview} = content;

  if (poster && poster.length) {
    if (poster[0].webp_url) {
      url = poster[0].webp_url;
    } else {
      url = poster[0].url;
    }
  } else if (preview && preview.length) {
    const {jpeg} = preview[0].links;
    url = jpeg;
  }

  return url || defaultPoster;
};
