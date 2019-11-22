import {ISeries} from '@/interfaces/ISeries';
import {IStore} from '@/reducers';

const getSeries = (state: IStore) => state.kidsSerialsReducer.kidsSerials;

export const selectSeriesBySeriesId = (
  state: IStore,
  seriesId: number,
): ISeries | null => getSeries(state)[seriesId];

export const selectEpisodesIdsBySeriesId = (
  state: IStore,
  seriesId: number,
): number[] => {
  const series = selectSeriesBySeriesId(state, seriesId);
  const STRUCTURE_DEPTH = 2;

  if (!series) {
    return null;
  }

  return series.seasons
    .map((season) => season.episodes.map((episode) => episode.video_id))
    .flat(STRUCTURE_DEPTH);
};
