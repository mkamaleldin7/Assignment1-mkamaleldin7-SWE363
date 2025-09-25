// // Theme toggle
// const themeToggle = document.getElementById('theme-toggle');
// themeToggle.addEventListener('click', () => {
//     document.body.toggleAttribute('data-theme');
// });

// js/script.js

const aboutText = document.querySelector('.about-text');
if (aboutText) {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) greeting = 'Good morning';
    else if (hour < 18) greeting = 'Good afternoon';
    else greeting = 'Good evening';

    aboutText.insertAdjacentHTML(
        'afterbegin',
        `<strong>${greeting}, welcome to my portfolio!</strong><br><br>`
    );
}


// Contact form interaction (no backend)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Form submitted:', {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    }); 
    alert('Thank you for your message!');
    this.reset();
});
