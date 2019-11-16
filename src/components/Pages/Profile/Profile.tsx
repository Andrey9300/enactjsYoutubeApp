import React from 'react';
import BodyText from '@enact/moonstone/BodyText';
import kind from '@enact/core/kind';
import {Panel} from '@enact/moonstone/Panels';

interface IProps {}

export const Profile = kind<IProps>({
  render: () => (
    <Panel>
      <BodyText>Профиль</BodyText>
    </Panel>
  )
});
