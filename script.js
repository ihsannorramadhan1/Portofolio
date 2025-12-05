document.addEventListener('DOMContentLoaded', () => {
    // Cosmos Animation (Stars & Asteroids)
    const cosmosContainer = document.getElementById('cosmos-container');
    if (cosmosContainer) {
        // Generate Stars
        const starCount = 50; // Fewer stars for clean look
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');

            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = Math.random() * 3 + 1;
            const duration = Math.random() * 3 + 2;
            const delay = Math.random() * 5;

            star.style.left = `${x}%`;
            star.style.top = `${y}%`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.animationDuration = `${duration}s`;
            star.style.animationDelay = `${delay}s`;

            cosmosContainer.appendChild(star);
        }

        // Generate Asteroids (Shooting Stars)
        function createAsteroid() {
            const asteroid = document.createElement('div');
            asteroid.classList.add('asteroid');

            // Random start position (mostly top right area)
            const startX = Math.random() * 50 + 50; // 50% to 100% width
            const startY = Math.random() * 50; // 0% to 50% height

            asteroid.style.left = `${startX}%`;
            asteroid.style.top = `${startY}%`;

            // Random duration
            const duration = Math.random() * 2 + 1;
            asteroid.style.animationDuration = `${duration}s`;

            cosmosContainer.appendChild(asteroid);

            // Remove after animation
            setTimeout(() => {
                asteroid.remove();
            }, duration * 1000);
        }

        // Spawn asteroid every few seconds
        setInterval(createAsteroid, 4000);
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Feedback Form Handling
    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const response = document.getElementById('feedback-response');
            response.style.color = '#28a745';
            response.textContent = 'Message sent successfully! I will get back to you soon.';
            feedbackForm.reset();
            setTimeout(() => {
                response.textContent = '';
            }, 3000);
        });
    }
});
