import {EApiUrls} from '../../enums/EApiUrls';
import {apifyResponse, Mocker} from '../../mocks/mocker';
import {getMockVideoInfoCollection} from '../utils/videoInfoCollections';
import {createApiUrl} from '../../services/api';
import {EConstants} from '../../utils/constants';

const STATUS_OK = 200;

export function playlistNextWithCategory() {
  const url = createApiUrl({
    endpoint: EApiUrls.NEXT,
    version: EConstants.API_VERSION_V2,
  });
  const R_URL = new RegExp(url);

  const items = [
    ...getMockVideoInfoCollection(8, 'movie'),
    ...getMockVideoInfoCollection(4, 'music'),
    ...getMockVideoInfoCollection(3, 'tv_show'),
    ...getMockVideoInfoCollection(2, 'series'),
  ];

  Mocker.mock.onGet(R_URL).reply(STATUS_OK, apifyResponse(STATUS_OK, items));
}
