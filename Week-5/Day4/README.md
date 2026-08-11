# Week 5 - Day 4: Architecture & Refactoring

## Core Concepts Implemented

### 1. Separation of Concerns (File Structure)

- **Concept:** Isolating logic by domain to ensure long-term maintainability and code readability.
- **Implementation:** Transitioned from a monolithic component model to a structured `src` tree. Separated pure JavaScript helper functions into a `utils/` directory and partitioned UI rendering into smaller, discrete files within the `components/` directory.

### 2. Utility Extraction

- **Concept:** Removing logic from React components that does not strictly require the React lifecycle or Virtual DOM.
- **Implementation:** Extracted string validation and Regex pattern matching into `validators.js`. These are exported as pure functions, imported into `TicketForm.jsx`, and executed during the validation cycle, drastically reducing UI component bloat.

### 3. Deep Component Composition

- **Concept:** Ensuring the Master Parent (`App.jsx`) delegates UI rendering entirely to Child components.
- **Implementation:** \* Extracted the array mapping logic out of `App.jsx` and created `<TicketList />`.
  - Extracted the individual `<li>` rendering logic out of the mapping function and created `<TicketCard />`.
  - `App.jsx` now strictly orchestrates data flow, passing `onAddTicket` (upward action) to the Form, and `tickets` (downward data) to the List.
