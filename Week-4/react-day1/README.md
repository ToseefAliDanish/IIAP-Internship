# Week 4 - Day 1: React.js Foundation & State

## Core Concepts Implemented

### 1. Modern React Environment (Vite)

- **Concept:** Transitioned from static HTML/JS files to a Node-based build environment.
- **Implementation:** Utilized `npm create vite@latest` to initialize a modular React application architecture.

### 2. JSX Syntax

- **Concept:** A JavaScript syntax extension allowing HTML structures to be authored alongside application logic.
- **Implementation:** Replaced traditional DOM creation with declarative JSX. Adhered to strict JSX rules, including single-parent wrapper returns, transitioning `class` to `className`, and utilizing `{}` brackets for dynamic JavaScript variable injection.

### 3. Component Architecture & Event Handling

- **Concept:** Building self-contained UI blocks.
- **Implementation:** Authored the `App` component as an ES6 Arrow Function. Replaced vanilla `addEventListener` with inline JSX event handlers (e.g., `onClick={functionName}`).

### 4. Application State (`useState`)

- **Concept:** React's mechanism for persisting data across renders and automatically updating the DOM when data changes.
- **Implementation:** Imported the `useState` hook. Utilized array destructuring (`const [count, setCount]`) to establish a dynamic numerical variable. Mutated the state strictly via the setter function (`setCount`), triggering React's automatic UI reconciliation process.
