// 📌 Smooth Scroll Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// 📌 Navbar Shrink on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 📌 Scroll Reveal Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// 📌 Dynamic Skill Progress Bar
const skillBars = document.querySelectorAll('.skills-list li');
window.addEventListener('scroll', () => {
    skillBars.forEach(skill => {
        const skillPosition = skill.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (skillPosition < windowHeight - 100) {
            skill.classList.add('filled');
        }
    });
});

// 📌 Contact Form Validation
const form = document.querySelector('#contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Harap isi semua kolom dengan benar!');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            e.preventDefault();
            alert('Harap masukkan email yang valid!');
        }
    });
}

// 📌 Back to Top Button
const backToTop = document.createElement('button');
backToTop.innerText = '⬆️';
backToTop.id = 'back-to-top';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 📌 Dark Mode Toggle
const toggleDarkMode = document.createElement('button');
toggleDarkMode.innerText = '🌙';
toggleDarkMode.id = 'dark-mode-toggle';
document.body.appendChild(toggleDarkMode);

toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleDarkMode.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
// 📌 Feedback Form Submission
const feedbackForm = document.querySelector('#feedback-form');
const feedbackResponse = document.querySelector('#feedback-response');

feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#feedback-name').value.trim();
    const email = document.querySelector('#feedback-email').value.trim();
    const message = document.querySelector('#feedback-message').value.trim();

    if (!name || !email || !message) {
        feedbackResponse.style.color = '#dc3545';
        feedbackResponse.textContent = 'Harap isi semua kolom dengan benar!';
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        feedbackResponse.style.color = '#dc3545';
        feedbackResponse.textContent = 'Harap masukkan email yang valid!';
        return;
    }

    // Simulasi pengiriman feedback (bisa diintegrasikan dengan backend nantinya)
    setTimeout(() => {
        feedbackResponse.style.color = '#28a745';
        feedbackResponse.textContent = 'Terima kasih atas feedback Anda!';
        feedbackForm.reset();
    }, 1000);
});
