import React from 'react';
import {connect} from 'react-redux';
import {Item} from '@enact/ui/Item';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';

import {setRoute} from '../../../modules/routes/routes.actions';

export enum EPathNames {
  MAIN = 'Главная',
  SEARCH = 'Поиск',
  LAST_SEEN = 'Просмотренные',
  PLAYER = 'Плеер',
  PROFILE = 'Профиль',
}

interface IDispatchProps {
  setRoute: typeof setRoute;
}

interface IProps extends IDispatchProps {}

class RoutesComponent extends React.PureComponent<IProps> {
  private setMain = () => {
    const {setRoute} = this.props;
    setRoute('/main');
  };

  private setSearch = () => {
    const {setRoute} = this.props;
    setRoute('/search');
  };

  private setLastSeen = () => {
    const {setRoute} = this.props;
    setRoute('/lastSeen');
  };

  private setProfile = () => {
    const {setRoute} = this.props;
    setRoute('/profile');
  };

  private setPlayer = () => {
    const {setRoute} = this.props;
    setRoute('/player');
  };

  render() {
    return (
      <>
        <Item onClick={this.setMain}>{EPathNames.MAIN}</Item>
        <Item onClick={this.setSearch}>{EPathNames.SEARCH}</Item>
        <Item onClick={this.setLastSeen}>{EPathNames.LAST_SEEN}</Item>
        <Item onClick={this.setProfile}>{EPathNames.PROFILE}</Item>
        <Item onClick={this.setPlayer}>{EPathNames.PLAYER}</Item>
      </>
    );
  }
}

const mapDispatchToProps: IDispatchProps = {
  setRoute,
};

export const Routes = MoonstoneDecorator(connect(null, mapDispatchToProps)(RoutesComponent));
