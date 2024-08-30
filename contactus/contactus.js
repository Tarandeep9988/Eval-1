function submitForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var responseMessage = document.getElementById('responseMessage');

    // Basic validation for empty fields and email format
    if (name === '' || email === '' || message === '') {
        responseMessage.textContent = 'Please fill in all fields.';
        responseMessage.style.color = 'red';
        return;
    }
    if (!validateEmail(email)) {
        responseMessage.textContent = 'Please enter a valid email address.';
        responseMessage.style.color = 'red';
        return;
    }

    // Clear the form after submission
    responseMessage.textContent = 'Your message has been sent successfully!';
    responseMessage.style.color = 'green';
    document.getElementById('contactForm').reset();
}

// Function to validate email format
function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}