import React from 'react';

import {Playlist} from '../../Views/Playlist/Playlist';
import {IVideos} from '../../../modules/videos/videos.actions';
import {HeaderH1} from '../../../styles/Text';

interface IProps {
  videos: IVideos;
  recommendations: number[];
  playVideo: (videoIds: number[]) => (currentVideoId: number) => void;
}

export class CollectionRecommendations extends React.PureComponent<IProps> {
  private playVideoRecommendations = (videoId: number) => {
    const {playVideo, recommendations} = this.props;

    return playVideo(recommendations)(videoId);
  };

  render() {
    const {recommendations, videos} = this.props;

    if (!recommendations || !Object.values(recommendations).length) {
      return null;
    }

    const recommendationsVideos = recommendations.map((id) => videos[id]);

    return (
      <>
        <HeaderH1>Рекомендованные</HeaderH1>
        <Playlist
          id="99999"
          items={recommendationsVideos}
          playVideo={this.playVideoRecommendations}
        />
      </>
    );
  }
}
