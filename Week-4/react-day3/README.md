# Week 4 - Day 3: Conditional Rendering & Default Props

## Core Concepts Implemented

### 1. The Logical AND Operator (`&&`)

- **Concept:** Rendering UI elements strictly when a specific boolean condition evaluates to true.
- **Implementation:** Applied to the `<UserCard />` component to dynamically render a "PRO" HTML badge (`{isPro && <span>PRO</span>}`). If the prop evaluates to false, React ignores the line entirely, preventing empty DOM nodes.

### 2. The Ternary Operator (`? :`)

- **Concept:** Inline `if/else` logic evaluated directly within JSX curly braces.
- **Implementation:** Utilized to toggle both structural CSS classes and raw text content based on the `isActive` prop. For example, rendering `className={isActive ? "status-dot green" : "status-dot red"}` to visually indicate an online vs offline state.

### 3. Default Props via ES6 Destructuring

- **Concept:** Providing fallback data values to prevent application crashes or `undefined` renders when a Parent component omits a prop.
- **Implementation:** Defined a default value within the Child component's parameter destructuring (`{ role = "Guest" }`). Demonstrated its efficacy in `App.jsx` by rendering a third user card without passing a role prop, allowing the component to successfully self-heal and display the fallback "Guest" text.
