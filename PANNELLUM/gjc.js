document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    const cards = carousel.querySelectorAll('.card');
    let current = 0;
    let autoplayInterval = null;

    function updateCarousel() {
        cards.forEach((card, index) => {
            card.classList.remove('active', 'left', 'right');
        });

        cards[current].classList.add('active');
        cards[(current + 1) % cards.length].classList.add('right');
        cards[(current - 1 + cards.length) % cards.length].classList.add('left');
    }

    function next() {
        current = (current + 1) % cards.length;
        updateCarousel();
    }

    function prev() {
        current = (current - 1 + cards.length) % cards.length;
        updateCarousel();
    }

    function startAutoplay() {
        autoplayInterval = setInterval(next, 3000); // Moves every 3 seconds
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    // Event Listeners for Drag and Touch
    let startX = 0;
    let isDragging = false;

    carousel.addEventListener('mousedown', (e) => {
        stopAutoplay();
        isDragging = true;
        startX = e.clientX;
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        let diff = e.clientX - startX;

        if (diff > 100) {
            prev();
            isDragging = false;
            startAutoplay();
        } else if (diff < -100) {
            next();
            isDragging = false;
            startAutoplay();
        }
    });

    carousel.addEventListener('mouseup', () => isDragging = false);
    carousel.addEventListener('mouseleave', () => isDragging = false);

    // Touch Events for Mobile
    carousel.addEventListener('touchstart', (e) => {
        stopAutoplay();
        startX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchmove', (e) => {
        let diff = e.touches[0].clientX - startX;

        if (diff > 100) {
            prev();
            startAutoplay();
        } else if (diff < -100) {
            next();
            startAutoplay();
        }
    });

    // Initialize the carousel
    updateCarousel();
    startAutoplay();
});