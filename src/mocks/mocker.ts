import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export function apifyResponse(status: number, body: any) {
  return {
    status,
    body,
  };
}

/**
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
class MockerClass {
  public readonly mock = new MockAdapter(axios);
}

/**
 * singleton ftw
 */
export const Mocker = new MockerClass();
