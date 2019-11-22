import shaka from 'shaka-player';
import videojs from 'video.js';
import videojsContribHls from 'videojs-contrib-hls';
import {getPlaylistSrc} from '../utils/IVideo/playlist';

const manifestUri =
  '#EXTM3U↵#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=262346,RESOLUTION=426x240↵http://pulsar.mail.cloud.devmail.ru/api/v1/video/playlist?id=491629&format=240p↵#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=393519,RESOLUTION=640x360↵http://pulsar.mail.cloud.devmail.ru/api/v1/video/playlist?id=491629&format=360p↵';

export class PlayerService {
  private static instance: PlayerService;
  private start = false;

  private constructor() {}

  static getInstance() {
    if (!PlayerService.instance) {
      PlayerService.instance = new PlayerService();
    }
    return PlayerService.instance;
  }

  public initPlayer(videoTag: HTMLVideoElement, manifest: any) {
    if (this.start) {
      return;
    }
    this.start = true;
    videojs.Hls.xhr.beforeRequest = (options) => {
      return options;
    };
    const playerOptions = {
      html5: {
        hls: {
          withCredentials: true,
        },
      },
    };
    const player = videojs('videoTest', playerOptions);

    player.src({
      src: getPlaylistSrc(manifest),
      type: 'application/x-mpegURL',
      withCredentials: true,
    });

    player.ready(() => {
      player.play();
    });
    // XMLHttpRequest cannot load http://hb.bizmrg.com/1ffd208e-2f0b-4216-9d08-7719c25029f3/vc/1d2a6796-9935-42a2-a4b4-1775befc7e26.
    // No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://192.168.0.14:2121' is therefore not allowed access.

    // const video = document.getElementById('videoTest');
    // console.log('video', video);
    // const player = new shaka.Player(video);
    // player.getNetworkingEngine().registerRequestFilter((type, request) => {
    //   // Only add headers to license requests:
    //   // if (type == shaka.net.NetworkingEngine.RequestType.LICENSE) {
    //   // }
    //   // This is the specific header name and value the server wants:
    //   // request.headers = 'VGhpc0lzQVRlc3QK';
    //   console.log(request);
    //   // request.headers['origin'] = 'http://ttt.ru';
    //   request.allowCrossSiteCredentials = true;
    //   // request.referer = 'http://ttt.ru';
    // });
    // console.log('isBrowserSupported: ', shaka.Player.isBrowserSupported());
    // player.addEventListener('error', this.onErrorEvent);
    //
    // player.load(getPlaylistSrc(manifest)).then(() => {
    //   console.log('The video has now been loaded!');
    // }).catch(this.onError);
  }

  private onErrorEvent = (event) => {
    this.onError(event.detail);
  };

  private onError = (error) => {
    console.error('Error code', error.code, 'object', error);
  };
}
