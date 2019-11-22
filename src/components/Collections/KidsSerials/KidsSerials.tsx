import React from 'react';
import BodyText from '@enact/moonstone/BodyText';
import Scroller from '@enact/moonstone/Scroller';
import {add, is} from '@enact/core/keymap';

import {Playlist} from '../../Views/Playlist/Playlist';
import {serialIds} from '../../../modules/kidsSerials/kidsSerials.constants';

interface IProps {
  kidsSerial?: any;
  videos?: any;
}

export class CollectionKidsSerials extends React.PureComponent<IProps> {
  private scrollTo = null;
  private positionY = 0;
  private step = 600;

  private getScrollTo = (scrollTo) => {
    this.scrollTo = scrollTo;
  };

  private handleKeyDown = (event) => {
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

  private getSeries = () => {
    const {kidsSerial, videos} = this.props;

    if (!kidsSerial || !Object.values(kidsSerial).length) {
      return <>Загрузка</>;
    }

    return serialIds.map((serialId, index) => {
      if (!kidsSerial[serialId]) {
        return <div key={index}>Загрузка</div>;
      }
      const serialVideos = kidsSerial[serialId].videos.map((id) => videos[id]);

      return (
        <div key={index}>
          <BodyText>{kidsSerial[serialId].serialName}</BodyText>
          <Playlist id={String(index)} items={serialVideos} />
        </div>
      );
    });
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
        {this.getSeries()}
      </Scroller>
    );
  }
}
