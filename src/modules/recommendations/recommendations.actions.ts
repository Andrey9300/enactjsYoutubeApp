import {ERecommendations} from './recommendations.constants';

export const recommendationsSuccess = (payload: number[]) =>
  ({
    type: ERecommendations.RECOMMENDATIONS_SUCCESS,
    payload,
  } as const);

export const recommendationsError = (payload: any) =>
  ({
    type: ERecommendations.RECOMMENDATIONS_ERROR,
    payload,
  } as const);

export const recommendationsStart = () =>
  ({type: ERecommendations.RECOMMENDATIONS_START} as const);
