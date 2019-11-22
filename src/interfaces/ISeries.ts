export interface ISeries {
  id: number;
  name: string;
  description: string;
  seasons: Array<{
    number: number;
    episodes: Array<{
      episode: number;
      video_id: number;
    }>;
  }>;
  meta: {
    id: number;
  };
}
