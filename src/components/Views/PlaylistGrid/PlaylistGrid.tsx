import React from 'react';
import {VirtualGridList} from '@enact/moonstone/VirtualList';
import ri from '@enact/ui/resolution';
import GridListImageItem from '@enact/moonstone/GridListImageItem';

import {getVideoTitle} from '../../../utils/IVideo/title';
import {getPosterSrc} from '../../../utils/IVideo/poster';
import {getVideoDescription} from '../../../utils/IVideo/description';
import {IVideo} from '../../../interfaces/IVideo';

interface IProps {
  id: string;
  items: IVideo[];
  playVideo?: (id: number) => void;
  cbScrollTo?: (scrollTo) => void;
}

export class PlaylistGrid extends React.PureComponent<IProps> {
  private playVideo = () => {
    const {playVideo} = this.props;

    playVideo(3);
  };

  renderItem = ({index, ...rest}) => {
    const {items} = this.props;
    let title = 'test';
    let posterSrc = '/test';
    let description = 'test';

    if (items.length && items[index]) {
      title = getVideoTitle(items[index]);
      posterSrc = getPosterSrc(items[index]);
      description = getVideoDescription(items[index]);
    }

    return (
      <GridListImageItem
        {...rest}
        onClick={this.playVideo}
        caption={title}
        source={posterSrc}
        subCaption={description}
      />
    );
  };

  render() {
    const {id, items, ...rest} = this.props;
    delete rest.playVideo;

    return (
      <VirtualGridList
        {...rest}
        dataSize={items.length}
        id={id}
        itemRenderer={this.renderItem}
        itemSize={{
          minWidth: ri.scale(480),
          minHeight: ri.scale(370),
        }}
        spotlightId={id}
      />
    );
  }
}
