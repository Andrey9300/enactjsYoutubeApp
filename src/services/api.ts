import axios, {AxiosRequestConfig} from 'axios';

import {EApiUrls} from '../enums/EApiUrls';
import {TAxiosResponse} from '../interfaces/IApi';
import {EConstants} from '../utils/constants';

interface ICreateUrlParams {
  endpoint: EApiUrls | string;
  version?: string;
}

export function createApiUrl({
  endpoint,
  version = EConstants.API_VERSION_V1,
}: ICreateUrlParams) {
  return `api/${version}/${endpoint}`;
}

/** axios defaults */
// tslint:disable-next-line
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * TODO: X-Request-Id header
 */
const STATUS_OK = 200;
export interface IAxiosParams {
  method: RequestMethod;
  endpoint: EApiUrls | string;
  params?: Record<string, string | number | boolean>;
  data?: any;
  version?: string;
  info?: string;
}

/**
 * TODO: api token, csrf and shit
 * TODO: remove any
 * unknown by default for safe usage
 */
export async function axiosRequest<T = unknown>({
  method,
  endpoint,
  params = {},
  data = {},
  version = EConstants.API_VERSION_V1,
}: IAxiosParams): Promise<TAxiosResponse<T>> {
  const url = createApiUrl({
    endpoint,
    version,
  });
  const baseURL = 'http://pulsar.mail.cloud.devmail.ru'; // pulsarback.mail.ru
  const reducedParams = Object.entries(params).reduce((acc, [key, value]) => {
    if (value != null && value !== '') {
      return {...acc, [key]: value};
    }

    return acc;
  }, {});

  const axiosParams: AxiosRequestConfig = {
    baseURL,
    url,
    params: reducedParams,
    method,
    data,
    timeout: Number(EConstants.REQUEST_TIMEOUT),
    withCredentials: true /** TODO: выключать в сторибуке */,
    responseType: EConstants.RESPONSE_TYPE,
  };

  return axios(axiosParams)
    .then((response) => {
      if (
        !response ||
        response.status !== STATUS_OK ||
        !response.data ||
        response.data.status !== STATUS_OK
      ) {
        /** TODO: throw a proper error */
        throw new Error('some error');
      }

      return {response: response.data.body};
    })
    .catch((error) => {
      return {error};
    });
}
