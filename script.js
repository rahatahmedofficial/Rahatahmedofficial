// HAMBURGER MENU TOGGLE
document.addEventListener('DOMContentLoaded', function() {
    
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    
    if (menuToggle) {
        // Button click
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            menu.classList.toggle('active');
        });
        
        // Menu link click → close
        document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                menu.classList.remove('active');
            });
        });
        
        // Outside click → close
        document.addEventListener('click', function(e) {
            if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                menu.classList.remove('active');
            }
        });
    }
});

// CONTACT FORM
function handleSubmit(event) {
    event.preventDefault();
    alert('ধন্যবাদ! আপনার message পাঠানো হয়েছে।');
    event.target.reset();
}
