document.getElementById("myForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let successMsg = document.getElementById("successMsg");

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    successMsg.innerHTML = "";

    let valid = true;

    if(name === ""){
        nameError.innerHTML = "Please enter your name";
        valid = false;
    }
    else if(!/^[A-Za-z ]+$/.test(name)){
        nameError.innerHTML = "Name should contain only letters";
        valid = false;
    }

    if(email === ""){
        emailError.innerHTML = "Please enter your email";
        valid = false;
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        emailError.innerHTML = "Enter a valid email address";
        valid = false;
    }

    if(valid){
        successMsg.innerHTML = "Form submitted successfully!";
        document.getElementById("myForm").reset();
    }

});