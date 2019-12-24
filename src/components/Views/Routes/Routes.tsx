import React from 'react';
import {connect} from 'react-redux';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import Group from '@enact/ui/Group';
import SelectableItem from '@enact/moonstone/SelectableItem';

import {setRoute} from '../../../modules/routes/routes.actions';

export enum EPathNames {
  MAIN = 'Главная',
  SEARCH = 'Поиск',
  LAST_SEEN = 'Просмотренные',
  PLAYER = 'Плеер',
  PROFILE = 'Профиль',
  CHANNELS = 'Каналы',
  KIDS = 'Дети',
  PARENT_CONTROL = 'Родительский контроль',
  CHECK_CODE = 'Проверка кода',
  WAITING_PARENT_CONTROL = 'Ожидание родительского контроля',
}

interface IDispatchProps {
  setRoute: typeof setRoute;
}

interface IProps extends IDispatchProps {}

class RoutesComponent extends React.PureComponent<IProps> {
  private routes = [
    EPathNames.MAIN,
    EPathNames.SEARCH,
    EPathNames.LAST_SEEN,
    EPathNames.PLAYER,
    EPathNames.PROFILE,
    EPathNames.CHANNELS,
    EPathNames.KIDS,
    EPathNames.CHECK_CODE,
  ];

  private changeRoute = (event) => {
    const {setRoute} = this.props;

    if (!event || !event.data) {
      return;
    }

    const {data} = event;

    switch (data) {
      case EPathNames.MAIN:
        setRoute('main');
        break;
      case EPathNames.SEARCH:
        setRoute('search');
        break;
      case EPathNames.LAST_SEEN:
        setRoute('lastSeen');
        break;
      case EPathNames.PLAYER:
        setRoute('player');
        break;
      case EPathNames.PROFILE:
        setRoute('profile');
        break;
      case EPathNames.CHANNELS:
        setRoute('channels');
        break;
      case EPathNames.KIDS:
        setRoute('kids');
        break;
      case EPathNames.PARENT_CONTROL:
        setRoute('parentControl');
        break;
      case EPathNames.CHECK_CODE:
        setRoute('checkCode');
      case EPathNames.WAITING_PARENT_CONTROL:
        setRoute('waitingParentControl');
        break;
    }
  };

  render() {
    return (
      <Group
        childComponent={SelectableItem}
        selectedProp="selected"
        onSelect={this.changeRoute}
        select="radio"
      >
        {this.routes}
      </Group>
    );
  }
}

const mapDispatchToProps: IDispatchProps = {
  setRoute,
};

export const Routes = MoonstoneDecorator(
  connect(null, mapDispatchToProps)(RoutesComponent),
);
