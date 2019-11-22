import {EApiUrls} from '../enums/EApiUrls';
import {ISeries} from '../interfaces/ISeries';
import {axiosRequest} from './api';
import {EConstants} from '../utils/constants';

interface ITvSerialsListSeriesParams {
  ids: number[];
  detailed?: boolean;
  offset?: number;
  limit?: number;
}

export async function tvSerialsListService({
  ids,
  detailed = true,
  offset,
  limit,
}: ITvSerialsListSeriesParams) {
  return axiosRequest<ISeries[]>({
    method: 'GET',
    endpoint: `${EApiUrls.TV_SERIALS}/list`,
    params: {
      ids: ids.join(','),
      detailed,
      offset,
      limit,
    },
    version: EConstants.API_VERSION_V2,
  });
}
