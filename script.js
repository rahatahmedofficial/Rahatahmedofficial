// Hamburger Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
    });
}

// Close menu when a link is clicked
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        menu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        menu.classList.remove('active');
    }
});
// ============== DARK MODE TOGGLE ==============
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');

// Page load হলে saved theme check করো
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    if (themeIcon) themeIcon.textContent = '☀️';
}

// Toggle button click এ theme change করো
if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        // Toggle class
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        
        // Save choice
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            if (themeIcon) themeIcon.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            if (themeIcon) themeIcon.textContent = '🌙';
        }
    });
}
.hero h1 {
    font-size: 60px;
    margin-bottom: 15px;
    color: yellow;  /* 🆕 এই line add করো! */
}
// ============================================
