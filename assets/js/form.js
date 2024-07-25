
(function() {
    emailjs.init('9OMGmjraIAe-vq703');  
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        document.getElementById('status').innerHTML = "Message sent successfully!";
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        document.getElementById('status').innerHTML = "Failed to send message.";
        console.log('FAILED...', error);
    });
});
