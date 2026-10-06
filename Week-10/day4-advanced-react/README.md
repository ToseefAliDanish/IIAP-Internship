# Week 10, Day 4: Server State with TanStack Query

## 🎯 Objective

Replace fragile `useEffect` and `useState` data-fetching patterns with enterprise-grade Server State management. Master caching, automatic retries, background synchronizations, and optimistic UI updates using TanStack Query.

## 📚 Core Concepts Covered

- **Server State vs. Client State**: Recognizing that database data requires specialized caching tools, unlike localized UI toggles.
- **`useQuery`**: Executing GET requests, auto-caching responses, and handling built-in `isPending` and `isError` booleans.
- **`useMutation`**: Executing POST/PUT/DELETE requests to alter server data.
- **Cache Invalidation**: Triggering background refetches using `queryClient.invalidateQueries` to ensure the UI stays synchronized with the database after a mutation.
- **Pagination via Query Keys**: Generating isolated caches per page by including page numbers inside the dependency `queryKey` array.
- **Optimistic Updates**: Creating a zero-latency user experience by forcefully injecting mock data into the local cache prior to the server's HTTP response, with automatic rollback protocols on failure.

## 💻 Mini-Project: IIAP Server-Synced Tickets

A simulated asynchronous dashboard demonstrating advanced TanStack Query mechanics. It features a paginated data table that caches previously visited pages for instant loads, and an interactive form that implements an Optimistic Update—appending new tickets to the UI instantly before performing a background sync to validate the data.

### Setup Instructions

1. Utilize the existing Vite React environment (`npm run dev`).
2. Run `npm install @tanstack/react-query` to add the library.
3. Replace the contents of `src/App.tsx` with the provided project code.
4. Interact with the form to observe the "Saving..." optimistic state and automatic cache invalidation.
