import React from 'react';
import {connect} from 'react-redux';
import {MediaControls} from '@enact/moonstone/VideoPlayer';
import IconButton from '@enact/moonstone/IconButton';

import {PlayerService} from '../../../services/playerService';
import {IVideo} from '../../../interfaces/IVideo';
import {
  playlistPlayNextVideo,
  playlistPlayVideo,
} from '../../../modules/playlist/playlist.actions';
import {getVideoTitle} from '../../../utils/IVideo/title';
import {setRoute} from '../../../modules/routes/routes.actions';
import {Wrapper} from './PlayerStyles';

interface IStateProps {
  videos: IVideo[];
  playlistCurrentVideo: number;
}

interface IDispatchProps {
  playlistPlayVideo: typeof playlistPlayVideo;
  playlistPlayNextVideo: typeof playlistPlayNextVideo;
  setRoute: typeof setRoute;
}

interface IProps extends IStateProps, IDispatchProps {}

export class PlayerComponent extends React.PureComponent<IProps> {
  componentDidMount(): void {
    const {playlistPlayVideo, playlistPlayNextVideo} = this.props;

    PlayerService.getInstance().init();
    PlayerService.getInstance().onEndedCallback(playlistPlayNextVideo);
    playlistPlayVideo();
  }

  handleShowPanelsClick = () => {
    const {setRoute} = this.props;

    setRoute('kids');
  };

  render() {
    const {videos, playlistCurrentVideo} = this.props;
    const title = getVideoTitle(videos[playlistCurrentVideo]);

    return (
      <Wrapper
        title={title}
        className={'enact-fit'}
        id="videoPlayer"
        autoPlay={true}
      >
        <infoComponents>Описание</infoComponents>
        <MediaControls>
          <rightComponents>
            <IconButton
              backgroundOpacity="translucent"
              onClick={this.handleShowPanelsClick}
            >
              list
            </IconButton>
          </rightComponents>
        </MediaControls>
      </Wrapper>
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
  playlistPlayVideo,
  playlistPlayNextVideo,
  setRoute,
};

export const Player = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerComponent);
