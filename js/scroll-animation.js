document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the data-animate attribute
  const animatedElements = document.querySelectorAll('[data-animate]');

  // Function to check if an element is in the viewport
  const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) && // Element's top is above the bottom of the viewport
      rect.bottom >= 0 // Element's bottom is below the top of the viewport
    );
  };

  // Function to add the slide-in class to elements in the viewport
  const checkElementsInViewport = () => {
    animatedElements.forEach((element) => {
      if (isElementInViewport(element) && !element.classList.contains('slide-in')) {
        element.classList.add('slide-in');
      }
    });
  };

  // Initial check for elements in the viewport on page load
  checkElementsInViewport();

  // Check elements on scroll
  window.addEventListener('scroll', checkElementsInViewport);
});

document.addEventListener('DOMContentLoaded', function () {
  // Select all elements with the number class
  const counters = document.querySelectorAll('.number');

  // IntersectionObserver to trigger counter animations
  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-number');
        const duration = 5000; // Animation duration in milliseconds
        const increment = target / (duration / 16); // 16ms is roughly the time for one frame at 60fps

        let current = 0;

        const updateCounter = () => {
          current += increment;
          if (current < target) {
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };

        updateCounter();
        observer.unobserve(counter); // Stop observing after animation starts
      }
    });
  }, observerOptions);

  // Observe each counter element
  counters.forEach((counter) => {
    observer.observe(counter);
  });
});