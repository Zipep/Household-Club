// Initialize ----------->
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  
gsap.registerPlugin(ScrollTrigger);

$(document).ready(function(){
  $('#loginButton').click(function(){
    $('#loginModal').modal('toggle');
  });
});
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

//   if ($(window).width() < 767) {
//     gsap.to(".carta", {
//       duration: 2.5,
//       stagger: 2,
//       opacity: 1,
//       scrollTrigger: {
//         trigger: "#hero",
//         start: "center top",
//         // end: "bottom top+=500",
//         toggleClass: "visible"
//       }
//     })   
//   }
  
//   if ($(window).width() >= 768) {
//     gsap.fromTo('.carta', {
//       opacity: 0,
//       x: -150
//     },
//     {
//       x: 0,
//       duration: 2.5,
//       opacity: 1,
//       ease: 'elastic',
//       delay: 0.8,
//       stagger: 0.4
//     });
//   }

  // EasterEgg 2 ----------------------->
  // const easterEgg2 = new Audio();
  // easterEgg2.src = 'assets/sound/pagano_donna.wav';
  // document.getElementById("easter-egg-2").addEventListener("click", soundFunction2);
  //   function soundFunction2(){
  //     easterEgg2.play();
  //   }


  gsap.fromTo('.carta', {
    opacity: 0,
    x: -150
  },
  {
    x: 0,
    duration: 2.5,
    opacity: 1,
    ease: 'elastic',
    delay: 0.8,
    stagger: 0.4
  });