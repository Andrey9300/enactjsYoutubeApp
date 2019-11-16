import React from 'react';
import BodyText from '@enact/moonstone/BodyText';
import kind from '@enact/core/kind';
import {Panel} from '@enact/moonstone/Panels';

interface IProps {}

export const Search = kind<IProps>({
  render: () => (
    <Panel>
      <BodyText>Поиск</BodyText>
    </Panel>
  )
});
