import shaka from 'shaka-player';
import videojs from 'video.js';
import videojsContribHls from 'videojs-contrib-hls';
import {getPlaylistSrc} from '../utils/IVideo/playlist';

const manifestUri =
  '#EXTM3U↵#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=262346,RESOLUTION=426x240↵http://pulsar.mail.cloud.devmail.ru/api/v1/video/playlist?id=491629&format=240p↵#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=393519,RESOLUTION=640x360↵http://pulsar.mail.cloud.devmail.ru/api/v1/video/playlist?id=491629&format=360p↵';

export class PlayerService {
  private static instance: PlayerService;
  private start = false;
  private player: any;

  private constructor() {}

  static getInstance() {
    if (!PlayerService.instance) {
      PlayerService.instance = new PlayerService();
    }
    return PlayerService.instance;
  }

  public init() {
    if (this.start) {
      return;
    }
    this.start = true;

    const playerOptions = {
      html5: {
        hls: {
          withCredentials: true,
        },
      },
    };
    this.player = videojs('videoPlayer', playerOptions);
  }

  public play = (manifest) => {
    if (!this.player) {
      return;
    }
    this.player.src({
      src: getPlaylistSrc(manifest),
      type: 'application/x-mpegURL',
      withCredentials: true,
    });

    this.player.ready(() => {
      this.player.play();
      this.player.requestFullscreen();
    });
  };

  // public init() {
  //   // Create a Player instance.
  //   const video = document.getElementById('videoPlayer');
  //   this.player = new shaka.Player(video);
  //
  //   this.player.addEventListener('error', this.onErrorEvent);
  // }
  //
  // public play = (manifest) => {
  //   this.player.load(`${getPlaylistSrc(manifest)}`).then(() => {
  //     console.log('The video has now been loaded!');
  //   }).catch(this.onError);  // onError is executed if the asynchronous load fails.
  // };
  // private onErrorEvent = (event) => {
  //   this.onError(event.detail);
  // };

  private onError = (error) => {
    console.error('Error code', error.code, 'object', error);
  };
}
