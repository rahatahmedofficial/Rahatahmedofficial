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
