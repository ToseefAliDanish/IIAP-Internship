# Week 10, Day 1: Advanced React Patterns (useEffect & useRef)

## 🎯 Objective

Master the React component lifecycle and background synchronizations. Learn how to securely manage side effects, prevent memory leaks with cleanup functions, bypass stale closures, and utilize mutable references without triggering UI renders.

## 📚 Core Concepts Covered

- **`useEffect` Lifecycle**: Synchronizing React components with external systems (network, DOM, timers).
- **Dependency Arrays**: Controlling exact re-render triggers.
- **Stale Closures**: Understanding how empty dependency arrays can trap old state variables, and using functional state updates (`prev => prev + 1`) to bypass them.
- **Cleanup Functions**: Preventing memory leaks by terminating subscriptions and intervals when components unmount.
- **Unnecessary Effects**: Identifying when to compute data during render rather than relying on `useEffect`.
- **`useRef` Hooks**: Storing background variables (like timer IDs) and directly manipulating raw HTML DOM elements without causing component re-renders.

## 💻 Mini-Project: IIAP Live Clock & Auto-Refresh Widget

A real-time monitoring component built with Vite. It features a pause/resume clock utilizing strict `useEffect` dependencies, an automated background synchronization simulation demonstrating functional state updates to avoid stale closures, and a `useRef` hook used to directly manipulate DOM borders to visually indicate a background refresh.

### Setup Instructions

1. Run `npm create vite@latest day1-advanced-react -- --template react-ts`
2. Run `cd day1-advanced-react` and `npm install`
3. Replace the contents of `src/App.tsx` with the project code.
4. Execute using `npm run dev` and view in the browser at `http://localhost:5173`.
