// My mark //
console.log("Ваша отметка - 70 баллов");

// Active button

const btns = document.querySelectorAll('.btn');
const play = document.querySelector('.pbtn');

// Audio

const audio = document.querySelector('audio');

function playAudio() {
  if (play.classList.contains("active")) {
    audio.pause();
    play.style.backgroundImage = 'url("./assets/svg/play.svg")';

  }
  else {
    audio.currentTime = 0;
    audio.play();
    play.style.backgroundImage = 'url("./assets/svg/pause.png")';
  }
}

play.addEventListener('click', playAudio);

btns.forEach( button => {
  button.addEventListener('click', function() {
      btns.forEach( oldButton => {
      oldButton.classList.remove('active');
    });
    this.classList.add('active');
  })
})

play.addEventListener('click', function changeColor(event) { this.classList.toggle('active')});

// Picture and sound change

const background = document.querySelectorAll('.background-change');
const backgroundChanger = document.querySelector('.nav-list');

function changePic (event) {
  if(event.target.classList.contains('btn')) {
  for (i=0; i<background.length; i++){
    background[i].style.backgroundImage = `url('./assets/img/${event.target.dataset.background}.jpg')`;
  }
  audio.src=`./assets/audio/${event.target.dataset.background}.mp3`
  }
}

backgroundChanger.addEventListener('click', changePic);


