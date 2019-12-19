import {EConstants} from '../utils/constants';

export class PlayerService {
  private static instance: PlayerService;
  private player: HTMLVideoElement;

  private constructor() {}

  static getInstance() {
    if (!PlayerService.instance) {
      PlayerService.instance = new PlayerService();
    }

    return PlayerService.instance;
  }

  public init() {
    this.player = document.querySelector(`#${EConstants.VIDEO_TAG_ID}`);
  }

  public play = () => {
    return this.player.play();
  };

  public onEndedCallback = (callback) => {
    if (!this.player) {
      return;
    }

    this.player.addEventListener('ended', callback);
  };
}
