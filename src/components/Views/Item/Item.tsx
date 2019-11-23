import React from 'react';
import GridListImageItem from '@enact/moonstone/GridListImageItem';
import kind from '@enact/core/kind';

import {getVideoTitle} from '../../../utils/IVideo/title';
import {getPosterSrc} from '../../../utils/IVideo/poster';
import {getVideoDescription} from '../../../utils/IVideo/description';
import {IVideo} from '../../../interfaces/IVideo';

interface IProps {
  items: IVideo[];
  index: number;
  playVideo: () => void;
}

export const Item = kind<IProps>({
  render: ({items, index, playVideo, ...rest}) => (
    <GridListImageItem
      {...rest}
      key={index}
      onClick={playVideo}
      caption={getVideoTitle(items[index]) || ' '}
      source={getPosterSrc(items[index])}
      subCaption={getVideoDescription(items[index]) || ' '}
    />
  ),
});
