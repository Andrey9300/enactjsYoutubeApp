import React from 'react';
import {connect} from 'react-redux';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import {Routable, Route, Panels} from '@enact/moonstone/Panels';
import {Cell} from '@enact/ui/Layout';
import {SlideLeftArranger} from '@enact/ui/ViewManager';
import {Column} from '@enact/ui/Layout';
import {add, is} from '@enact/core/keymap';

import {Search} from '../Pages/Search/Search';
import {Main} from '../Pages/Main/Main';
import {LastSeen} from '../Pages/LastSeen/LastSeen';
import {Player} from '../Pages/Player/Player';
import {Profile} from '../Pages/Profile/Profile';
import {Channels} from '../Pages/Channels/Channels';

import {WrapperRow, WrapperCell, WrapperCellHeader} from './AppStyles';
import {Routes} from '../Views/Routes/Routes';
import {setRoute, setShowMenu} from '../../modules/routes/routes.actions';
import {HeaderWrapper} from '../Views/Header/Header';
import {recommendationsStart} from '../../modules/recommendations/recommendations.actions';
import {IVideosStore} from '../../modules/videos/videos.reducers';
import {Kids} from '../Pages/Kids/Kids';

const RoutablePanels = Routable({navigate: 'onBack'}, Panels);

interface IStateProps {
  route: string;
  showMenu: boolean;
  videos: IVideosStore;
  recommendations: number[];
}

interface IDispatchProps {
  setShowMenu: typeof setShowMenu;
  setRoute: typeof setRoute;
  recommendationsStart: typeof recommendationsStart;
}

interface IProps extends IStateProps, IDispatchProps {}

class AppComponent extends React.PureComponent<IProps> {
  componentDidMount(): void {
    const {recommendationsStart} = this.props;
    recommendationsStart();
  }

  componentDidUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<{}>,
    snapshot?: any,
  ): void {
    if (prevProps.route !== this.props.route) {
      const {recommendationsStart} = this.props;
      recommendationsStart();
    }
  }

  handleKeyDown = (event) => {
    const {setRoute} = this.props;
    add('back', 461);

    if (is('back')(event.keyCode)) {
      setRoute('main');
    }
  };

  render() {
    const {
      route,
      showMenu,
      setShowMenu,
      setRoute,
      videos,
      recommendations,
    } = this.props;

    if (!recommendations) {
      return null;
    }

    const recommendationsVideos = recommendations.map((id) => videos[id]);

    return (
      <WrapperRow onKeyDown={this.handleKeyDown}>
        <WrapperCell size="15%" display={showMenu ? 'block' : 'none'}>
          <Routes />
        </WrapperCell>
        <Cell>
          <Column>
            <WrapperCellHeader
              size={90}
              component="header"
              display={showMenu ? 'block' : 'none'}
            >
              <HeaderWrapper route={route} />
            </WrapperCellHeader>
            <Cell>
              <RoutablePanels
                arranger={SlideLeftArranger}
                onBack={setRoute}
                path={route}
                noCloseButton={true}
              >
                <Route
                  path="main"
                  component={Main}
                  videos={recommendationsVideos}
                />
                <Route path="search" component={Search} />
                <Route path="lastSeen" component={LastSeen} />
                <Route
                  path="player"
                  component={Player}
                  setShowMenu={setShowMenu}
                  videos={recommendationsVideos}
                />
                <Route path="profile" component={Profile} />
                <Route path="channels" component={Channels} />
                <Route path="kids" component={Kids} />
              </RoutablePanels>
            </Cell>
          </Column>
        </Cell>
      </WrapperRow>
    );
  }
}

const mapStateToProps = ({
  routesReducer: {route, showMenu},
  videosReducer: {videos},
  recommendationsReducer: {recommendations},
}): IStateProps => ({
  route,
  showMenu,
  videos,
  recommendations,
});

const mapDispatchToProps: IDispatchProps = {
  setShowMenu,
  setRoute,
  recommendationsStart,
};

export const App = MoonstoneDecorator(
  connect(mapStateToProps, mapDispatchToProps)(AppComponent),
);
