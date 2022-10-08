const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
    {
        name: 'priori-1',
        displayName: 'Anzen Na Kusuri',
        artist: 'THE SxPLAY',
    },
    {
        name: 'priori-2',
        displayName: 'Marigold ft. Guriri',
        artist: 'M2U',
    },
    {
        name: 'priori-3',
        displayName: 'Prema Flowers',
        artist: 'MELOIMAGE',
    },
    {
        name: 'priori-4',
        displayName: 'Purge',
        artist: '3R2',
    },
    {
        name: 'priori-5',
        displayName: 'Subconscious Mind',
        artist: 'SADA 2Futureanthem',
    },
    {
        name: 'priori-6',
        displayName: 'FIRSTBORNS ft. Iris',
        artist: 'M2U',
    },
    {
        name: 'priori-7',
        displayName: 'extinguisher',
        artist: 'lixound',
    },
    {
        name: 'priori-8',
        displayName: 'Alb',
        artist: 'Avans',
    },
    {
        name: 'priori-9',
        displayName: 'Oshama Scramble!',
        artist: 't+pazolite',
    },
    {
        name: 'priori-10',
        displayName: 'XYZ',
        artist: 'technoplanet',
    },
];

// Check if Playing
let isPlaying = false;

// Play
function playSong(){
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

// Pause
function pauseSong(){
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song){
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.webp`;
}

//  Current Song
let songIndex = 0;

// Previous Song
function prevSong(){
    songIndex--;
    if (songIndex < 0){
        songIndex = songs.length -1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Next Song
function nextSong(){
    songIndex++;
    if (songIndex > songs.length -1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// On Load - Select First Song
loadSong(songs[songIndex]);

// Update Progress Bar & Time
function updateProgressBar(e){
    if (isPlaying){
        const{duration, currentTime} = e.srcElement;

        // Update progess bar width
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;

        // Calculate display for duration
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if(durationSeconds < 10){
            durationSeconds = `0${durationSeconds}`;
        }
        // Delay Switching duration Element to avoid NaN
        if(durationSeconds){
            durationEl.textContent = `${durationMinutes}:${durationSeconds}`;

        // Calculate display for current time
        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if(currentSeconds < 10){
            currentSeconds = `0${currentSeconds}`;
        }
        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
        }
    }
}


// Set Progress Bar
function setProgressBar(e){
    const width = this.clientWidth
    const clickX = e.offsetX;
    const {duration} = music;
    music.currentTime = (clickX / width) * duration;
}

// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgressBar);