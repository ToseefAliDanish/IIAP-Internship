# Week 7 - Day 4: Full CRUD & Next.js Dynamic Routing

## Core Concepts Implemented

### 1. Centralized Data Architecture

- **Concept:** Sharing memory state across disparate API controllers.
- **Implementation:** Extracted the static `mockJobs` array into a dedicated `src/lib/db.js` utility file. Exported it via a mutable `let` binding, allowing both the root collection routes and the dynamic ID routes to mutate and query a Single Source of Truth.

### 2. Next.js Dynamic API Routes (`[id]`)

- **Concept:** Intercepting URL variables natively within the App Router folder structure.
- **Implementation:** Scaffolded the `src/app/api/jobs/[id]/route.js` directory hierarchy. Leveraged the `{ params }` context object in the route handlers to extract the dynamic URL segment (`params.id`), replacing Express.js's traditional `req.params.id` string-matching syntax.

### 3. Full RESTful CRUD Implementation

- **Concept:** Completing the four fundamental database operations over HTTP.
- **Implementation:**
  - **GET (Read Single):** Utilized `Array.find()` to isolate and return specific resources.
  - **PUT (Update):** Handled incoming JSON payloads and utilized `Array.findIndex()` alongside the Spread operator to safely merge new properties into existing objects.
  - **DELETE (Destroy):** Utilized `Array.splice()` to remove specific objects from the master array, returning a `200 OK` confirmation status.
