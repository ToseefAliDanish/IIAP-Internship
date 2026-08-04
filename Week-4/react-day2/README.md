# Week 4 - Day 2: Component Composition & Props

## Core Concepts Implemented

### 1. Functional Component Composition

- **Concept:** Breaking monolithic application structures down into modular, reusable UI pieces.
- **Implementation:** Architected a Parent-Child relationship by separating the application logic (`App.jsx`) from the specific button UI (`ToggleButton.jsx`). The Parent imports and renders the Child as a custom JSX tag (`<ToggleButton />`).

### 2. Prop Drilling (Data Passing)

- **Concept:** Passing read-only properties from a Parent component down to a Child component to dictate how the Child renders.
- **Implementation:** Passed the `isActive` boolean state down to the `ToggleButton`. The Child utilized ES6 Destructuring to receive the prop and dynamically applied CSS classes (`btn-active` vs `btn-inactive`) using ternary operators.

### 3. Inverse Data Flow (Event Handler Props)

- **Concept:** Enabling a Child component to trigger state mutations that exist strictly within the Parent's scope.
- **Implementation:** The Parent defined a state-mutating arrow function (`handleToggle`). This function was passed down to the Child as a prop (`onToggle`). The Child bound this prop directly to its native HTML `onClick` listener, successfully achieving inverse data communication.
