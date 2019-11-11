import React from 'react';
import BodyText from '@enact/moonstone/BodyText';
import kind from '@enact/core/kind';
import {Panel} from '@enact/moonstone/Panels';

import {PlaylistGrid} from '../PlaylistGrid/PlaylistGrid';
import {HeaderWrapper} from '../Header/Header';
import {EPathNames} from '../Routes/Routes';
import {getMockVideoInfoCollection} from '../../../mocks/unitTests/videoInfoCollections';

interface IProps {
}

export const LastSeen = kind<IProps>({
  render: () => (
    <Panel>
      <HeaderWrapper title={EPathNames.LAST_SEEN} />
      <BodyText>Просмотренные видео</BodyText>
      <PlaylistGrid  id="1" items={getMockVideoInfoCollection(30)} />
    </Panel>
  ),
});
