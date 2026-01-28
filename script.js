document.addEventListener("DOMContentLoaded", function () {

    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      loopAdditionalSlides: 4,   // helps prevent stopping
  
      autoplay: {
        delay: 2000,              // 2 seconds
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        waitForTransition: false
      },
  
      speed: 800,
  
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  
      breakpoints: {
        0: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        992: { slidesPerView: 3 }
      }
    });
  
  });
  
