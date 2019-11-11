import {EApiUrls} from '../enums/EApiUrls';
import {IVideo} from '../interfaces/IVideo';
import {EConstants} from '../utils/constants';
import {axiosRequest} from './api';

export async function videoPlaylistService(params: any) {
  const {limit, resume, ids, category, from_start} = params;

  return axiosRequest<IVideo[]>({
    method: 'GET',
    endpoint: `${EApiUrls.NEXT}`,
    version: EConstants.API_VERSION_V2,
    params: {
      limit,
      resume,
      ids,
      category,
      from_start,
    },
  });
}

// export async function videoListService({ids}: {ids: number[]}) {
//   return axiosRequest<IVideo[]>({
//     method: 'GET',
//     endpoint: EApiUrls.VIDEO_LIST,
//     params: {
//       ids: ids.join(','),
//     },
//     version: EConstants.API_VERSION_V2,
//   });
// }
