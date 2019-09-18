var tracks = []
var audio;
var audioPreload;
var preloaded = false;

var player = document.querySelector('#player');
var audio = document.querySelector('#player audio');
var trackElements = document.getElementsByClassName('track');
for (let i = 0; i < trackElements.length; i++) {
    trackElements[i].addEventListener('click', function (e) {
        playTrack(e);
    }, false);
    tracks.push(trackElements[i].href);
}

audio.src = tracks[0];
document.querySelector('#playpause').onclick = () => { play(); };
function play(){
    console.log('playing',audio);
    audio.play();
}

var menu = document.querySelector('.menu');
menu.onclick = () => { player.classList.toggle('show')};