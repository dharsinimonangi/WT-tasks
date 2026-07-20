document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let isValid = true;

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    // Error elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let subjectError = document.getElementById("subjectError");
    let messageError = document.getElementById("messageError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    // Name validation
    if (name === "") {
        nameError.textContent = "Name cannot be empty";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address";
        isValid = false;
    }

    // Subject validation
    if (subject.length < 5) {
        subjectError.textContent =
            "Subject must contain at least 5 characters";
        isValid = false;
    }

    // Message validation
    if (message.length < 20) {
        messageError.textContent =
            "Message must contain at least 20 characters";
        isValid = false;
    }

    // Success
    if (isValid) {
        alert("Message Sent Successfully!");

        document.getElementById("contactForm").reset();
    }
});