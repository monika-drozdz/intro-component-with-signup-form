var form = document.getElementById("form");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var password = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    var fNameValue = fname.value.trim();
    var lNameValue = lname.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();

    if (fNameValue === "") {
        setErrorFor(fname, "First Name cannot be empty");
    } else {
        setSuccessFor(fname);
    }

    if (lNameValue === "") {
        setErrorFor(lname, "Last Name cannot be empty");
    } else {
        setSuccessFor(lname);
    }

    if(emailValue === "") {
        setErrorFor(email, "Email cannot be empty"); 
    }
    else if (!isEmail(emailValue)) {
        setErrorFor(email, "Looks like this is not an email");
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "Password cannot be empty");
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    var formControl = input.parentElement;
    var small = formControl.querySelector("small");
    small.innerText = message;
    formControl.className = "form-control error";
    input.placeholder = "";
}

function setSuccessFor(input) {
    var formControl = input.parentElement;
    formControl.className = "form-control success";    
}

function isEmail(email) {
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}
