export enum EPlaylist {
  VIDEO_PLAYLIST_START = '@player/playlist/start',
  PLAYLIST_GET = '@player/playlist/get',
  PLAYLIST_SUCCESS = '@player/playlist/success',
  PLAYLIST_ERROR = '@player/playlist/error',
  VIDEO_PLAYLIST_START_VIDEO_BY_INDEX = '@player/playlist/startVideoByIndex',
  VIDEO_PLAYLIST_START_VIDEO_BY_VIDEO_ID = '@player/playlist/startVideoByVideoId',
}

export enum EPlaylistParameters {
  LIMIT_VIDEO_FOR_PLAYLIST = 20,
}
