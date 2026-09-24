# Week 9 Capstone: Full-Stack TypeScript Architecture

## 🎯 Objective

Synthesize all Week 9 TypeScript concepts into a unified, full-stack architecture. Demonstrate how a single set of shared types can secure a PostgreSQL database layer, an Express API routing layer, and a React frontend interface simultaneously.

## 📚 Core Concepts Integrated

- **Data Modeling (Days 1 & 2)**: Utilized Primitives, Tuples, Enums, Interfaces, and Intersections to define rigid data structures.
- **Type Narrowing (Day 2)**: Implemented Discriminated Unions (`type: "IT_ISSUE"`) to safely render different React UI components dynamically.
- **Generics & Utilities (Day 3)**: Applied `Omit<T>` to strip database-generated fields from API payloads, and `Promise<T>` to strictly type asynchronous database returns.
- **Full-Stack Typing (Day 4)**: Strictly typed React hooks (`useState`, `useRef`), DOM Events (`React.FormEvent`), and Express server pipelines (`Request`, `Response`).

## 💻 Capstone Project: End-to-End IIAP Dashboard

A simulated monorepo environment contained within a single `index.tsx` file. It features a shared `IIAPIssue` type that governs an asynchronous mock database function, a strict Express controller for routing, and an interactive React component featuring form submissions and dynamic conditional rendering.

### Setup Instructions

1. Initialize project: `npm init -y`
2. Install dependencies: `npm i react express`
3. Install dev types: `npm i -D typescript tsx @types/react @types/express`
4. Save the project code in `index.tsx`
5. Execute using `npx tsx index.tsx` to verify strict compilation across the entire stack.
