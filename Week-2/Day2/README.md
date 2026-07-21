# Week 2 - Day 2: Logic, Conditions & DOM Selection

## Core Concepts Learned

### 1. Conditional Logic (`if` / `else if` / `else`)

- **Purpose:** Allows the application to make decisions and execute different code blocks based on specific criteria being `true` or `false`.
- **Usage:** Essential for routing, user authentication checks, and dynamic UI rendering.

### 2. The `switch` Statement

- **Purpose:** A streamlined alternative to complex `if/else` chains when evaluating a single variable against multiple potential strict values.
- **Syntax:** Utilizes `case` keywords to check values and `break` keywords to stop execution once a match is found.

### 3. DOM Selection Strategies

- **`document.getElementById('id')`:** Targets a single specific element. Highly performant.
- **`document.querySelector('.class')`:** Returns the first element in the document that matches the specified CSS selector.
- **`document.querySelectorAll('.class')`:** Returns a static `NodeList` (similar to an Array) containing all elements that match the CSS selector.

## Project

Engineered a "Smart Dashboard" interface. The JavaScript dynamically reads the system time to generate a time-appropriate greeting (via `if/else`), identifies the day of the week to display a specific motivational message (via `switch`), and batch-updates the UI styling of multiple task elements utilizing `querySelectorAll` and DOM class manipulation.
