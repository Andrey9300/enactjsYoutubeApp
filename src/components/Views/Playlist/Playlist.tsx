import React from 'react';
import VirtualList from '@enact/moonstone/VirtualList';
import ri from '@enact/ui/resolution';
import GridListImageItem from '@enact/moonstone/GridListImageItem';

import {getVideoTitle} from '../../../utils/IVideo/title';
import {getPosterSrc} from '../../../utils/IVideo/poster';
import {getVideoDescription} from '../../../utils/IVideo/description';

interface IProps {
  id: string;
  items: Array<any>;
  onClick?: () => void;
}

const widthItem = 480;
const heightItem = 370;

export class Playlist extends React.PureComponent<IProps> {
  private playVideo = () => {
    console.log('click');
  };

  renderItem = ({index, ...rest}) => {
    const {items} = this.props;

    // TODO: объединить GridListImageItem c playlistGrid
    return (
      <GridListImageItem
        {...rest}
        key={index}
        style={{width: `${ri.scale(widthItem)}px`, height: `${ri.scale(heightItem)}px`}}
        onClick={this.playVideo}
        caption={getVideoTitle(items[index])}
        source={getPosterSrc(items[index])}
        subCaption={getVideoDescription(items[index])}
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
