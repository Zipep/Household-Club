// Initialize ----------->
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

$(document).ready(function(){
  $('#loginButton').click(function(){
    $('#loginModal').modal('toggle');
  });
});

// Scripts
const paperSound = new Audio();
paperSound.src = 'assets/sound/pen.mp3';
document.getElementById('list-one-list').addEventListener("click", paperFunction);
document.getElementById('list-two-list').addEventListener("click", paperFunction);
document.getElementById('list-three-list').addEventListener("click", paperFunction);
document.getElementById('list-four-list').addEventListener("click", paperFunction);
    function paperFunction(){
        paperSound.play();
      }
      
// I create a variable equals to the audio I want to reproduce
const greatPaper = new Audio();
greatPaper.src = 'assets/sound/great-page-turns.mp3';

// Converting the variable in array and then call the method for each, after that I can enstablish the function
const maps = Array.from(document.getElementsByClassName('suonoImmagine'));
      maps.forEach(suonoImmagine => {
        suonoImmagine.addEventListener('click', function handleClick(event) {
          greatPaper.play(), event;
        });
      });

gsap.fromTo('#hero_Page_3', {
  opacity: 0,
  y: -20
},
{
  opacity: 1,
  y: 0,
  duration: 1.2,
  ease: 'power1.out',
  delay: 0.5
}
);

gsap.fromTo(
  ['#advice_container'], {
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
  ['#papers'], {
    opacity: 0
  },
  {
    opacity: 1,
    duration: 1.7,
    ease: 'none',
    delay: 3
  }
);

gsap.fromTo(
  ['#imagebox'], {
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
  ['#stories_header', '#stories'], {
    opacity: 0
  },
  {
    opacity: 1,
    duration: 1,
    ease: 'none',
    delay: 4.2
  }
);