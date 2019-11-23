import React from 'react';

import {Playlist} from '../../Views/Playlist/Playlist';
import {IVideos} from '../../../modules/videos/videos.actions';
import {HeaderH1} from '../../../styles/Text';

interface IProps {
  videos: IVideos;
  lastSeen: number[];
}

export class CollectionLastSeen extends React.PureComponent<IProps> {
  render() {
    const {lastSeen, videos} = this.props;

    if (!lastSeen || !Object.values(lastSeen).length) {
      return null;
    }

    const lastSeenVideos = lastSeen.map((id) => videos[id]);

    return (
      <>
        <HeaderH1>Рекомендованные</HeaderH1>
        {/*<Playlist id="333333" items={lastSeenVideos} />*/}
      </>
    );
  }
}
