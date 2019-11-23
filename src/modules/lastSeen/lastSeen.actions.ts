import {ELastSeen} from './lastSeen.constants';

export const lastSeenSuccess = (payload: number[]) =>
  ({
    type: ELastSeen.LAST_SEEN_SUCCESS,
    payload,
  } as const);

export const lastSeenError = (payload: any) =>
  ({
    type: ELastSeen.LAST_SEEN_ERROR,
    payload,
  } as const);

export const lastSeenStart = () => ({type: ELastSeen.LAST_SEEN_START} as const);
