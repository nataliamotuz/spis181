$(document).ready(function () {
  let active = false;
  const toogleOverflow = () => {
    console.log(active);
    if (active) {
      active = false;
      $('body').css('overflow', 'auto');
    } else {
      active = true;
      $('body').css('overflow', 'hidden');
    }
  }

  $('.menu').click(() => {
    $('header, .menu').toggleClass('active');
    toogleOverflow();
  });

  $('header').click(() => {
    $('header, .menu').toggleClass('active');
    toogleOverflow();
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
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          infinite: false,
          dots: true,
          arrows: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          centerPadding: 0,
          arrows: false,
        }
      },
    ]
  });
});