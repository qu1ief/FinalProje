var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




var swiper = new Swiper('.secondSwiper', {
  slidesPerView: 3,
  // direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 1,
    },
  },
});



var swiper = new Swiper(".thirtSwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  // direction: 'horizontal', 

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    955: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});



var swiper = new Swiper('.fourthSwiper', {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}





// detail fir 






