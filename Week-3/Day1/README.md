# Week 3 - Day 1: Modern JS (ES6) & Project

## Core Concepts Learned

### 1. Modern Scope (`let/const` vs `var`)

- **Concept:** ES6 resolved variable hoisting and scope-leaking by introducing block-scoped variables.
- **Usage:** Used `const` for DOM selections that never change, and `let` for variables whose values are evaluated or assigned dynamically (like the CSS status class).

### 2. Template Literals

- **Concept:** A modern syntax for string manipulation utilizing backticks ( `` ` `` ).
- **Benefits:** 1. Allows for clean, multi-line HTML string creation within JavaScript files. 2. Enables dynamic variable injection using the `${variableName}` syntax, eliminating clunky string concatenation.

### 3. Default Parameters

- **Concept:** Allows initialization of function parameters with default fallback values.
- **Usage:** Applied to the `createChecklistItem` function (`status = "Pending"`). If the second argument is omitted when the function is called, JavaScript automatically applies the default string, preventing `undefined` errors and reducing repetitive code.

### 4. DOM Injection (`innerHTML`)

- **Concept:** Parses string variables into actual HTML DOM elements, replacing the target container's current content. This is the foundational method for rendering large, dynamic UI components from JavaScript.

## Project

**Phase 1 of the Smart Expense Tracker.** Engineered a dual-panel "Project Planning Hub" acting as a dashboard for the upcoming application build. The project strictly utilized ES6 Template Literals to construct a visual UI wireframe on the left panel, and leveraged Default Parameters to dynamically generate a state-aware tech checklist on the right panel. All HTML was injected directly via JavaScript.
