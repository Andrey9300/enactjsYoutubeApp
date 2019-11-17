import React from 'react';
import BodyText from '@enact/moonstone/BodyText';
import Scroller from '@enact/moonstone/Scroller';
import {add, is} from '@enact/core/keymap';

import {IVideo} from '../../../interfaces/IVideo';
import {getMockVideoInfoCollection} from '../../../mocks/unitTests/videoInfoCollections';
import {Playlist} from '../../Views/Playlist/Playlist';

interface IChannel {
  title: string;
  items: IVideo[];
}

interface IProps {
  channels?: IChannel[];
}

export class CollectionChannels extends React.PureComponent<IProps> {
  private scrollTo = null;
  private positionY = 0;
  private step = 600;

  getScrollTo = (scrollTo) => {
    this.scrollTo = scrollTo;
  };

  handleKeyDown = (event) => {
    add('up', 38);
    add('down', 40);

    if (!this.scrollTo) {
      return;
    }

    if (is('up')(event.keyCode)) {
      this.scrollTo({position: {y: this.positionY - this.step}});
    } else if (is('down')(event.keyCode)) {
      this.scrollTo({position: {y: this.positionY + this.step}});
    }
  };

  render() {
    return (
      <Scroller
        direction="vertical"
        verticalScrollbar="hidden"
        style={{height: `100%`}}
        cbScrollTo={this.getScrollTo}
        onKeyDown={this.handleKeyDown}
      >
        <BodyText>Каналы</BodyText>
        <Playlist id="1" items={getMockVideoInfoCollection(30)} />
        <BodyText>Каналы 2</BodyText>
        <Playlist id="2" items={getMockVideoInfoCollection(30)} />
        <BodyText>Каналы 3</BodyText>
        <Playlist id="3" items={getMockVideoInfoCollection(30)} />
      </Scroller>
    );
  }
}
