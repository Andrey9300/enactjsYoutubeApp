import React from 'react';
import {Panel} from '@enact/moonstone/Panels';

import {CollectionRecommendationsGrid} from '../../Collections/RecommendationsGrid/RecommendationsGrid';
import {IVideo} from '../../../interfaces/IVideo';

interface IProps {
  videos: IVideo[];
}

export class MainComponent extends React.PureComponent<IProps> {
  render() {
    const {videos} = this.props;

    return (
      <Panel>
        <CollectionRecommendationsGrid videos={videos} />
      </Panel>
    );
  }
}

export const Main = MainComponent;
