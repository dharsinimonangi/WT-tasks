document
.getElementById("registrationForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    document.querySelectorAll(".error").forEach(function(error){
        error.textContent = "";
    });

    document.getElementById("successMessage").textContent = "";

    let isValid = true;

    let fullname = document.getElementById("fullname").value.trim();
    let rollno = document.getElementById("rollno").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword =
        document.getElementById("confirmPassword").value;
    let department =
        document.getElementById("department").value;
    let dob = document.getElementById("dob").value;

    let gender =
        document.querySelector('input[name="gender"]:checked');

    if(fullname === ""){
        document.getElementById("nameError").textContent =
            "Full Name is required";
        isValid = false;
    }

    let rollPattern = /^[A-Za-z0-9]+$/;

    if(!rollPattern.test(rollno)){
        document.getElementById("rollError").textContent =
            "Roll Number should contain only letters and numbers";
        isValid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        document.getElementById("emailError").textContent =
            "Enter a valid email address";
        isValid = false;
    }

    let mobilePattern = /^[0-9]{10}$/;

    if(!mobilePattern.test(mobile)){
        document.getElementById("mobileError").textContent =
            "Mobile Number must contain exactly 10 digits";
        isValid = false;
    }

    if(password.length < 8){
        document.getElementById("passwordError").textContent =
            "Password must be at least 8 characters long";
        isValid = false;
    }

    if(password !== confirmPassword){
        document.getElementById("confirmPasswordError").textContent =
            "Passwords do not match";
        isValid = false;
    }

    if(!gender){
        document.getElementById("genderError").textContent =
            "Please select a gender";
        isValid = false;
    }

    if(department === ""){
        document.getElementById("departmentError").textContent =
            "Please select a department";
        isValid = false;
    }

    if(dob === ""){
        document.getElementById("dobError").textContent =
            "Please select your Date of Birth";
        isValid = false;
    }

    if(isValid){
        document.getElementById("successMessage").textContent =
            "Student Registration Successful!";
    }

});