/* ============================================
   INITIALIZE ON PAGE LOAD
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== HAMBURGER MENU =====
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    
    if (menuToggle && menu) {
        // Toggle button click
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            menu.classList.toggle('active');
        });
        
        // Menu link click → close menu
        document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                menu.classList.remove('active');
            });
        });
        
        // Outside click → close menu
        document.addEventListener('click', function(e) {
            if (menu.classList.contains('active') && 
                !menu.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                menu.classList.remove('active');
            }
        });
    }
    
    // ===== DARK MODE =====
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.querySelector('.theme-icon');
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        if (themeIcon) themeIcon.textContent = '☀️';
    }
    
    // Toggle click
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            document.body.classList.toggle('light-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                if (themeIcon) themeIcon.textContent = '☀️';
            } else {
                localStorage.setItem('theme', 'light');
                if (themeIcon) themeIcon.textContent = '🌙';
            }
        });
    }
    
    // ===== ACTIVE NAV LINK ON SCROLL =====
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.menu a[href^="#"]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===== CONTACT FORM =====
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelectorAll('input[type="text"]')[1].value;
            const message = this.querySelector('textarea').value;
            
            // WhatsApp এ message পাঠাও
            const whatsappMessage = `Hello Rahat!%0A%0AName: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0A%0A${message}`;
            const whatsappURL = `https://wa.me/8801626224878?text=${whatsappMessage}`;
            
            if (confirm('আপনার message WhatsApp এ পাঠানো হবে। Continue?')) {
                window.open(whatsappURL, '_blank');
                this.reset();
                alert('✅ ধন্যবাদ! আপনার message পাঠানো হয়েছে।');
            }
        });
    }
    
    // ===== SCROLL ANIMATION =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .project-card, .stat-card, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
    
    // ===== CONSOLE MESSAGE =====
    console.log('🚀 Website loaded successfully!');
    console.log('👨‍💻 Built by Rahat Ahmed');
    console.log('💼 Available for freelance work!');
});
