// This file contains the JavaScript for the login page, handling form submission, validation, and any interactive elements.

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation
        if (username === '' || password === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate a login process (this should be replaced with actual authentication logic)
        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
            // Redirect to the main page or dashboard
            window.location.href = 'index.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});