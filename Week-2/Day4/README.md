# Week 2 - Day 4: Advanced Functions & Strict Form Validation

## Core Concepts Learned

### 1. Function Syntax Types

- **Function Declaration:** Defined using the `function` keyword followed by a name (e.g., `function validateFullName() {}`).
- **Function Expression:** Defined by assigning an anonymous function to a variable (e.g., `const validateEmail = function() {}`).

### 2. Data Flow in Functions

- **Parameters:** The variables declared inside the parentheses of a function definition that act as placeholders for incoming data (e.g., `fullNameText`).
- **Arguments:** The actual, real data passed into the function when it is called (e.g., passing `nameInput.value` into `validateFullName(nameInput.value)`).
- **Return Values:** The specific data passed back to the main program using the `return` keyword (e.g., returning `true` or `false`).

### 3. Strict Validation Logic

- **Full Name Check:** Utilized `.trim()` and `.includes(" ")` to ensure the user inputted at least two distinct words.
- **Email Formatting:** Evaluated strings for the presence of both `@` and `.` characters.
- **Password Complexity (Regex):** Introduced basic Regular Expressions (`/[A-Z]/` and `/[a-z]/`) to test strings for specific character casings alongside standard `.length` integer checks.
