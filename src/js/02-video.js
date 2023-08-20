'use strict';
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 236203659,
});
const throttleRun = throttle(onPlay, 1000);

player.on('timeupdate', throttleRun);

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime !== null) {
  player.setCurrentTime(parseFloat(currentTime));
}
