import React from 'react';
import VideoPlayer, {MediaControls} from '@enact/moonstone/VideoPlayer';
import IconButton from '@enact/moonstone/IconButton';
import Spotlight from '@enact/spotlight';

import {IVideo} from '../../../interfaces/IVideo';

interface IProps {
  item: IVideo;
  setShowMenu: (show: boolean) => void;
}

export class Player extends React.PureComponent<IProps> {
  private videoRef = null;

  state = {
    panelIndex: 0,
    panelsVisible: false,
    videoIndex: 0,
  };

  componentDidMount(): void {
    const {setShowMenu} = this.props;

    setShowMenu(false);
  }

  componentDidUpdate(prevProps, prevState) {
    // After displaying the panels, move the focus to the main panel
    if (!prevState.panelsVisible && this.state.panelsVisible) {
      Spotlight.focus('main-panel');
    }
  }

  // handleNextPanelClick = () => this.setState(prevState => ({panelIndex: prevState.panelIndex + 1}))

  // handleSelectBreadcrumb = ({index}) => this.setState({panelIndex: index})

  handleHidePanelsClick = () => this.setState({panelsVisible: false});

  handleShowPanelsClick = () => {
    this.videoRef.hideControls();
    this.setState({panelsVisible: true});
  };

  setVideoIndex = (videoIndex) => this.setState({videoIndex});

  setVideoRef = (ref) => {
    this.videoRef = ref;
  };

  render() {
    // const {item} = this.props;
    return (
      <VideoPlayer
        ref={this.setVideoRef}
        spotlightDisabled={this.state.panelsVisible}
        className={'enact-fit'}
      >
        <source
          src={'http://media.w3.org/2010/05/sintel/trailer.mp4'}
          type="video/mp4"
        />
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
