import {EKidsSerial} from './kidsSerial.constants';

export interface IKidsSerial {
  [key: number]: {videos: number[]; serialName: string};
}

export interface ISeriesStartPayload {
  seriesIds: number[];
  serialId: number;
  serialName: string;
}

export const kidsSerialClean = () =>
  ({
    type: EKidsSerial.KIDS_SERIAL_CLEAN,
  } as const);

export const kidsSerialStart = (payload: ISeriesStartPayload) =>
  ({
    type: EKidsSerial.KIDS_SERIAL_START,
    payload,
  } as const);

export const kidsSerialLoading = () =>
  ({
    type: EKidsSerial.KIDS_SERIAL_LOADING,
  } as const);

export const kidsSerialSuccess = (payload: IKidsSerial) =>
  ({
    type: EKidsSerial.KIDS_SERIAL_SUCCESS,
    payload,
  } as const);

export const kidsSerialError = () =>
  ({
    type: EKidsSerial.KIDS_SERIAL_ERROR,
  } as const);
