# Week 5 - Day 2: Form Submission & Lifting State

## Core Concepts Implemented

### 1. Form Submission Interception (`preventDefault`)

- **Concept:** Overriding default browser architecture to maintain Single Page Application (SPA) integrity.
- **Implementation:** Bound the `handleSubmit` function to the native `<form onSubmit={...}>` event. Executed `event.preventDefault()` to block the browser's default HTTP POST refresh cycle, allowing React to manage the data lifecycle entirely in memory.

### 2. Inverse Data Flow (Lifting State Up)

- **Concept:** Transmitting localized component state upward to a Parent component to be utilized by the broader application tree.
- **Implementation:** \* Defined a master state array (`tickets`) and an appending function (`handleAddTicket`) within the Parent (`App.jsx`).
  - Passed `handleAddTicket` downward to the `<TicketForm />` as the `onAddTicket` prop.
  - Upon form submission, the Child component executes the prop function, injecting its localized `formData` object as the argument, successfully bridging the data across the component tree.

### 3. Immutable Array Updates

- **Concept:** Updating arrays in React state without mutating the original reference.
- **Implementation:** Utilized the Spread operator (`[completeTicket, ...tickets]`) inside the Parent's state setter. This constructs a brand new array reference with the newest ticket prepended to the top, ensuring React accurately detects the state change and triggers a re-render of the UI list.
