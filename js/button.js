document.addEventListener('DOMContentLoaded', function () {
    const waveButtons = document.querySelectorAll('.wave-button');

    waveButtons.forEach((waveButton) => {
        const waveContainer = waveButton.querySelector('.wave-container');
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = waveContainer.offsetWidth;
        canvas.height = 30;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';

        waveContainer.appendChild(canvas);

        // Wave properties
        const amplitude = 3; // Height of the wave
        const frequency = 0.05; // How many waves per pixel
        const phaseSpeed = 0.03; // Speed of the wave animation
        let phase = 0; // Phase offset for animation

        function drawWave() {
            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Begin drawing the sine wave
            ctx.beginPath();

            // Draw the sine wave
            for (let x = 0; x < canvas.width; x++) {
                const y = amplitude * Math.sin(frequency * x + phase) + canvas.height / 2;
                if (x === 0) {
                    ctx.moveTo(x, y); // Move to the starting point
                } else {
                    ctx.lineTo(x, y); // Draw the wave
                }
            }

            // Style the wave
            ctx.strokeStyle = '#b6c9d1'; // Color of the wave
            ctx.lineWidth = 2; // Thickness of the wave
            ctx.stroke(); // Render the wave

            // Update the phase for animation
            phase += phaseSpeed;

            // Request the next frame
            requestAnimationFrame(drawWave);
        }

        // Start the animation
        drawWave();

        // Handle window resize
        window.addEventListener('resize', function () {
            canvas.width = waveContainer.offsetWidth;
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const waveButtons = document.querySelectorAll('.wave-button1');

    waveButtons.forEach((waveButton) => {
        const waveContainer = waveButton.querySelector('.wave-container');
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = waveContainer.offsetWidth;
        canvas.height = 30;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';

        waveContainer.appendChild(canvas);

        // Wave properties
        const amplitude = 3; // Height of the wave
        const frequency = 0.05; // How many waves per pixel
        const phaseSpeed = 0.03; // Speed of the wave animation
        let phase = 0; // Phase offset for animation

        function drawWave() {
            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Begin drawing the sine wave
            ctx.beginPath();

            // Draw the sine wave
            for (let x = 0; x < canvas.width; x++) {
                const y = amplitude * Math.sin(frequency * x + phase) + canvas.height / 2;
                if (x === 0) {
                    ctx.moveTo(x, y); // Move to the starting point
                } else {
                    ctx.lineTo(x, y); // Draw the wave
                }
            }

            // Style the wave
            ctx.strokeStyle = '#b6c9d1'; // Color of the wave
            ctx.lineWidth = 2; // Thickness of the wave
            ctx.stroke(); // Render the wave

            // Update the phase for animation
            phase += phaseSpeed;

            // Request the next frame
            requestAnimationFrame(drawWave);
        }

        // Start the animation
        drawWave();

        // Handle window resize
        window.addEventListener('resize', function () {
            canvas.width = waveContainer.offsetWidth;
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const waveButtons = document.querySelectorAll('.wave-button2');

    waveButtons.forEach((waveButton) => {
        const waveContainer = waveButton.querySelector('.wave-container');
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = waveContainer.offsetWidth;
        canvas.height = 30;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';

        waveContainer.appendChild(canvas);

        // Wave properties
        const amplitude = 3; // Height of the wave
        const frequency = 0.05; // How many waves per pixel
        const phaseSpeed = 0.03; // Speed of the wave animation
        let phase = 0; // Phase offset for animation

        function drawWave() {
            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Begin drawing the sine wave
            ctx.beginPath();

            // Draw the sine wave
            for (let x = 0; x < canvas.width; x++) {
                const y = amplitude * Math.sin(frequency * x + phase) + canvas.height / 2;
                if (x === 0) {
                    ctx.moveTo(x, y); // Move to the starting point
                } else {
                    ctx.lineTo(x, y); // Draw the wave
                }
            }

            // Style the wave
            ctx.strokeStyle = 'white'; // Color of the wave
            ctx.lineWidth = 3; // Thickness of the wave
            ctx.stroke(); // Render the wave

            // Update the phase for animation
            phase += phaseSpeed;

            // Request the next frame
            requestAnimationFrame(drawWave);
        }

        // Start the animation
        drawWave();

        // Handle window resize
        window.addEventListener('resize', function () {
            canvas.width = waveContainer.offsetWidth;
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const waveButtons = document.querySelectorAll('.wave-button-l');

    waveButtons.forEach((waveButton) => {
        const waveContainer = waveButton.querySelector('.wave-container');
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = waveContainer.offsetWidth;
        canvas.height = 30;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';

        waveContainer.appendChild(canvas);

        // Wave properties
        const amplitude = 3; // Height of the wave
        const frequency = 0.05; // How many waves per pixel
        const phaseSpeed = 0.03; // Speed of the wave animation
        let phase = 0; // Phase offset for animation

        function drawWave() {
            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Begin drawing the sine wave
            ctx.beginPath();

            // Draw the sine wave
            for (let x = 0; x < canvas.width; x++) {
                const y = amplitude * Math.sin(frequency * x + phase) + canvas.height / 2;
                if (x === 0) {
                    ctx.moveTo(x, y); // Move to the starting point
                } else {
                    ctx.lineTo(x, y); // Draw the wave
                }
            }

            // Style the wave
            ctx.strokeStyle = 'white'; // Color of the wave
            ctx.lineWidth = 3; // Thickness of the wave
            ctx.stroke(); // Render the wave

            // Update the phase for animation
            phase += phaseSpeed;

            // Request the next frame
            requestAnimationFrame(drawWave);
        }

        // Start the animation
        drawWave();

        // Handle window resize
        window.addEventListener('resize', function () {
            canvas.width = waveContainer.offsetWidth;
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const waveButtons = document.querySelectorAll('.wave-button-i');

    waveButtons.forEach((waveButton) => {
        const waveContainer = waveButton.querySelector('.wave-container');
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = waveContainer.offsetWidth;
        canvas.height = 30;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';

        waveContainer.appendChild(canvas);

        // Wave properties
        const amplitude = 3; // Height of the wave
        const frequency = 0.05; // How many waves per pixel
        const phaseSpeed = 0.03; // Speed of the wave animation
        let phase = 0; // Phase offset for animation

        function drawWave() {
            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Begin drawing the sine wave
            ctx.beginPath();

            // Draw the sine wave
            for (let x = 0; x < canvas.width; x++) {
                const y = amplitude * Math.sin(frequency * x + phase) + canvas.height / 2;
                if (x === 0) {
                    ctx.moveTo(x, y); // Move to the starting point
                } else {
                    ctx.lineTo(x, y); // Draw the wave
                }
            }

            // Style the wave
            ctx.strokeStyle = 'white'; // Color of the wave
            ctx.lineWidth = 3; // Thickness of the wave
            ctx.stroke(); // Render the wave

            // Update the phase for animation
            phase += phaseSpeed;

            // Request the next frame
            requestAnimationFrame(drawWave);
        }

        // Start the animation
        drawWave();

        // Handle window resize
        window.addEventListener('resize', function () {
            canvas.width = waveContainer.offsetWidth;
        });
    });
});





document.addEventListener('DOMContentLoaded', function () {
    const waveButtons = document.querySelectorAll('.wave-button3');

    waveButtons.forEach((waveButton) => {
        const waveContainer = waveButton.querySelector('.wave-container');
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = waveContainer.offsetWidth;
        canvas.height = 30;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';

        waveContainer.appendChild(canvas);

        // Wave properties
        const amplitude = 3; // Height of the wave
        const frequency = 0.05; // How many waves per pixel
        const phaseSpeed = 0.03; // Speed of the wave animation
        let phase = 0; // Phase offset for animation

        function drawWave() {
            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Begin drawing the sine wave
            ctx.beginPath();

            // Draw the sine wave
            for (let x = 0; x < canvas.width; x++) {
                const y = amplitude * Math.sin(frequency * x + phase) + canvas.height / 2;
                if (x === 0) {
                    ctx.moveTo(x, y); // Move to the starting point
                } else {
                    ctx.lineTo(x, y); // Draw the wave
                }
            }

            // Style the wave
            ctx.strokeStyle = '#b6c9d1'; // Color of the wave
            ctx.lineWidth = 2; // Thickness of the wave
            ctx.stroke(); // Render the wave

            // Update the phase for animation
            phase += phaseSpeed;

            // Request the next frame
            requestAnimationFrame(drawWave);
        }

        // Start the animation
        drawWave();

        // Handle window resize
        window.addEventListener('resize', function () {
            canvas.width = waveContainer.offsetWidth;
        });
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const waveButtons = document.querySelectorAll('.wave-button-s');

    waveButtons.forEach((waveButton) => {
        const waveContainer = waveButton.querySelector('.wave-container');
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = waveContainer.offsetWidth;
        canvas.height = 30;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';

        waveContainer.appendChild(canvas);

        // Wave properties
        const amplitude = 3; // Height of the wave
        const frequency = 0.05; // How many waves per pixel
        const phaseSpeed = 0.03; // Speed of the wave animation
        let phase = 0; // Phase offset for animation

        function drawWave() {
            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Begin drawing the sine wave
            ctx.beginPath();

            // Draw the sine wave
            for (let x = 0; x < canvas.width; x++) {
                const y = amplitude * Math.sin(frequency * x + phase) + canvas.height / 2;
                if (x === 0) {
                    ctx.moveTo(x, y); // Move to the starting point
                } else {
                    ctx.lineTo(x, y); // Draw the wave
                }
            }

            // Style the wave
            ctx.strokeStyle = '#b6c9d1'; // Color of the wave
            ctx.lineWidth = 2; // Thickness of the wave
            ctx.stroke(); // Render the wave

            // Update the phase for animation
            phase += phaseSpeed;

            // Request the next frame
            requestAnimationFrame(drawWave);
        }

        // Start the animation
        drawWave();

        // Handle window resize
        window.addEventListener('resize', function () {
            canvas.width = waveContainer.offsetWidth;
        });
    });
});