'use strict';
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 236203659,
});

const runThrottle = throttle(tempMoment, 1000);

player.on('timeupdate', runThrottle);

function tempMoment(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

const nowTime = localStorage.getItem('videoplayer-current-time');

if (nowTime !== null) {
  player.setCurrentTime(parseFloat(nowTime));
}
