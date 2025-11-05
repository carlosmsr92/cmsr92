// ====================================
// PORTFOLIO - CARLOS MANUEL SUÁREZ RIVERO
// Interactive Features & Animations
// ====================================

// Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Smooth scroll for all anchor links
    const allLinks = document.querySelectorAll('a[href^="#"]');
    allLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Form submission handling (Formspree)
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (contactForm && successMessage) {
        // Detectar si estamos en file:// (local) o http:// (servidor)
        const isLocalFile = window.location.protocol === 'file:';
        
        if (isLocalFile) {
            // En local: usar submit tradicional sin JavaScript
            console.log('Modo local detectado - usando submit tradicional');
            // No añadimos el event listener, el formulario se enviará normalmente
        } else {
            // En servidor: usar AJAX para mejor UX
            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalButtonText = submitButton.innerHTML;
                
                // Show loading state
                submitButton.disabled = true;
                submitButton.innerHTML = 'Enviando...';
                
                const formData = new FormData(contactForm);
                
                try {
                    const response = await fetch(contactForm.action, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    
                    if (response.ok) {
                        // Success - Hide form and show success message
                        contactForm.style.display = 'none';
                        successMessage.style.display = 'block';
                        
                        // Optional: Also show notification
                        showNotification('¡Mensaje enviado!', 'Gracias por contactarme. Te responderé pronto.', 'success');
                    } else {
                        // Error
                        const errorData = await response.json().catch(() => null);
                        console.error('Formspree error:', errorData);
                        
                        // Si es el primer envío, Formspree pide confirmación
                        if (response.status === 422 && errorData?.error?.includes('confirm')) {
                            showNotification('Confirma tu email', 'Revisa tu bandeja de entrada y confirma el email de Formspree para activar el formulario.', 'error');
                        } else {
                            showNotification('Error al enviar', 'Hubo un problema. Por favor, intenta de nuevo o contacta por LinkedIn.', 'error');
                        }
                        
                        // Restore button on error
                        submitButton.disabled = false;
                        submitButton.innerHTML = originalButtonText;
                    }
                } catch (error) {
                    // Network error
                    console.error('Network error:', error);
                    showNotification('Error de conexión', 'Por favor, verifica tu conexión e intenta de nuevo.', 'error');
                    
                    // Restore button on error
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalButtonText;
                }
            });
        }
    }

    // Scroll animations for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate cards on scroll
    const cards = document.querySelectorAll('.project-card, .skill-card, .education-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Active nav link highlight
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const highlightNav = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.style.color = '';
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        // Usa variable CSS adaptativa - cambia automáticamente según tema
                        const activeColor = getComputedStyle(document.documentElement)
                            .getPropertyValue('--header-text-active').trim();
                        link.style.color = activeColor;
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightNav);
    highlightNav(); // Initial call
});

// Simple notification system
function showNotification(title, message, type = 'success') {
    // Remove existing notification if any
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <strong class="notification-title">${title}</strong>
            <p class="notification-message">${message}</p>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    `;

    // Add notification styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 2rem;
                right: 2rem;
                max-width: 24rem;
                background: white;
                border-radius: 0.5rem;
                box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
                padding: 1rem;
                display: flex;
                align-items: start;
                gap: 1rem;
                z-index: 9999;
                animation: slideIn 0.3s ease;
                border-left: 4px solid var(--color-primary);
            }

            .notification-error {
                border-left-color: hsl(0, 72%, 51%);
            }

            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            .notification-content {
                flex: 1;
            }

            .notification-title {
                display: block;
                font-weight: 600;
                margin-bottom: 0.25rem;
                color: var(--color-foreground);
            }

            .notification-message {
                font-size: 0.875rem;
                color: var(--color-muted-foreground);
                margin: 0;
            }

            .notification-close {
                background: none;
                border: none;
                cursor: pointer;
                padding: 0.25rem;
                color: var(--color-muted-foreground);
                transition: color 0.2s;
                flex-shrink: 0;
            }

            .notification-close:hover {
                color: var(--color-foreground);
            }

            @media (max-width: 640px) {
                .notification {
                    left: 1rem;
                    right: 1rem;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add slideOut animation
if (!document.querySelector('#slideout-animation')) {
    const style = document.createElement('style');
    style.id = 'slideout-animation';
    style.textContent = `
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}
