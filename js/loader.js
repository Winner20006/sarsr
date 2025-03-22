// Wait for full page load
window.addEventListener('load', function () {
    // Add loaded class after short delay to complete pre-loader animation
    setTimeout(function () {
        document.body.classList.add('loaded');

        // Start your main page animations here
        const animatedElements = document.querySelectorAll('.animated-element');
        animatedElements.forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }, 500); // Matches the transition time
});

// Animate loading dots
const dots = document.querySelector('.dots');

// if (dots) { 
//     let dotCount = 0;
//     setInterval(() => {
//         dotCount = (dotCount + 1) % 4;
//         dots.textContent = '.'.repeat(dotCount);
//     }, 500);
// } else {
//     console.warn('.dots element not found in the DOM.');
// }