document.addEventListener("DOMContentLoaded", function () {

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,

    autoplay: {
      delay: 2000, // ✅ 2 seconds auto slide
      disableOnInteraction: false,
    },

    speed: 800, // smooth transition speed

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: { slidesPerView: 1 },
      600: { slidesPerView: 2 },
      992: { slidesPerView: 3 }
    }
  });

});
