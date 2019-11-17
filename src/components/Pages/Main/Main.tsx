import React from 'react';
import {Panel} from '@enact/moonstone/Panels';

import {CollectionRecommendationsGrid} from '../../Collections/RecommendationsGrid/RecommendationsGrid';

interface IProps {}

export class MainComponent extends React.PureComponent<IProps> {
  render() {
    return (
      <Panel>
        <CollectionRecommendationsGrid />
      </Panel>
    );
  }
}

export const Main = MainComponent;
