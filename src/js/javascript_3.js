// Initialize ----------->
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

$(document).ready(function(){
  $('#loginButton').click(function(){
    $('#loginModal').modal('toggle');
  });
});