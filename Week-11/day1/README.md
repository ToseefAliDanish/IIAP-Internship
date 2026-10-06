# Week 11, Day 1: Next.js App Router Foundations

## 🎯 Objective

Transition into the modern Next.js App Router ecosystem. Master file-based routing conventions, separating UI structure from content through nested layouts, and handling dynamic parameters, loading states, and error boundaries natively.

## 📚 Core Concepts Covered

- **Pages vs. App Router**: Understanding the paradigm shift toward default Server Components and directory-based routing.
- **The Big 5 Special Files**:
  - `layout.tsx`: Persistent UI wrappers.
  - `page.tsx`: Unique route content.
  - `loading.tsx`: Native Suspense boundaries for async data.
  - `error.tsx`: Native Error boundaries (requires `"use client"`).
  - `not-found.tsx`: Custom 404 handling.
- **Route Groups `(folder)`**: Organizing directory structures and sharing layouts without mutating the public URL path.
- **Dynamic Routes `[id]`**: Capturing variable URL segments and passing them into the page component via the `params` prop.

## 💻 Mini-Project: IIAP Admin Panel Scaffold

A structurally complete Next.js folder hierarchy simulating a professional dashboard. It employs a Route Group to apply a persistent sidebar layout to multiple administrative views. The project demonstrates a dynamic `[id]` route that artificially delays rendering to trigger `loading.tsx`, and deliberately throws a mock exception on a specific ID to prove the isolation capabilities of `error.tsx`.

### Setup Instructions

1. Run `npx create-next-app@latest week11-admin-panel`
2. Run `cd week11-admin-panel`
3. Mirror the provided code block by creating the specific folder tree (`(admin)/tickets/[id]`) and corresponding special files inside the `app/` directory.
4. Execute using `npm run dev` and navigate to `/dashboard` to test the routing layout.
