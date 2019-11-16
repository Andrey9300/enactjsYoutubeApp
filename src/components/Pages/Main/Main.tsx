import React from 'react';
import {connect} from 'react-redux';
import BodyText from '@enact/moonstone/BodyText';
import {Panel} from '@enact/moonstone/Panels';

import {PlaylistGrid} from '../../Views/PlaylistGrid/PlaylistGrid';
import {getMockVideoInfoCollection} from '../../../mocks/unitTests/videoInfoCollections';
import {videoPlaylistStart} from '../../../modules/playlist/playlist.actions';
import {setRoute} from '../../../modules/routes/routes.actions';

interface IDispatchProps {
  videoPlaylistStart: typeof videoPlaylistStart;
  setRoute: typeof setRoute;
}

interface IProps extends IDispatchProps {}

const countVideoElements = 30;

export class MainComponent extends React.PureComponent<IProps> {
  private playVideo = (id: number) => {
    const {setRoute} = this.props;

    console.log('id', id);
    setRoute('player');
  };

  componentDidMount(): void {
    const {videoPlaylistStart} = this.props;

    videoPlaylistStart();
  }


  render() {
    return (
      <Panel>
        <BodyText>Рекомендованные</BodyText>
        <PlaylistGrid id="1" items={getMockVideoInfoCollection(countVideoElements)} playVideo={this.playVideo}/>
      </Panel>
    );
  }
}

const mapDispatchToProps: IDispatchProps = {
  videoPlaylistStart,
  setRoute,
};


export const Main = connect(null, mapDispatchToProps)(MainComponent);
