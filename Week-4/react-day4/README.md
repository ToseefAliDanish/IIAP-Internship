# Week 4 - Day 4: React List Rendering & Architecture

## Core Concepts Implemented

### 1. File Architecture & Component Separation

- **Concept:** Transitioning from single-file monoliths to modular component trees.
- **Implementation:** Created a dedicated `src/components/` directory. Isolated the presentational UI logic for individual list items into a discrete `ExpenseItem.jsx` file, utilizing standard capitalized file naming conventions, and imported it into the `App.jsx` parent.

### 2. Declarative List Rendering (`.map()`)

- **Concept:** Utilizing functional array methods to dynamically generate JSX elements based on data structures.
- **Implementation:** Replaced Vanilla JS `.join('')` and DOM injection with inline JSX mapping. Iterated over the state array using `.map()`, instructing React to render an `<ExpenseItem />` component for every individual data object while passing the specific object values down as props.

### 3. React Reconciliation (`key` prop)

- **Concept:** Providing React's Virtual DOM with unique identifiers to optimize rendering performance during list mutations.
- **Implementation:** Bound the unique database `id` of each expense object to the required `key={item.id}` prop inside the `.map()` function, ensuring React can track structural changes without unnecessarily re-rendering the entire list component.

### 4. Derived State Computation

- **Concept:** Calculating UI views dynamically based on state, rather than duplicating state variables.
- **Implementation:** Instead of maintaining a separate `[filteredArray, setFilteredArray]` state, the application tracks only the `activeFilter` string. The component computes `expensesToDisplay` on the fly using standard ES6 ternary logic and `.filter()` immediately prior to the return statement, ensuring the UI always perfectly syncs with the active filter parameters.
