import videojs from 'video.js';
import {getPlaylistSrc} from '../utils/IVideo/playlist';

export class PlayerService {
  private static instance: PlayerService;
  private isInit = false;
  private player: any;

  private constructor() {}

  static getInstance() {
    if (!PlayerService.instance) {
      PlayerService.instance = new PlayerService();
    }
    return PlayerService.instance;
  }

  public init() {
    if (this.isInit) {
      return;
    }
    this.isInit = true;
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
    });

    this.player.ready(() => {
      this.player.play();
    });
  };

  public onEndedCallback = (callback) => {
    this.player.on('ended', callback);
  };
}
