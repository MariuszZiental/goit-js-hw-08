'use strict';

import Player from "@vimeo/player";
import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.trottle";

const player = new Player('vimeo-player', {
id: 236203659,
})
const throttleRun = throttle(onPlay, 1000);

player.on('timeupdate', throttleRun);

function onPlay(data) {
    localStorage.setItem('videoPlayer')
}