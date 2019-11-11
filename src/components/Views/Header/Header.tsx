import React from 'react';
import kind from '@enact/core/kind';
import {Header} from '@enact/moonstone/Panels';

import {LogoWithTitle} from '../../Icons/LogoWithTitle/LogoWithTitle';

interface IProps {
  title: string;
}

export const HeaderWrapper = kind<IProps>({
  render: ({title}) => (
    <Header title={title} type="compact" >
      <LogoWithTitle />
    </Header>
  ),
});
