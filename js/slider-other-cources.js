const swiperOtherCources = new Swiper('.swiper-cources', {
  loop: true,
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 20,
  // Responsive breakpoints
  breakpoints: {
    1140: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__btn',
    bulletActiveClass: 'pagination__btn--active',
  },

  navigation: {
    nextEl: '.other-cources-btn.next',
    prevEl: '.other-cources-btn.prev',
  },
});
