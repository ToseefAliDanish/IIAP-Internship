# Week 2 - Day 3: Events & Loops

## Core Concepts Learned

### 1. Event Listeners

- **Concept:** JavaScript's mechanism for waiting and reacting to user interactions.
- **`click` Events:** Attached to elements (like buttons) to execute code upon a mouse click via `element.addEventListener("click", function)`.
- **`submit` Events:** Attached to `<form>` elements. Requires the use of `event.preventDefault()` inside the function to prevent the browser's default behavior of refreshing the entire page upon submission.

### 2. Loops

- **`while` Loop:** Evaluates a condition before executing the code block. It continues to run as long as the condition remains `true`.
- **`do-while` Loop:** Executes the code block exactly once before evaluating the condition, ensuring the code runs at least one time regardless of the initial state.

### 3. Iterating Over Arrays

- **Concept:** Using loops to systematically access every item in a list.
- **Implementation:** Utilized a `while` loop initialized with an index variable (`let i = 0;`). The loop condition checks against the array's total size (`i < array.length`), accessing data sequentially via bracket notation (`array[i]`).

## Project

Built "The Milestone Click Tracker." This interactive widget strictly utilizes Day 3 concepts by listening for `click` events to increment a counter and push the data into an array. A `while` loop then iterates over that array to dynamically generate a history string on the UI. Additionally, a `submit` event listener intercepts a form to apply custom starting variables without triggering a page reload.
