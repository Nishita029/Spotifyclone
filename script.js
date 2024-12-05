console.log("Welcome to spotify");
//initialize the variables
let songIndex =0;
let audioElement = new Audio('songs/song0.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName: "tune", filePath: "songs/song0.mp3", coverPath: "images/cover.jpg"},
    {songName: "Anarkali Disco Chali", filePath: "songs/song1.mp3", coverPath: "images/cover.jpg"},
    {songName: "Criminal", filePath: "songs/song2.mp3", coverPath: "images/cover.jpg"},
    {songName: "Illegal Weapon 2.0", filePath: "songs/song3.mp3", coverPath: "images/cover.jpg"},
    {songName: "Laal Peeli Ankhiyaa", filePath: "songs/song4.mp3", coverPath: "images/cover.jpg"},
    {songName: "Tere Hawaale", filePath: "songs/song5.mp3", coverPath: "images/cover.jpg"},
    {songName: "Teri Baaton Mein Aisa Uljha Jiya", filePath: "songs/song6.mp3", coverPath: "images/cover.jpg"},
   
];     
songitem.forEach((Element , i)=>{
  
    Element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    Element.getElementsByClassName('songname')[0].innerText = songs[i].songName;
});

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }

});

//Listen to events
audioElement.addEventListener('timeupdate', ()=> {

    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);

    myprogressbar.value = progress;
});

myprogressbar.addEventListener('change', ()=>{

    audioElement.currentTime = (myprogressbar.value * audioElement.duration)/100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
       
    });
};

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=> {
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    });
});

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex > 9){
    songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
    songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});