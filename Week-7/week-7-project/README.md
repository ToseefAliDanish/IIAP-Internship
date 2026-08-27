# Week 7 Master Project: TechHire Pro Full-Stack Next.js

## Architecture Overview

This application serves as the capstone for Week 7, demonstrating a fully unified Full-Stack architecture using Next.js 15 App Router.

### Core Architecture Achieved

#### 1. Full-Stack File-Based Routing

- **Server-Side API (`route.js`):** Engineered RESTful API endpoints (`/api/jobs` and `/api/jobs/[id]`) operating purely in the Node.js backend environment to handle database interactions.
- **Client-Side UI (`page.js`):** Engineered React interfaces (`/jobs`) that execute in the browser using the `"use client"` directive, allowing for state management (`useState`) and side-effects (`useEffect`).

#### 2. Advanced Next.js 15 Dynamics

- **Asynchronous Parameters:** Successfully adapted to the Next.js 15 breaking changes by utilizing `await params` in dynamic route endpoints, preventing build-time and runtime hydration errors.
- **Middleware Interception:** Implemented a global `middleware.js` file at the root level configured with a custom `matcher`, successfully capturing, logging, and forwarding raw HTTP request metadata before routing execution.

#### 3. Cross-Boundary Communication

- **Client-to-Server Fetching:** Replaced terminal-based cURL/Console API testing by building a fully interactive React UI. The React application natively consumes the Next.js backend via asynchronous `fetch()` calls, parsing the resulting standardized JSON envelope (`{ success, data }`) and triggering React DOM re-renders via State lifting.
- **Try/Catch Resilience:** Secured backend `POST` and `DELETE` operations using asynchronous `try/catch` guardrails, ensuring that UI interactions never trigger unhandled Promise rejections or 500 fatal server crashes.
