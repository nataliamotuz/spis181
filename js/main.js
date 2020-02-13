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

  $('.slider').slick({
    arrows: true,
    dots: true,
    infinite: false,
    slidesToShow: 1,
    // responsive: [
    //   {
    //     breakpoint: 1124,
    //     settings: {
    //       slidesToShow: 2,
    //       infinite: false,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 800,
    //     settings: {
    //       centerMode: true,
    //       slidesToShow: 1,
    //       centerPadding: 0,
    //     }
    //   },
    // ]
  });
});