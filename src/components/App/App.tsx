import React from 'react';
import {connect} from 'react-redux';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import {Routable, Route, Panels} from '@enact/moonstone/Panels';
import {Cell} from '@enact/ui/Layout';
import {SlideLeftArranger} from '@enact/ui/ViewManager';
import {Column} from '@enact/ui/Layout';

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

const RoutablePanels = Routable({navigate: 'onBack'}, Panels);

interface IStateProps {
  route: string;
  showMenu: boolean;
}

interface IDispatchProps {
  setShowMenu: typeof setShowMenu;
  setRoute: typeof setRoute;
}

interface IProps extends IStateProps, IDispatchProps {}

class AppComponent extends React.PureComponent<IProps> {
  render() {
    const {route, showMenu, setShowMenu, setRoute} = this.props;

    return (
      <WrapperRow>
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
                <Route path="main" component={Main} />
                <Route path="search" component={Search} />
                <Route path="lastSeen" component={LastSeen} />
                <Route
                  path="player"
                  component={Player}
                  setShowMenu={setShowMenu}
                />
                <Route path="profile" component={Profile} />
                <Route path="channels" component={Channels} />
              </RoutablePanels>
            </Cell>
          </Column>
        </Cell>
      </WrapperRow>
    );
  }
}

const mapStateToProps = ({routesReducer: {route, showMenu}}): IStateProps => ({
  route,
  showMenu,
});

const mapDispatchToProps: IDispatchProps = {
  setShowMenu,
  setRoute,
};

export const App = MoonstoneDecorator(
  connect(mapStateToProps, mapDispatchToProps)(AppComponent),
);
