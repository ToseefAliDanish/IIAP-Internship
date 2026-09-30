# Week 10, Day 2: Custom Hooks & Complex State Management

## 🎯 Objective

Scale component architecture by isolating reusable logic into Custom Hooks, and simplify complex, multi-tiered component state using the `useReducer` hook.

## 📚 Core Concepts Covered

- **Custom Hooks**: Abstracting UI-independent logic into standalone, reusable `use-` prefixed functions.
- **Industry Standard Hooks**:
  - `useFetch`: For API request lifecycles.
  - `useDebounce`: For throttling rapid state updates.
  - `useLocalStorage`: For syncing state with browser storage.
- **Rules of Hooks**: Strict architectural guidelines enforcing top-level, non-conditional hook invocation within React functions.
- **`useReducer`**: Managing complex, interdependent state structures by centralizing logic into a pure reducer function driven by dispatched actions.

## 💻 Mini-Project: IIAP Multi-Step State Form

A robust, 3-step ticket submission widget utilizing `useReducer` to safely transition between UI steps and update specific payload fields. It features a custom `useLocalStorage` hook that continuously syncs the reducer's state to the browser, ensuring zero data loss if the user accidentally refreshes the page during submission.

### Setup Instructions

1. Utilize the existing Vite React environment from Day 1.
2. Replace the contents of `src/App.tsx` with the provided code.
3. Execute `npm run dev` and navigate to `http://localhost:5173`.
4. Test functionality by progressing to Step 2 and refreshing the browser to verify data persistence.
