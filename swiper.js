document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      //   480: {
      //     slidesPerView: 1,
      //     // spaceBetween: 30,
      //   },

      640: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
});
