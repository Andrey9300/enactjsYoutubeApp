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
import {setRoute} from '../../modules/routes/routes.actions';
import {Header} from '../Views/Header/Header';
import {Kids} from '../Pages/Kids/Kids';
import {WindowHelper} from '../../utils/window';
import {ParentControl} from '../Pages/ParentControl/ParentControl';
import {CheckCode} from '../Pages/CheckCode/CheckCode';
import {WaitingParentControl} from '../Pages/WaitingParentControl/WaitingParentControl';

const RoutablePanels = Routable({navigate: 'onBack'}, Panels);

interface IStateProps {
  route: string;
  showMenu: boolean;
}

interface IDispatchProps {
  setRoute: typeof setRoute;
}

interface IProps extends IStateProps, IDispatchProps {}

class AppComponent extends React.PureComponent<IProps> {
  componentDidMount() {
    const {setRoute} = this.props;
    const setKidsRoute = () => setRoute('kids');

    WindowHelper.addEventListener(
      'keydown',
      WindowHelper.handleBackKeyDown(setKidsRoute),
    );
  }

  private onClickOnParentControl = () => {
    const {setRoute} = this.props;
    setRoute('parentControl');
  };

  render() {
    const {route, showMenu} = this.props;

    return (
      <WrapperRow padding={showMenu ? '0.5' : '0'}>
        <WrapperCell size="15%" display={showMenu ? 'none' : 'none'}>
          <Routes />
        </WrapperCell>
        <Cell>
          <Column>
            <WrapperCellHeader
              size={65}
              component="header"
              display={showMenu ? 'block' : 'none'}
            >
              <Header onClick={this.onClickOnParentControl} />
            </WrapperCellHeader>
            <Cell>
              <RoutablePanels
                arranger={SlideLeftArranger}
                path={route}
                noCloseButton={true}
              >
                <Route path="main" component={Main} />
                <Route path="search" component={Search} />
                <Route path="player" component={Player} />
                <Route path="lastSeen" component={LastSeen} />
                <Route path="profile" component={Profile} />
                <Route path="channels" component={Channels} />
                <Route path="kids" component={Kids} />
                <Route path="parentControl" component={ParentControl} />
                <Route path="checkCode" component={CheckCode} />
                <Route
                  path="waitingParentControl"
                  component={WaitingParentControl}
                />
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
  setRoute,
};

export const App = MoonstoneDecorator(
  connect(mapStateToProps, mapDispatchToProps)(AppComponent),
);
