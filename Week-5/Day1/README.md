# Week 5 - Day 1: Controlled React Forms

## Core Concepts Implemented

### 1. Controlled vs. Uncontrolled Architecture

- **Concept:** Transitioned input state management away from the DOM and strictly into React's Virtual DOM.
- **Implementation:** Bound the `value` attribute of all HTML inputs directly to a React state variable. The inputs cannot change unless the React state changes first, creating a "Single Source of Truth."

### 2. Unified Object State (`useState`)

- **Concept:** Managing multi-input form structures efficiently without polluting the component with numerous individual `useState` declarations.
- **Implementation:** Initialized `formData` as a single JavaScript object containing keys for `title`, `email`, and `priority`.

### 3. Dynamic Change Handlers

- **Concept:** Engineering a single, scalable event handler capable of managing `onChange` events for any number of form fields.
- **Implementation:** Utilized event destructuring (`const { name, value } = event.target`) alongside the ES6 Spread operator (`...formData`) and dynamic object keys (`[name]: value`) to seamlessly update the specific field being interacted with while preserving the rest of the form's state.

### 4. Application Scaffolding

- **Concept:** Planning and structuring the component tree for a scalable application.
- **Implementation:** Scaffolded the `src/components` directory to support a Parent-Child architecture (`App` -> `TicketForm`), preparing the environment for multi-component data flow in upcoming modules.
