# Week 2 - Day 4: Functions & Form Validation

## Core Concepts Learned

### 1. Functions

- **Purpose:** Encapsulating blocks of code for reuse, keeping scripts DRY (Don't Repeat Yourself).
- **Declarations vs. Expressions:** \* Declarations (`function name() {}`) are standard.
  - Expressions (`const name = function() {}`) assign anonymous functions to variables.
- **Parameters & Arguments:** Parameters act as placeholders in the function definition, while arguments are the actual values passed into the function when called.
- **Return Values:** The `return` keyword stops function execution and passes a specific value back to the caller.

### 2. Frontend Form Validation

- **Purpose:** Validating user input on the client side before sending data to a server to improve User Experience (UX) and reduce unnecessary server load.
- **Implementation:** 1. Intercept the submit event (`event.preventDefault()`). 2. Extract values from DOM inputs. 3. Evaluate values against business logic (e.g., checking `.length`, or checking for empty strings `""`). 4. Dynamically update the DOM (`textContent`) to provide real-time user feedback.

## Project

Developed a "Secure Signup Form." The project strictly utilizes Day 1-4 concepts. It listens for a form submission, halts the page refresh, and routes the input values through custom helper functions (utilizing parameters and `return` statements). Conditional logic (`if/else`) evaluates the returned booleans to selectively render custom error messages or a success banner based on the user's input validity.
