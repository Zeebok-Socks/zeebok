// =======================
// 1️⃣ Swiper Slider Init
// =======================
const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        992: { slidesPerView: 3 }
    }
});


// =======================
// 2️⃣ Scroll Animation for Product Cards
// =======================

// Select all product cards inside swiper slides
const cards = document.querySelectorAll(".swiper-slide .product-card");

// Set initial hidden state
cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.6s ease";
});

// Function to reveal cards on scroll
function revealCards() {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
}

// Listen to scroll event
window.addEventListener("scroll", revealCards);

// Trigger on page load as well (for cards already visible)
window.addEventListener("load", revealCards);
