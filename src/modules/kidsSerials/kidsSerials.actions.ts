import {ISeries} from '../../interfaces/ISeries';
import {EKidsSerials} from './kidsSerials.constants';

export interface IKidsSerialsSuccess {
  [key: number]: ISeries;
}

export interface ISerialsStartPayload {
  serialsIds: number[];
}

export const kidsSerialsClean = () =>
  ({
    type: EKidsSerials.KIDS_SERIALS_CLEAN,
  } as const);

export const kidsSerialsStart = (payload: ISerialsStartPayload) =>
  ({
    type: EKidsSerials.KIDS_SERIALS_START,
    payload,
  } as const);

export const kidsSerialsLoading = () =>
  ({
    type: EKidsSerials.KIDS_SERIALS_LOADING,
  } as const);

export const kidsSerialsSuccess = (payload: IKidsSerialsSuccess) =>
  ({
    type: EKidsSerials.KIDS_SERIALS_SUCCESS,
    payload,
  } as const);

export const kidsSerialsError = () =>
  ({
    type: EKidsSerials.KIDS_SERIALS_ERROR,
  } as const);
