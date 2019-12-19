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
import {Wrapper} from './PlayerStyles';
import {getVideoManifest} from '../../../utils/IVideo/manifest';
import {getPlaylistSrc} from '../../../utils/IVideo/playlist';
import {EConstants} from '../../../utils/constants';

interface IStateProps {
  videos: IVideo[];
  playlistCurrentVideo: number;
}

interface IDispatchProps {
  playlistPlayVideo: typeof playlistPlayVideo;
  playlistPlayNextVideo: typeof playlistPlayNextVideo;
}

interface IProps extends IStateProps, IDispatchProps {}

export class PlayerComponent extends React.PureComponent<IProps> {
  componentDidMount(): void {
    const {playlistPlayVideo, playlistPlayNextVideo} = this.props;

    PlayerService.getInstance().init();
    PlayerService.getInstance().onEndedCallback(playlistPlayNextVideo);
    playlistPlayVideo();
  }

  render() {
    const {videos, playlistCurrentVideo} = this.props;
    const title = getVideoTitle(videos[playlistCurrentVideo]);
    const src = getPlaylistSrc(getVideoManifest(videos[playlistCurrentVideo]));

    return (
      <Wrapper title={title} className="enact-fit" id={EConstants.VIDEO_TAG_ID}>
        <source src={src} type="application/x-mpegURL" />
        <infoComponents>Описание</infoComponents>
        <MediaControls>
          <rightComponents>
            <IconButton backgroundOpacity="translucent">list</IconButton>
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
};

export const Player = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerComponent);
