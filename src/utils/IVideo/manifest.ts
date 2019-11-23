import {IVideo} from '../../interfaces/IVideo';
import {getVideoMetadata} from './metadata';

export const getVideoManifest = (video: IVideo) => {
  const metadata = getVideoMetadata(video);

  if (!metadata) {
    return null;
  }

  return metadata.manifest;
};
