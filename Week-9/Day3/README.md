# Week 9, Day 3: Functions, Generics, and Async TypeScript

## 🎯 Objective

Master the dynamic side of TypeScript. Learn to strictly type functions and callbacks, build reusable logic using Generics, manipulate data shapes instantly using Utility Types, and safely handle asynchronous Promises.

## 📚 Core Concepts Covered

- **Typing Functions**: Defining parameters, return types, and callback signatures.
- **Generics (`<T>`)**: Creating flexible, reusable types and functions that adapt to incoming data.
- **Utility Types**:
  - `Partial<T>`: All fields optional.
  - `Pick<T>`: Select specific fields.
  - `Omit<T>`: Remove specific fields.
  - `Record<K, V>`: Create strict dictionaries.
  - `Required<T>`: Force all optional fields to be mandatory.
- **Async & Promises**: Using `Promise<T>` to type data fetched asynchronously from APIs or databases.

## 💻 Mini-Project: IIAP Async Database Service

A TypeScript mock-backend service that simulates asynchronous database transactions. It utilizes `Omit` for data creation, `Pick` for dashboard previews, and Generics to standardize API responses (`ApiResponse<T>`).

### Setup Instructions

1. Save the project code in `index.ts`
2. Execute using `npx tsx index.ts` (Requires Node.js environment)
