import React from 'react';
import kind from '@enact/core/kind';
import {Panel} from '@enact/moonstone/Panels';

import {CollectionLastSeenGrid} from '../../Collections/LastSeenGrid/LastSeenGrid';

interface IProps {}

export const LastSeen = kind<IProps>({
  render: () => (
    <Panel>
      <CollectionLastSeenGrid />
    </Panel>
  ),
});
