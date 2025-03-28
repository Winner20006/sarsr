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





document.addEventListener('DOMContentLoaded', () => {
  // Select all animated elements (both slide and fade)
  const animatedElements = document.querySelectorAll('.fade-in');

  // Function to check if element is in viewport
  const isElementInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.bottom >= 0
      );
  };

  // Function to activate animations
  const checkElementsInViewport = () => {
      animatedElements.forEach((element) => {
          if (isElementInViewport(element)) {
              // For slide animations
              if (element.hasAttribute('data-animate') && !element.classList.contains('slide-in')) {
                  element.classList.add('slide-in');
              }
              // For fade-in animations
              if (element.classList.contains('fade-in') && !element.classList.contains('active')) {
                  element.classList.add('active');
              }
          }
      });
  };

  // Initial check
  checkElementsInViewport();

  // Scroll event listener
  window.addEventListener('scroll', checkElementsInViewport);
});

// Keep your existing counter animation code unchanged
document.addEventListener('DOMContentLoaded', function() {
  const counters = document.querySelectorAll('.number');
  // ... (rest of your counter code remains the same)
});