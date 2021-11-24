const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');


//Sang titler
const songs = ['hey', 'summer', 'ukele'];

//keep track of songs
let songIndex = 1;

//initially load song info DOM
loadSong(songs[songIndex]);

//update song details
function loadSong(long) {
    title.innerText = song;
    audio.src = `songs/${song}.mp3`;
    cover.src = `imgs/${song}.jpg`;
}

// Play song
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
  }

