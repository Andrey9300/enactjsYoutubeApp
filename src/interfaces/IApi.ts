export interface IApi {
  status: number;
  body: object;
}

export type TAxiosResponse<T> = {response: T} | {error: unknown};
