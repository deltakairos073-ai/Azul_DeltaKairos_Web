// FUNCIONALIDAD DEL HAMBURGER MENU
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// CERRAR MENÚ AL HACER CLICK EN UN LINK
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// FUNCIÓN DE SCROLL SUAVE
function scrollTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ANIMACIÓN AL HACER SCROLL
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar tarjetas de propuestas
document.querySelectorAll('.propuesta-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Observar tarjetas de equipo
document.querySelectorAll('.miembro-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Observar tarjetas de redes
document.querySelectorAll('.social-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// CONTADOR DE VOTOS (animación)
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// EFECTOS DE INTERACTIVIDAD EN BOTONES
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function(e) {
        this.style.transform = 'translateY(0)';
    });
});

// VALIDACIÓN DE FORMULARIOS (cuando agregues)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// LOG INICIAL
console.log('✨ Sitio de campaña cargado correctamente');
