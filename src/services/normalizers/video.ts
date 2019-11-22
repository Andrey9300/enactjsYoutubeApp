import mergeWith from 'lodash.mergewith';
import {normalize, NormalizedSchema, schema} from 'normalizr';
import {IVideo} from '../../interfaces/IVideo';
import {getVideoWithRightHolder} from '../../modules/videos/videos.getters';
import {initialVideoState} from '../../modules/videos/videos.reducers';
import {getVideoId} from '../../utils/IVideo/id';
import {isVideoValid} from '../../utils/IVideo/isValid';

export const videoSchema = new schema.Entity(
  'videos',
  {},
  {
    idAttribute(value: IVideo) {
      return getVideoId(value) as any;
    },
    processStrategy: (item: IVideo) => {
      const videoWithDefaultFields = mergeWith(
        {},
        initialVideoState,
        item,
        (target, source) => {
          if (source == null) {
            return target;
          }
        },
      );
      return getVideoWithRightHolder(videoWithDefaultFields);
    },
  },
);
const videoListSchema = new schema.Array(videoSchema);

export const normalizeVideos = (
  entities: Array<IVideo>,
): NormalizedSchema<{videos: Record<number, IVideo>}, number[]> => {
  const filteredEntities = (entities || []).filter(isVideoValid);

  return normalize(filteredEntities, videoListSchema);
};
