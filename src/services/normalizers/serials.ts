import {normalize, schema} from 'normalizr';

import {ISeries} from '../../interfaces/ISeries';

const seriesSchema = new schema.Entity('series');

const seriesListSchema = new schema.Array(seriesSchema);

interface INormalizedSeriesResult {
  entities: {
    series: {
      [key: number]: ISeries;
    };
  };
  result: number[];
}

export const normalizeSeries = (entity: ISeries[]): INormalizedSeriesResult => {
  return normalize(entity, seriesListSchema);
};
