import React from 'react';
import kind from '@enact/core/kind';
import {Panel} from '@enact/moonstone/Panels';
import {CollectionChannels} from '../../Collections/Channels/Channels';

interface IProps {}

export const Channels = kind<IProps>({
  render: () => (
    <Panel>
      <CollectionChannels />
    </Panel>
  )
});
