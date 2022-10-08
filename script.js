const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
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
    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
}

// Next Song
function nextSong(){
    songIndex++;
    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
}


// On Load - Select First Song
loadSong(songs[songIndex]);

// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);