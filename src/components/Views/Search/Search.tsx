import React from 'react';
import BodyText from '@enact/moonstone/BodyText';
import kind from '@enact/core/kind';
import {Panel} from '@enact/moonstone/Panels';
import {HeaderWrapper} from '../Header/Header';
import {EPathNames} from '../Routes/Routes';

interface IProps {}

export const Search = kind<IProps>({
  render: () => (
    <Panel>
      <HeaderWrapper title={EPathNames.SEARCH} />
      <BodyText>Поиск</BodyText>
    </Panel>
  )
});
