# Week 10 Capstone: Advanced React & State Management

## 🎯 Objective

Synthesize all Week 10 concepts to build an enterprise-grade React dashboard. This project demonstrates how to elegantly separate concerns by combining Context, specialized Hooks, Reducers, and Server-State management into a single cohesive architecture.

## 📚 Core Concepts Integrated

- **Context API (Day 3)**: A top-level `<ThemeProvider>` wraps the application, broadcasting structural UI styling without prop drilling.
- **`useRef` & `useEffect` (Day 1)**: Utilized to capture the `HTMLInputElement` and forcibly apply focus to the search bar upon initial component mount.
- **Custom Hooks (Day 2)**: Extracted a `useDebounce` hook wrapping `useEffect` to safely delay high-frequency state updates, preventing API rate-limiting during rapid user searches.
- **`useReducer` (Day 2)**: Replaced disparate `useState` variables with a unified `filterReducer`. It cleanly handles business logic (e.g., automatically resetting pagination to Page 1 whenever search terms or status filters are modified).
- **TanStack Query (Day 4)**: Managed the entire asynchronous data pipeline. Powered the auto-caching of paginated datasets and utilized `keepPreviousData` to ensure a smooth UI experience while new pages are being fetched.

## 💻 Capstone Project: IIAP Dynamic Issue Dashboard

A fully typed, robust React application mimicking a real-world enterprise control center. Users can rapidly search, filter by resolution status, and paginate through a mock database of 45 tickets, with all network latency, caching, and state synchronizations handled invisibly by the advanced hook architecture.

### Setup Instructions

1. Utilize a Vite React environment (`npm run dev`).
2. Install dependencies: `npm install @tanstack/react-query`
3. Replace the contents of `src/App.tsx` with the project code.
4. Interact with the application to observe debounced network calls, context-driven theme switching, and cached pagination.
