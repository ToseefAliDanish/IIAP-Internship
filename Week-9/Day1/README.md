# Week 9, Day 1: TypeScript for Full-Stack Development

## 🎯 Objective

Transition from standard JavaScript to enterprise-grade TypeScript. Learn how to write type-safe code that catches bugs during development rather than in production.

## 📚 Core Concepts

### 1. Why TypeScript?

TypeScript acts as a strict compiler for JavaScript. By forcing you to define the exact "shape" and type of your data, it catches structural errors and typos before the code is ever deployed.

### 2. Configuration & Setup

- **`tsconfig.json`**: The master configuration file that dictates how TypeScript behaves in your project.
- **Strict Mode**: A configuration setting that enforces rigorous type-checking rules. This is the industry standard for writing safe, production-ready code.

### 3. Data Labels (Types)

- **Primitives**: The basic building blocks: `string` (text), `number`, and `boolean` (true/false).
- **Arrays**: A list containing only one specific type of data (e.g., `string[]` for an array of text).
- **Tuples**: A strictly structured array with a fixed length and specific types for each slot (e.g., `[string, number]`).

### 4. How TypeScript Thinks

- **Type Inference**: TypeScript's ability to automatically figure out a variable's type based on its initial value without you having to write it.
- **Explicit Types**: Manually forcing a specific type label onto a variable or function (e.g., `let age: number = 25;`).

### 5. Special Edge Cases

- **`any`**: Turns off TypeScript's rules. (Avoid using this in professional code!).
- **`unknown`**: A safer alternative to `any`. It tells the compiler the data is unknown and forces you to verify the data type before you are allowed to use it.
- **`never`**: Used for code that should literally never successfully finish executing (e.g., a function that only exists to throw a fatal error).

---

## 💻 Hands-On Task: The Phase 1 Upgrade

**Task:** Convert a legacy Phase 1 JavaScript utility file into strict TypeScript.

**Steps:**

1. Locate a utility file from your Phase 1 project (e.g., `formatDate.js` or `calculateTotal.js`).
2. Rename the file extension from `.js` to `.ts`.
3. Add explicit types to all function parameters.
4. Add explicit return types to the functions.
5. Fix any red squiggly errors the strict TypeScript compiler throws at you.
