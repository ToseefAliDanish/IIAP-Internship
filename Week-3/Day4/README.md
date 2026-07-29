# Week 3 - Day 4: Destructuring & Spread/Rest Operators

## Core Concepts Implemented

### 1. Object & Array Destructuring

- **Concept:** Unpacking properties from nested objects or arrays into distinct, standalone variables.
- **Implementation:** Refactored the UI rendering `.map()` function. Extracted the `amount`, `name`, and `category` variables directly from the passed `item` object. This eliminated deep dot-notation chaining (e.g., `item.details.name`), resulting in a cleaner, more readable Template Literal block.

### 2. Immutable State Management (Spread Operator `...`)

- **Concept:** Expanding iterable objects into new distinct structures, preventing the mutation of original data sources.
- **Implementation:** Removed the traditional `expensesArray.push()` method. Replaced it with `expensesArray = [...expensesArray, newExpense]`. This modern architectural pattern ensures the original state is preserved, establishing a solid foundation for migrating to frameworks like React.

### 3. Property Gathering (Rest Operator `...`)

- **Concept:** Condensing remaining object properties or array elements into a single structured variable.
- **Implementation:** Utilized within the filtering logic. Applied `const { category, ...otherDetails } = item.details` to specifically isolate the `category` for logical comparison, while safely packing the remaining (and potentially unknown) data parameters into the `otherDetails` object.
