# Week 11, Day 4: Full-Stack Architecture & Security

## 🎯 Objective

Master Next.js architectural fundamentals. Construct standard REST API endpoints using Route Handlers, secure application routing boundaries using Edge Middleware, and safely manage sensitive backend credentials via environment variables.

## 📚 Core Concepts Covered

- **Rendering & Caching**: Understanding the performance impacts of Static generation, Dynamic request-time rendering, and Incremental Static Regeneration (ISR).
- **Route Handlers (`app/api`)**: Constructing traditional REST endpoints (`GET`, `POST`, `DELETE`) to handle standard HTTP requests outside the React component lifecycle.
- **Middleware (`middleware.ts`)**: Utilizing Edge runtime execution to intercept requests, inspect HTTP-only cookies, and execute protective redirects prior to component initialization.
- **Environment Variables**: Defining `.env.local` secrets and understanding the compiler boundary between highly secure Node.js variables and safely exposed browser variables (`NEXT_PUBLIC_`).

## 💻 Mini-Project: Secure IIAP Authentication Portal

A simulated authentication flow demonstrating perimeter security. A root-level Middleware function protects the `/day4-secure` dashboard. Users authenticate via a public portal that triggers a standard POST request to an `app/api/auth/route.ts` endpoint, which issues an HTTP-only session cookie. The protected dashboard is a Server Component, demonstrating secure, backend-only access to a `.env.local` database password.

### Setup Instructions

1. Ensure the development server is stopped.
2. Create `.env.local` and `middleware.ts` at the absolute root of the workspace.
3. Construct the `app/api/auth/`, `app/day4-portal/`, and `app/day4-secure/` directory trees.
4. Run `npm run dev` and attempt to access `/day4-secure` directly to observe the Middleware interception, followed by a successful authentication loop.
