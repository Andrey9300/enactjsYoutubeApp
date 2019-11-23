import React from 'react';
import {connect} from 'react-redux';
import VideoPlayer, {MediaControls} from '@enact/moonstone/VideoPlayer';
import IconButton from '@enact/moonstone/IconButton';
import Spotlight from '@enact/spotlight';

import {PlayerService} from '../../../services/playerService';
import {setRoute} from '../../../modules/routes/routes.actions';
import {IVideo} from '../../../interfaces/IVideo';
import {playlistPlayVideo} from '../../../modules/playlist/playlist.actions';

interface IStateProps {
  videos: IVideo[];
  playlistCurrentVideo: number;
}

interface IDispatchProps {
  setRoute: typeof setRoute;
  playlistPlayVideo: typeof playlistPlayVideo;
}

interface IProps extends IStateProps, IDispatchProps {}

export class PlayerComponent extends React.PureComponent<IProps> {
  state = {
    panelIndex: 0,
    panelsVisible: false,
    videoIndex: 0,
  };

  componentDidMount(): void {
    const {playlistPlayVideo} = this.props;

    PlayerService.getInstance().init();
    playlistPlayVideo();
  }

  componentDidUpdate(prevProps, prevState) {
    // After displaying the panels, move the focus to the main panel
    if (!prevState.panelsVisible && this.state.panelsVisible) {
      Spotlight.focus('main-panel');
    }
  }

  handleShowPanelsClick = () => {
    this.setState({panelsVisible: true});
  };

  render() {
    return (
      <VideoPlayer
        spotlightDisabled={this.state.panelsVisible}
        className={'enact-fit'}
        id="videoPlayer"
      >
        <infoComponents>Описание</infoComponents>
        <MediaControls>
          <rightComponents>
            <IconButton
              backgroundOpacity="translucent"
              onClick={this.handleShowPanelsClick}
              spotlightDisabled={this.state.panelsVisible}
            >
              list
            </IconButton>
          </rightComponents>
        </MediaControls>
      </VideoPlayer>
    );
  }
}

const mapStateToProps = ({
  videosReducer: {videos},
  playlistReducer: {playlistCurrentVideo},
}): IStateProps => ({
  videos,
  playlistCurrentVideo,
});

const mapDispatchToProps: IDispatchProps = {
  setRoute,
  playlistPlayVideo,
};

export const Player = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerComponent);
