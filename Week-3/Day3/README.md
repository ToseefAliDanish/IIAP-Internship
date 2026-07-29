# Week 3 - Day 3: Modern Array Methods & Responsive CSS

## Core Concepts Implemented

### 1. Advanced Array Iteration (`forEach`)

- **Concept:** Replaced manual iterative loops (`while`, `for`) with declarative functional programming methods.
- **Implementation:** Utilized `array.forEach()` to cleanly iterate over the state data and calculate the total financial sum without managing manual index counters or array boundaries.

### 2. Data Transformation (`map`)

- **Concept:** Leveraged `.map()` to systematically transform an array of raw JavaScript Objects into an array of formatted HTML Template Literals.
- **Implementation:** Passed the generated array through `.join('')` to concatenate the strings seamlessly before injecting them into the DOM via `.innerHTML`.

### 3. Data Filtering (`filter`)

- **Concept:** Implemented non-destructive state filtering.
- **Implementation:** Bound click events to category UI buttons. When triggered, utilized `array.filter()` to evaluate each object's nested category property against the selected button text. This generated a temporary, subset array that was passed back into the `renderExpenses()` function, instantly updating both the list UI and the Total Calculation without mutating the original master array.

### 4. Nested Object Navigation

- **Concept:** Structured the state data with nested object depths (e.g., `item.details.name`) to simulate real-world API JSON responses, traversing them utilizing standard dot notation.

### 5. Responsive Web Design (Media Queries)

- **Concept:** Ensured cross-device UI compatibility.
- **Implementation:** Defaulted the application wrapper to a CSS Flexbox row layout for desktop viewports. Implemented a `@media (max-width: 768px)` query to intercept mobile devices, conditionally altering the `flex-direction` to `column` to stack the UI panels vertically for optimal mobile readability.
