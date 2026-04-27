document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navbar Scroll Effect
    // Adds a shadow and solid background to the navbar after scrolling 50px
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // 2. Project Card Hover Optimization
    // Ensures carousels only auto-play when the user is looking at them
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const bsCarousel = new bootstrap.Carousel(carousel, {
            interval: 3000, // Slide every 3 seconds
            pause: 'hover'  // Stop sliding when mouse is over
        });
    });

    // 3. Simple Reveal Animation
    // Elements with class "reveal" will fade in when they enter the viewport
    const revealElements = document.querySelectorAll('.project-card, .section-title, .about-text');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.classList.add('reveal'); // Add base class via JS
        revealObserver.observe(el);
    });
});