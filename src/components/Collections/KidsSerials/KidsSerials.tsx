import React from 'react';

import {Playlist} from '../../Views/Playlist/Playlist';
import {serialIds} from '../../../modules/kidsSerials/kidsSerials.constants';
import {IKidsSerial} from '../../../modules/kidsSerial/kidsSerial.actions';
import {IVideos} from '../../../modules/videos/videos.actions';
import {kidsSerialsStubs} from '../../../images/kidsSerials/';

interface IProps {
  kidsSerial: IKidsSerial;
  videos: IVideos;
  playVideo: (videoIds: number[]) => (currentVideoId: number) => void;
}

export class CollectionKidsSerials extends React.PureComponent<IProps> {
  private getImageSrc = (serialId: number) => {
    switch (serialId) {
      case 150:
        return kidsSerialsStubs.fiksiki;
        break;
      case 83:
        return kidsSerialsStubs.smeshariki;
        break;
      case 149:
      case 117:
        return kidsSerialsStubs.belkaIstrelka;
        break;
      case 74:
        return kidsSerialsStubs.drakoshaTosha;
        break;
      case 71:
        return kidsSerialsStubs.planeta;
        break;
      case 110:
        return kidsSerialsStubs.pororo;
        break;
      case 84:
        return kidsSerialsStubs.timaItoma;
        break;
      case 111:
        return kidsSerialsStubs.chupi;
        break;
      default:
        return kidsSerialsStubs.smeshariki;
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

      if (!serialVideos || serialVideos.length === 0) {
        return null;
      }

      const playVideoKidsSeries = (videoId: number) => {
        return playVideo(kidsSerial[serialId].videos)(videoId);
      };

      return (
        <div key={index}>
          <img src={this.getImageSrc(serialId)} width="200" height="100" />
          <Playlist
            id={String(index)}
            items={serialVideos}
            playVideo={playVideoKidsSeries}
          />
        </div>
      );
    });
  };

  render() {
    return this.getSeries();
  }
}
