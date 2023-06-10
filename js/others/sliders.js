// Scroll header fijo
$(window).scroll(function(){
  var header = $('header');
  if ($(window).scrollTop() > 10) {
    header.addClass('--scrollFix');
  } else {
    header.removeClass('--scrollFix');
  }
});


$(document).ready(function() {

// Ancla 
$('.js-anchor').click(function() {
  var destino = $(this.hash);
  if (destino.length == 0) {
    destino = $('a[name="' + this.hash.substr(1) + '"]');
  }
  if (destino.length == 0) {
    destino = $('html');
  }
  $('html, body').animate({ scrollTop: destino.offset().top - 100 }, 500);
  return false;
});

// Slider Hero Home
var swiperuno = new Swiper('.js-hero', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  speed: 700,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.js-btn-hero-next',
    prevEl: '.js-btn-hero-prev',
  },
}); 

 // Slider Highlights home
 var swipercuatro = new Swiper('.js-slider-hightlights', {
  direction: 'horizontal',
  spaceBetween: 15,
  loop: false,
  speed: 900,
  

  pagination: {
    el: '.js-slider-hightlights-pagination',
    type: 'bullets',
  },

  breakpoints: {
    480: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },
    
    1024: {
      slidesPerView: 3,
    },
  },
});
});