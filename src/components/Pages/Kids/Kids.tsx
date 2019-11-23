import React from 'react';
import {connect} from 'react-redux';
import Scroller from '@enact/moonstone/Scroller';
import {add, is} from '@enact/core/keymap';

import {kidsSerialsStart} from '../../../modules/kidsSerials/kidsSerials.actions';
import {CollectionKidsSerials} from '../../Collections/KidsSerials/KidsSerials';
import {IStore} from '../../../reducers';
import {serialIds} from '../../../modules/kidsSerials/kidsSerials.constants';
import {CollectionRecommendations} from '../../Collections/Recommendations/Recommendations';
import {IKidsSerial} from '../../../modules/kidsSerial/kidsSerial.actions';
import {IVideos} from '../../../modules/videos/videos.actions';
import {recommendationsStart} from '../../../modules/recommendations/recommendations.actions';
import {lastSeenStart} from '../../../modules/lastSeen/lastSeen.actions';
import {
  playlistSetCurrentVideo,
  playlistSetVideos,
} from '../../../modules/playlist/playlist.actions';
import {setRoute} from '../../../modules/routes/routes.actions';
// import {CollectionLastSeen} from '../../Collections/LastSeen/LastSeen';

interface IStateProps {
  kidsSerial: IKidsSerial;
  recommendations: number[];
  lastSeen: number[];
  videos: IVideos;
}

interface IDispatchProps {
  kidsSerialsStart: typeof kidsSerialsStart;
  recommendationsStart: typeof recommendationsStart;
  lastSeenStart: typeof lastSeenStart;
  playlistSetVideos: typeof playlistSetVideos;
  playlistSetCurrentVideo: typeof playlistSetCurrentVideo;
  setRoute: typeof setRoute;
}

interface IProps extends IStateProps, IDispatchProps {}

export class KidsComponent extends React.PureComponent<IProps> {
  private scrollTo = null;
  private positionY = 0;
  private step = 600;

  private playVideo = (videoIds: number[]) => {
    const {playlistSetVideos, playlistSetCurrentVideo, setRoute} = this.props;

    playlistSetVideos(videoIds);

    return (currentVideoId: number) => {
      playlistSetCurrentVideo(currentVideoId);
      setRoute('player');
    };
  };

  private getScrollTo = (scrollTo) => {
    this.scrollTo = scrollTo;
  };

  private handleKeyDown = (event) => {
    add('up', 38);
    add('down', 40);

    if (!this.scrollTo) {
      return;
    }

    if (is('up')(event.keyCode)) {
      this.scrollTo({position: {y: this.positionY - this.step}});
    } else if (is('down')(event.keyCode)) {
      this.scrollTo({position: {y: this.positionY + this.step}});
    }
  };

  componentDidMount(): void {
    const {kidsSerialsStart, recommendationsStart, lastSeenStart} = this.props;

    kidsSerialsStart({serialsIds: serialIds});
    recommendationsStart();
    lastSeenStart();
  }

  render() {
    const {recommendations, kidsSerial, lastSeen, videos} = this.props;

    return (
      <Scroller
        direction="vertical"
        verticalScrollbar="hidden"
        style={{height: `100%`}}
        cbScrollTo={this.getScrollTo}
        onKeyDown={this.handleKeyDown}
      >
        <CollectionRecommendations
          recommendations={recommendations}
          videos={videos}
          playVideo={this.playVideo}
        />
        {/*<CollectionLastSeen lastSeen={lastSeen} videos={videos} />*/}
        {/*<CollectionKidsSerials*/}
        {/*  kidsSerial={kidsSerial}*/}
        {/*  videos={videos}*/}
        {/*  playVideo={this.playVideo}*/}
        {/*/>*/}
      </Scroller>
    );
  }
}

const mapStateToProps = (store: IStore): IStateProps => {
  const {
    kidsSerialReducer: {kidsSerial},
    recommendationsReducer: {recommendations},
    lastSeenReducer: {lastSeen},
    videosReducer: {videos},
  } = store;

  return {
    kidsSerial,
    recommendations,
    lastSeen,
    videos,
  };
};

const mapDispatchToProps: IDispatchProps = {
  kidsSerialsStart,
  recommendationsStart,
  lastSeenStart,
  playlistSetVideos,
  playlistSetCurrentVideo,
  setRoute,
};

export const Kids = connect(mapStateToProps, mapDispatchToProps)(KidsComponent);
