const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const successMsg = document.getElementById("success-msg");

function validateFullName(fullNameText) {
    let cleanName = fullNameText.trim(); 
    
    if (cleanName.includes(" ")) {
        return true; 
    } else {
        return false; 
    }
}

const validateEmail = function(emailText) { 
    if (emailText.includes("@") && emailText.includes(".")) {
        return true;
    } else {
        return false; 
    }
};

const validatePassword = function(pwdText) { // 
    let hasUppercase = /[A-Z]/.test(pwdText); 
    let hasLowercase = /[a-z]/.test(pwdText); 
    let isLongEnough = pwdText.length >= 6;

       if (hasUppercase && hasLowercase && isLongEnough) {
        return true;
    } else {
        return false;
    }
};

form.addEventListener("submit", function(event) {
    event.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    successMsg.className = "success-hidden";

    let hasErrors = false;

    let isNameValid = validateFullName(nameInput.value);
    
    if (isNameValid === false) {
        nameError.textContent = "Please enter your full name (First and Last).";
        hasErrors = true;
    }

    let isEmailValid = validateEmail(emailInput.value);
    
    if (isEmailValid === false) {
        emailError.textContent = "Please enter a valid email address.";
        hasErrors = true;
    }

    let isPasswordValid = validatePassword(passwordInput.value);
    
    if (isPasswordValid === false) {
        passwordError.textContent = "Password must be at least 6 characters and contain both upper and lowercase letters.";
        hasErrors = true;
    }

    if (hasErrors === false) {
        successMsg.className = "success-visible";
        
        nameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
    }
});