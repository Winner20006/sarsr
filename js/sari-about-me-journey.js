document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const yearMarkers = document.querySelectorAll('.year-marker');
    const journeyCards = document.querySelectorAll('.journey-card');
    const footer = document.querySelector('.footer');

    // Make header visible on load with a slight delay
    if (header) { // Check if header exists
        setTimeout(() => {
            header.classList.add('visible');
        }, 600);
    } else {
        console.warn('Header element not found in the DOM.');
    }

    // Check if an element is in viewport
    function isInViewport(element) {
        if (!element) return false; // Check if element exists
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
        );
    }

    // Check elements on scroll
    function checkVisibility() {
        yearMarkers.forEach(marker => {
            if (isInViewport(marker) && !marker.classList.contains('visible')) {
                marker.classList.add('visible');

                // Find cards within this year marker and make them visible with a delay
                setTimeout(() => {
                    const cards = marker.querySelectorAll('.journey-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 400); // Stagger the card animations
                    });
                }, 400);
            }
        });

        // Check footer visibility
        if (footer && isInViewport(footer) && !footer.classList.contains('visible')) {
            footer.classList.add('visible');
        }
    }

    // Initial check
    setTimeout(checkVisibility, 200);

    // Listen for scroll events
    window.addEventListener('scroll', checkVisibility);
});