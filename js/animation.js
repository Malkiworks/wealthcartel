// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    gsap.to('.hero-content', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Animate service cards
    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '.services',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Animate about section stats
    gsap.from('.stat', {
        scrollTrigger: {
            trigger: '.about-stats',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)'
    });

    // About text animation
    gsap.from('.about-text p', {
        scrollTrigger: {
            trigger: '.about-text',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power3.out'
    });

    // Pricing cards animation
    gsap.from('.pricing-card', {
        scrollTrigger: {
            trigger: '.pricing',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Testimonial animation
    gsap.from('.testimonial', {
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power3.out'
    });

    // Contact form animation
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Contact info animation
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Social links animation
    gsap.from('.social-link', {
        scrollTrigger: {
            trigger: '.social-links',
            start: 'top 90%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)'
    });

    // Section titles animation
    gsap.from('.section-title', {
        scrollTrigger: {
            trigger: '.section-title',
            start: 'top 90%',
            toggleActions: 'play none none none',
            markers: false
        },
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Parallax effect for hero
    gsap.to('.hero::before', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        y: '20%',
        ease: 'none'
    });

    // Floating animation for CTA button
    gsap.to('.cta-button', {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });

    // Counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        // Skip the animation for the "1-5" stat
        if (stat.textContent.includes('1-5')) {
            return;
        }
        
        const target = parseFloat(stat.textContent);
        const plus = stat.textContent.includes('+');
        const percent = stat.textContent.includes('%');
        
        let prefix = '';
        let suffix = '';
        
        if (percent) {
            suffix = '%';
        }
        
        if (plus) {
            suffix = '+';
        }
        
        gsap.from(stat, {
            scrollTrigger: {
                trigger: stat,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            innerText: 0,
            duration: 2,
            snap: { innerText: 1 },
            onUpdate: function() {
                stat.textContent = prefix + Math.ceil(parseFloat(stat.innerText)) + suffix;
            },
            ease: 'power3.out'
        });
    });

    // Text reveal animation
    const splitText = (element) => {
        const text = element.textContent;
        const chars = text.split('');
        element.textContent = '';
        
        chars.forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.display = 'inline-block';
            element.appendChild(span);
        });
        
        return element.querySelectorAll('span');
    };

    const heroTitle = document.querySelector('.hero-content h1');
    const chars = splitText(heroTitle);
    
    gsap.from(chars, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.03,
        ease: 'power3.out'
    });
}); 