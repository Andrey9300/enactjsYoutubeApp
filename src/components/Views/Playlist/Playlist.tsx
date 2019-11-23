import React from 'react';
import VirtualList from '@enact/moonstone/VirtualList';
import ri from '@enact/ui/resolution';

import {
  heightItem,
  widthItem,
  WrapperGridListImageItem,
} from './PlaylistStyles';
import {getVideoId} from '../../../utils/IVideo/id';

interface IProps {
  id: string;
  items: Array<any>;
  playVideo: (videoId: number) => void;
}

export class Playlist extends React.PureComponent<IProps> {
  renderItem = ({index, ...rest}) => {
    const {items, playVideo} = this.props;

    if (!items.length) {
      return null;
    }

    const playCurrentVideo = () => {
      playVideo(getVideoId(items[index]));
    };

    return (
      <WrapperGridListImageItem
        {...rest}
        key={index}
        index={index}
        items={items}
        playVideo={playCurrentVideo}
      />
    );
  };

  render() {
    const {id, items} = this.props;

    return (
      <VirtualList
        style={{height: `${heightItem + 80}px`}}
        dataSize={items.length}
        direction="horizontal"
        horizontalScrollbar="hidden"
        itemRenderer={this.renderItem}
        itemSize={ri.scale(widthItem)}
        id={id}
        spotlightId={id}
      />
    );
  }
}
