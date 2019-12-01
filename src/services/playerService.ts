import videojs from 'video.js';
import {getPlaylistSrc} from '../utils/IVideo/playlist';

export class PlayerService {
  private static instance: PlayerService;
  private player: any;

  private constructor() {}

  static getInstance() {
    if (!PlayerService.instance) {
      PlayerService.instance = new PlayerService();
    }
    return PlayerService.instance;
  }

  public init() {
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
      src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
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
