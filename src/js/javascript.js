// Set the date we're counting down to
var countDownDate = new Date("Nov 26, 2022 00:00:01").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "The adventure has just begun!";
  }
}, 1000);
// Music play function

const soundEffect = new Audio();
soundEffect.autoplay = true;
// onClick of first interaction on page before I need the sounds
window.addEventListener("touchstart", soundFunction);
function soundFunction(){
  soundEffect.play;
}

// (This is a tiny MP3 file that is silent and extremely short - retrieved from https://bigsoundbank.com and then modified)
soundEffect.src = 'assets/sound/test-1-preSound.mp3';
// later on when you actually want to play a sound at any point without user interaction
soundEffect.src ='assets/sound/Skyrim Dragonborn Theme x Dragon Age Inquisition.mp3';

// Figuring out how to make the sound automatically starts on mobile
let vw = window.innerWidth;
console.log('Current user viewport width');
console.log(vw);

// My easter egg ------ >
const myEasterEgg = new Audio();
myEasterEgg.src = 'assets/sound/fuocooo.wav';
document.getElementById('myCopyrightEasteregg').addEventListener("click", eastereggFunction);
  function eastereggFunction(){
    myEasterEgg.play();
}

// Test animations ------------>

gsap.fromTo('#hero', {
    opacity: 0,
    y: -20
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power1.out',
    delay: 0.5
  }
  );  


gsap.fromTo(
  ['#countdown_text'], {
    y: -70,
    opacity: 0
  },
  {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: 'none',
    delay: 1
  }
);

gsap.fromTo(
  ['#countdown'], {
    opacity: 0
  },
  {
    opacity: 1,
    duration: 3,
    ease: 'none',
    delay: 3
  }
);

gsap.fromTo(
  ['#row1'], {
    opacity: 0
  },
  {
    opacity: 1,
    duration: 1,
    ease: 'none',
    delay: 3.7
  }
);

gsap.fromTo(
  ['#row2'], {
    opacity: 0
  },
  {
    opacity: 1,
    duration: 1,
    ease: 'none',
    delay: 4
  }
);