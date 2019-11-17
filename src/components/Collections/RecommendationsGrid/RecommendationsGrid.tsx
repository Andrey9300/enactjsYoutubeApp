import React from 'react';

import {getMockVideoInfoCollection} from '../../../mocks/unitTests/videoInfoCollections';
import {PlaylistGrid} from '../../Views/PlaylistGrid/PlaylistGrid';
import BodyText from '@enact/moonstone/BodyText';

interface IProps {}

export class CollectionRecommendationsGrid extends React.PureComponent<IProps> {
  render() {
    return (
      <>
        <BodyText>Рекомендованные</BodyText>
        <PlaylistGrid id="1" items={getMockVideoInfoCollection(30)} />
      </>
    );
  }
}
