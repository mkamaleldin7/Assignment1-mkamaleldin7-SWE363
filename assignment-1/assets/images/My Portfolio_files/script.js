// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.toggleAttribute('data-theme');
});

// Greeting message by time of day (optional enhancement)
window.addEventListener('DOMContentLoaded', () => {
    const about = document.getElementById('about');
    if (about) {
        const hour = new Date().getHours();
        let greeting = 'Hello';
        if (hour < 12) greeting = 'Good morning';
        else if (hour < 18) greeting = 'Good afternoon';
        else greeting = 'Good evening';
        about.insertAdjacentHTML('beforeend', `<p>${greeting} and welcome to my portfolio!</p>`);
    }
});

// Contact form interaction (no backend)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    this.reset();
});
