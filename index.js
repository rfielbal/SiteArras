document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Gestion de la Navbar au Scroll ---
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 2. Menu Burger Mobile ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animation du burger
        burger.classList.toggle('toggle');
    });

    // --- 3. Animation au Scroll (Intersection Observer) ---
    // Cette API permet de détecter quand un élément entre dans l'écran
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // On arrête d'observer une fois animé
            }
        });
    }, {
        root: null,
        threshold: 0.15, // L'animation se déclenche quand 15% de l'élément est visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});

