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