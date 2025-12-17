// script.js

// Smooth scrolling
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animate skill bars when in viewport
const skillItems = document.querySelectorAll('.skill-item');

const animateSkills = () => {
    skillItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const progress = item.querySelector('.skill-progress');
            const percent = item.getAttribute('data-percent');
            progress.style.width = percent + '%';
        }
    });
};

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// Form demo
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pesan berhasil dikirim! (Demo)');
    this.reset();
});