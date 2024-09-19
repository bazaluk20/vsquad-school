const swiperProg = new Swiper('.swiper-programms', {
  loop: true,
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 20,
  // Responsive breakpoints
  //   breakpoints: {
  //     // when window width is >= 480px
  //     768: {
  //       slidesPerView: 2,
  //     },
  //     // when window width is >= 640px
  //     1280: {
  //       slidesPerView: 3,
  //     },
  //   },
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__btn',
    bulletActiveClass: 'pagination__btn--active',
  },

  navigation: {
    nextEl: '.programms-btn.next',
    prevEl: '.programms-btn.prev',
  },
});
