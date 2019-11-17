import React from 'react';
import kind from '@enact/core/kind';
import {Header} from '@enact/moonstone/Panels';

import {LogoWithTitle} from '../../Icons/LogoWithTitle/LogoWithTitle';
import {EPathNames} from '../Routes/Routes';

interface IProps {
  route: string;
}

export const HeaderWrapper = kind<IProps>({
  render: ({route}) => {
    let title = EPathNames.MAIN;

    switch (route) {
      case 'search':
        title = EPathNames.SEARCH;
        break;
      case 'lastSeen':
        title = EPathNames.LAST_SEEN;
        break;
      case 'profile':
        title = EPathNames.PROFILE;
      case 'channels':
        title = EPathNames.CHANNELS;
        break;
    }

    return (
      <Header title={title} type="compact">
        <LogoWithTitle />
      </Header>
    );
  },
});
