const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const successMsg = document.getElementById("success-msg");

function isBlank(value) {
    if (value === "") {
        return true;
    } else {
        return false;
    }
}

function isPasswordValid(password) {
    if (password.length >= 6) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    successMsg.className = "success-hidden";

    let hasErrors = false;

    if (isBlank(nameInput.value) === true) {
        nameError.textContent = "Name cannot be blank.";
        hasErrors = true;
    }

    if (isBlank(emailInput.value) === true) {
        emailError.textContent = "Email is required.";
        hasErrors = true;
    }

    if (isPasswordValid(passwordInput.value) === false) {
        passwordError.textContent = "Password must be at least 6 characters.";
        hasErrors = true;
    }

    if (hasErrors === false) {
        successMsg.className = "success-visible";

        nameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
    }
});