import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(timeUpdate, 1000));

function timeUpdate (data) {
    const time = data.seconds;
    localStorage.setItem(LOCALSTORAGE_KEY, time);
    return time;
}

function getTime () {
    return localStorage.getItem(LOCALSTORAGE_KEY);
}

player.setCurrentTime(getTime()).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});