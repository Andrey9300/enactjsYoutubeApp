import React from 'react';
import {VirtualGridList} from '@enact/moonstone/VirtualList';
import ri from '@enact/ui/resolution';
import Image from '@enact/moonstone/Image';
import Item from '@enact/moonstone/Item';

import {getVideoTitle} from '../../../utils/IVideo/title';
import {getPosterSrc} from '../../../utils/IVideo/poster';
import {IVideo} from '../../../interfaces/IVideo';

interface IProps {
  id: string;
  items: IVideo[];
  playVideo?: (id: number) => void;
}

export class PlaylistGrid extends React.PureComponent<IProps> {
  private playVideo = () => {
    const {playVideo} = this.props;

    playVideo(3);
  };

  renderItem = ({index}) => {
    const {items} = this.props;

    return (
      <Item key={index} onClick={this.playVideo}>
        {getVideoTitle(items[index])}
        <Image src={getPosterSrc(items[index])} sizing="fill" />
      </Item>
    );
  };

  render() {
    const {id, items} = this.props;

    return (
      <VirtualGridList
        dataSize={items.length}
        id={id}
        itemRenderer={this.renderItem}
        itemSize={{
          minWidth: ri.scale(480),
          minHeight: ri.scale(270),
        }}
        spotlightId={id}
      />
    );
  }
}
