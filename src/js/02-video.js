import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

const VIDEOCURTIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

if (localStorage.getItem(VIDEOCURTIME)) {
  const playedTime = Number(localStorage.getItem(VIDEOCURTIME));
  player.setCurrentTime(playedTime);
}

player.on(
  'timeupdate',
  Throttle(data => ocalStorage.setItem(VIDEOCURTIME, data.seconds), 1000)
);

player.on('seeking', data => localStorage.setItem(VIDEOCURTIME, data.seconds));
