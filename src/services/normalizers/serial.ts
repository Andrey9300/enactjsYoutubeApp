import {normalize, schema} from 'normalizr';

import {ISeries} from '../../interfaces/ISeries';

const serialSchema = new schema.Entity('serial');

const serialListSchema = new schema.Array(serialSchema);

interface INormalizedSeriesResult {
  entities: {
    serial: {
      [key: number]: number[];
    };
  };
  result: number[];
}

export const normalizeSerial = (entity: ISeries[]): INormalizedSeriesResult => {
  return normalize(entity, serialListSchema);
};
