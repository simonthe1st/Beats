const playBtn = document.querySelector('.video__player-img');
const video = document.getElementById('player');
const playerPlayBtn = document.querySelector('.duration__btn-wrap');
const durationControl = document.getElementById('durationLevel');
const soundControl = document.getElementById('micLevel')
const soundBtn = document.querySelector('.sound');
const dynamicBtn = document.getElementById('dynamic');

let intervalId;
let soundLevel;

video.addEventListener('loadeddata', function () {
    video.addEventListener('click', playStop);
    playerPlayBtn.addEventListener('click', playStop);
    
    let playButtons = document.querySelectorAll('.play');
    
    for (let i = 0; i < playButtons.length; i++) {
        playButtons[i].addEventListener('click', playStop);
    }
    
    durationControl.min = 0;
    durationControl.value = 0;
    durationControl.max = video.duration;
    durationControl.addEventListener('input', setVideoDuration)

    soundControl.min = 0;
    soundControl.max = 10;
    soundControl.value = soundControl.max
    soundControl.addEventListener('input', changeSoundVolume);
    changeGradientSound()
    dynamicBtn.addEventListener('click', soundOf);

    video.addEventListener('ended', () => {
        playBtn.classList.toggle('video__btn-img--active');
        playerPlayBtn.classList.remove('paused');
        video.currentTime = 0;
    })

})

function playStop() {
    playBtn.classList.toggle('video__btn-img--active');
    playerPlayBtn.classList.toggle('paused');
    
    if(video.paused) {
        video.play();
        intervalId = setInterval(updateDuration, 1000 / 60);
    } else {
        clearInterval(intervalId);
        video.pause();
    }
}


function setVideoDuration() {
    video.currentTime = durationControl.value;
}

function updateDuration() {
    durationControl.value = video.currentTime;
    let step = video.duration / 100;
    let percent = video.currentTime / step;
    durationControl.style.background = `linear-gradient(90deg, #E01F3D 0%, #E01F3D ${percent}%, #333 ${percent}%)`;
}

function changeSoundVolume() {
    video.volume = soundControl.value / 10;
    if (video.volume === 0) {
        soundBtn.classList.add('active');
    } else {
        soundBtn.classList.remove('active')
    }
    let step = soundControl.max / 100;
    let percent = soundControl.value / step;

    soundControl.style.background = `linear-gradient(90deg, #E01F3D 0%, #E01F3D ${percent}%, #333 ${percent}%)`;
}

function changeGradientSound() {
    let step = soundControl.max / 100;
    let percent = soundControl.value / step;

    soundControl.style.background = `linear-gradient(90deg, #E01F3D 0%, #E01F3D ${percent}%, #333 ${percent}%)`;
}

function soundOf() {
    if (video.volume === 0) {
        video.volume = soundLevel;
        soundControl.value = soundLevel * 10;
        soundBtn.classList.remove('active');
    } else {
        soundLevel = video.volume;
        video.volume = 0;
        soundControl.value = 0;
        soundBtn.classList.add('active');
    }
    
}
