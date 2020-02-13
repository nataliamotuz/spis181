$(document).ready(function () {

  $('.menu').click(() => {
    $('header, .menu').toggleClass('active');
  });

  $('header').click(() => {
    $('header, .menu').toggleClass('active');
  });

  $('.counter').countUp({
    time: 2000,
    delay: 10
  });
});