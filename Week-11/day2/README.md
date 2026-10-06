# Week 11, Day 2: Server Components & Streaming UI

## 🎯 Objective

Master the Next.js App Router rendering paradigm. Learn how to securely fetch data on the backend using async Server Components, seamlessly stream UI placeholders using `loading.tsx`, and strategically drop `"use client"` boundaries to inject interactivity exactly where it is needed without bloating the browser bundle.

## 📚 Core Concepts Covered

- **React Server Components (RSC)**: Default Next.js behavior. Components run exclusively on the Node.js server, allowing direct database access and shipping zero JavaScript logic to the client browser.
- **`use client` Boundary**: The directive used to opt-in to standard React client-side behavior (DOM access, event listeners, state).
- **Async Data Fetching**: Bypassing `useEffect` by converting the React component into an asynchronous function and directly awaiting backend data resolutions.
- **Streaming & Skeletons**: Leveraging Next.js internal Suspense mechanics via `loading.tsx` to instantly paint structural layout and animated placeholder skeletons while async data is being resolved in the background.

## 💻 Mini-Project: IIAP Personnel Directory

A standalone application demonstrating modern full-stack composition. `page.tsx` executes an asynchronous server-side fetch. While awaiting the response, Next.js natively streams the animated `loading.tsx` skeleton. Once resolved, the server component maps the data and imports `ProfileCard.tsx`—a dedicated client component crossing the boundary to enable local `useState` toggles for the UI.

### Setup Instructions

1. Run `npx create-next-app@latest day2-server-components`
2. Run `cd day2-server-components`
3. Overwrite `app/page.tsx` and create `app/ProfileCard.tsx` and `app/loading.tsx` using the provided code blocks.
4. Execute using `npm run dev` to observe the animated streaming skeleton resolving into an interactive dataset.
