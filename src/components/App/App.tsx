import React from 'react';
import {connect} from 'react-redux';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import {Routable, Route, Panels} from '@enact/moonstone/Panels';
import {Cell} from '@enact/ui/Layout';
import {SlideLeftArranger} from '@enact/ui/ViewManager';

import {Search} from '../Views/Search/Search';
import {Main} from '../Views/Main/Main';
import {LastSeen} from '../Views/LastSeen/LastSeen';
import {Player} from '../Views/Player/Player';
import {Profile} from '../Views/Profile/Profile';
import {WrapperRow, WrapperCell} from './AppStyles';
import {Routes} from '../Views/Routes/Routes';

const RoutablePanels = Routable({navigate: 'onBack'}, Panels);

interface IStateProps {
  route: string;
  showMenu: boolean;
}

interface IProps extends IStateProps{}

class AppComponent extends React.PureComponent<IProps> {
  onNavigate() {
    this.setState({path: 'main'});
  }

  state = {
    path: '/main',
  };

  render() {
    const {route, showMenu} = this.props;

    return (
      <WrapperRow >
        <WrapperCell size="10%" display={showMenu ? 'block' : 'none'}>
          <Routes />
        </WrapperCell>
        <Cell>
          <RoutablePanels arranger={SlideLeftArranger} onBack={this.onNavigate} path={route} noCloseButton={true}>
            <Route path="main" component={Main}/>
            <Route path="search" component={Search}/>
            <Route path="lastSeen" component={LastSeen}/>
            <Route path="player" component={Player}/>
            <Route path="profile" component={Profile}/>
          </RoutablePanels>
        </Cell>
      </WrapperRow>
    );
  }
}

const mapStateToProps = ({routesReducer: {route, showMenu}}): IStateProps => ({
  route,
  showMenu,
});

export const App = MoonstoneDecorator(connect(mapStateToProps)(AppComponent));
