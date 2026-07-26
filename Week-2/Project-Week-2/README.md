# Week 2 Capstone Project: SaaS Support Ticket Dashboard 🏆

## Objective

To architect a fully functional, interactive dashboard utilizing strictly Week 2 frontend JavaScript principles. This project synthesizes DOM manipulation, control flow, iterative loops, event listening, and modular function design into a single codebase.

## Core Implementations

### 1. State & Environment Detection (`if/else`)

- **Time-Based Execution:** Instantiated the `Date()` object to retrieve local system time (`getHours()`). Utilized `if / else if` control blocks to conditionally render an appropriate localized greeting to the DOM upon script load.

### 2. Element Acquisition (`querySelectorAll`)

- **NodeList Generation:** Bypassed individual ID selection in favor of `document.querySelectorAll('.ticket-item')` to capture all dynamic UI targets into a single iterable list for efficient batch updating.

### 3. Modular Validation (Functions)

- **Declarations vs. Expressions:** Authored validation logic using both `function` declarations (for string verification) and function expressions (for numerical boundary verification).
- **Data Passing:** Passed DOM values as `arguments` into functions, evaluated them using parameters, and utilized strict boolean `return` values to drive application state.

### 4. Interactive Event Handling (`submit` & `click`)

- **Data Interception:** Bound an `addEventListener` to the primary form. Halted default browser HTTP requests (`event.preventDefault()`) to process data client-side.
- **Index Mapping:** Converted user numerical input into zero-indexed array integers (e.g., Input `1` targets NodeList index `0`) to perform precision DOM modifications without recreating elements.

### 5. Multi-Path Rendering (`switch`)

- **Dynamic CSS Application:** Extracted string values from a dropdown `<select>` element and routed them through a `switch` statement, conditionally appending specific CSS classes (`.classList.add()`) to visually indicate Priority thresholds (High/Medium/Low).

### 6. Batch Operations (`while` loops)

- **Global Overrides:** Tied a `click` event to a lock button that initiates a `while` loop. This iterative process transverses the entire DOM NodeList length, bulk-applying a `.locked` CSS class to instantly mutate the interface state.
