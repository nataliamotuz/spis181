$(document).ready(function () {

  $('.menu').click(() => {
    $('header, .menu').toggleClass('active');
  });

  $('header').click(() => {
    $('header, .menu').toggleClass('active');
  });

  $('.counter').countUp({
    time: 3000,
    delay: 10
  });
});