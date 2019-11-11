import React from 'react';
import {connect} from 'react-redux';
import BodyText from '@enact/moonstone/BodyText';
import {Panel} from '@enact/moonstone/Panels';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';

import {HeaderWrapper} from '../Header/Header';
import {EPathNames} from '../Routes/Routes';
import {PlaylistGrid} from '../PlaylistGrid/PlaylistGrid';
import {getMockVideoInfoCollection} from '../../../mocks/unitTests/videoInfoCollections';
import {videoPlaylistStart} from '../../../modules/playlist/playlist.actions';
import {setRoute} from '../../../modules/routes/routes.actions';
import {showMenu} from '../../../modules/routes/routes.actions';

interface IDispatchProps {
  videoPlaylistStart: typeof videoPlaylistStart;
  setRoute: typeof setRoute;
  showMenu: typeof showMenu;
}

interface IProps extends IDispatchProps {}

const countVideoElements = 30;

export class MainComponent extends React.PureComponent<IProps> {
  private playVideo = (id: number) => {
    const {setRoute, showMenu} = this.props;

    console.log('id', id);
    showMenu(false);
    setRoute('player');
  };

  componentDidMount(): void {
    const {videoPlaylistStart} = this.props;

    videoPlaylistStart();
  }


  render() {


    return (
      <Panel>
        <HeaderWrapper title={EPathNames.MAIN}/>
        <BodyText>Рекомендованные</BodyText>
        <PlaylistGrid id="1" items={getMockVideoInfoCollection(countVideoElements)} playVideo={this.playVideo}/>
      </Panel>
    );
  }
}

const mapDispatchToProps: IDispatchProps = {
  videoPlaylistStart,
  setRoute,
  showMenu,
};


export const Main = MoonstoneDecorator(connect(null, mapDispatchToProps)(MainComponent));
