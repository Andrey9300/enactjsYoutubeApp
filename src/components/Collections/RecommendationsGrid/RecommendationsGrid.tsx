import React from 'react';

import {PlaylistGrid} from '../../Views/PlaylistGrid/PlaylistGrid';
import BodyText from '@enact/moonstone/BodyText';
import {IVideo} from '../../../interfaces/IVideo';

interface IProps {
  videos: IVideo[];
}

export class CollectionRecommendationsGrid extends React.PureComponent<IProps> {
  render() {
    const {videos} = this.props;

    return (
      <>
        <BodyText>Рекомендованные</BodyText>
        {/*<PlaylistGrid id="1" items={videos} />*/}
      </>
    );
  }
}
