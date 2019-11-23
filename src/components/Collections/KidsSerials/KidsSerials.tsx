import React from 'react';

import {Playlist} from '../../Views/Playlist/Playlist';
import {serialIds} from '../../../modules/kidsSerials/kidsSerials.constants';
import {IKidsSerial} from '../../../modules/kidsSerial/kidsSerial.actions';
import {IVideos} from '../../../modules/videos/videos.actions';

interface IProps {
  kidsSerial: IKidsSerial;
  videos: IVideos;
  playVideo: () => void;
}

export class CollectionKidsSerials extends React.PureComponent<IProps> {
  private getImageSrc = (serialId: number) => {
    switch (serialId) {
      case 150:
        return 'https://smotri.mail.ru/assets/65b2055709c41da63193475f2ac589a6.png';
        break;
      case 83:
        return 'https://smotri.mail.ru/assets/b78e953e48482fe35468b83d5517251a.png';
        break;
      case 149:
      case 117:
        return 'https://smotri.mail.ru/assets/b70393c7394a526435ea419e4ae9b780.png';
        break;
      case 74:
        return 'https://smotri.mail.ru/assets/728f65e54412b98a41af768ff9ed3ab4.png';
        break;
      case 71:
        return 'https://smotri.mail.ru/assets/e449102d24e5e8e225214be488578713.png';
        break;
      case 110:
        return 'https://smotri.mail.ru/assets/ae7a7b63ecae9a3f4b657e03c5a91adf.png';
        break;
      case 84:
        return 'https://smotri.mail.ru/assets/8e4fd77cd4b08d8c4a9aaf2b1a24a14e.png';
        break;
      case 111:
        return 'https://smotri.mail.ru/assets/10125cc42fc8adbdc5c6ebeb6ad7205c.png';
        break;
      default:
        return 'https://smotri.mail.ru/assets/b78e953e48482fe35468b83d5517251a.png';
        break;
    }
  };

  private getSeries = () => {
    const {kidsSerial, videos, playVideo} = this.props;

    if (!kidsSerial || !Object.values(kidsSerial).length) {
      return null;
    }

    return serialIds.map((serialId, index) => {
      if (!kidsSerial[serialId]) {
        return null;
      }
      const serialVideos = kidsSerial[serialId].videos.map((id) => videos[id]);

      return (
        <div key={index}>
          <img src={this.getImageSrc(serialId)} width="200" height="100" />
          <Playlist
            id={String(index)}
            items={serialVideos}
            playVideo={playVideo}
          />
        </div>
      );
    });
  };

  render() {
    return this.getSeries();
  }
}
