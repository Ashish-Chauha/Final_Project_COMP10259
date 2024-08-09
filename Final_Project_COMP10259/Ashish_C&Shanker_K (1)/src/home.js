$(document).ready(function() {
    // Fix the navigation bar
    $('.header-nav').css('position', 'fixed').css('top', '0').css('width', '100%');

    // Lightbox slideshow for images and videos
    $('.gallery img, .video-container video').click(function() {
        // Implement your lightbox logic here (e.g., open in modal)
    });

    // Close the slideshow
    $('.lightbox-close, .lightbox-overlay').click(function() {
        // Implement closing logic
    });
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    var isValid = true;

    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    if (firstName.length < 5) {
        alert('First name must be at least 5 characters.');
        isValid = false;
    }

    if (lastName.length < 5) {
        alert('Last name must be at least 5 characters.');
        isValid = false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Phone number must contain 10 digits.');
        isValid = false;
    }

    if (message.length < 50) {
        alert('Message must be at least 50 characters.');
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});