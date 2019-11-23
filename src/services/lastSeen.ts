import {EApiUrls} from '../enums/EApiUrls';
import {IVideo} from '../interfaces/IVideo';
import {axiosRequest} from './api';
import {EConstants} from '../utils/constants';

export async function lastSeenService(params: any) {
  return axiosRequest<IVideo[]>({
    method: 'GET',
    endpoint: `${EApiUrls.LAST_SEEN}`,
    params: {
      limit: params.limit,
      offset: params.offset,
    },
    version: EConstants.API_VERSION_V1,
  });
}
