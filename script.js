// =============================================
// CMSR92 - Portfolio V2.0 - JavaScript
// =============================================

// ========== Theme Toggle ==========
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Tema elegido con el botón o, si no, el del sistema. Clave nueva: la versión anterior guardaba 'theme' en cada visita
// aunque nadie lo eligiera, y eso congelaba el tema del sistema de aquella primera visita
const getPreferredTheme = () => {
    let savedTheme = null;
    try {
        savedTheme = localStorage.getItem('theme-choice');
    } catch (e) {
        // Sin almacenamiento: se usa la preferencia del sistema
    }
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Set theme
const setTheme = (theme) => {
    html.setAttribute('data-theme', theme);
};

// Initialize theme: sin guardar nada, para que siga al sistema mientras el visitante no elija
setTheme(getPreferredTheme());

// Toggle theme on button click: solo una elección explícita se recuerda
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    try {
        localStorage.setItem('theme-choice', newTheme);
    } catch (e) {
        // Sin almacenamiento (modo privado o bloqueado): el cambio vale para esta visita
    }
});

// Desplazamiento suave salvo si el sistema pide reducir movimiento
const scrollBehavior = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

// ========== Smooth Scrolling for Navigation Links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            // Si es la sección hero (inicio), ir completamente arriba
            if (targetId === '#hero') {
                window.scrollTo({
                    top: 0,
                    behavior: scrollBehavior()
                });
            } else {
                // Para otras secciones, aplicar offset del header
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: scrollBehavior()
                });
            }
        }
    });
});

// ========== Active Navigation Link on Scroll ==========
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const setActiveNav = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
};

window.addEventListener('scroll', setActiveNav);

// ========== Header Scroll Effect ==========
const header = document.getElementById('header');

const handleScroll = () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

window.addEventListener('scroll', handleScroll);

// ========== Mobile Menu Toggle ==========
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navLinksContainer = document.getElementById('nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
}

// ========== Intersection Observer for Fade-In Animations ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.project-card, .skill-category, .timeline-item').forEach(el => {
    fadeInObserver.observe(el);
});

// ========== Lazy Loading Images ==========
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========== Parallax Effect for Hero Section (Optimizado - Sin superposición) ==========
let ticking = false;
const isMobile = window.innerWidth <= 768;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            
            if (hero && scrolled < window.innerHeight) {
                // NO aplicar translateY para evitar superposiciones
                // Solo manejar la opacidad de forma suave
                
                const fadeStart = window.innerHeight * 0.6; // Empieza a 60% del viewport
                const fadeEnd = window.innerHeight * 0.95; // Termina a 95% del viewport
                
                if (scrolled < fadeStart) {
                    hero.style.opacity = '1';
                } else if (scrolled >= fadeStart && scrolled < fadeEnd) {
                    const fadeProgress = (scrolled - fadeStart) / (fadeEnd - fadeStart);
                    hero.style.opacity = 1 - (fadeProgress * 0.2); // Máximo 20% de transparencia
                } else {
                    hero.style.opacity = '0.8';
                }
            }
            
            ticking = false;
        });
        
        ticking = true;
    }
});

// ========== Console Easter Egg ==========
console.log(
    '%c🚀 Hola Developer! 👋',
    'color: #0CA5BE; font-size: 20px; font-weight: bold;'
);
console.log(
    '%c¿Te gusta lo que ves? Este portfolio fue creado con amor usando HTML, CSS y JavaScript vanilla.',
    'color: #57CDDF; font-size: 14px;'
);
console.log(
    '%c¿Quieres colaborar o tienes un proyecto en mente? Contáctame: cmsr92@uoc.edu',
    'color: #0CA5BE; font-size: 12px;'
);
