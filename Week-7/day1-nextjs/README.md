# Week 7 - Day 1: Next.js Foundation & API Routing

## Core Concepts Implemented

### 1. HTTP Headers & Status Codes

- **Concept:** Understanding the hidden metadata layer of HTTP requests.
- **Implementation:** Explicitly defined the `Content-Type: application/json` header and a `200` status code inside the Next.js response object to enforce strict communication protocols.

### 2. Next.js App Router Architecture

- **Concept:** Transitioning from Express.js monolithic routing to Next.js File-Based Routing.
- **Implementation:** Scaffolded a Next.js environment utilizing the modern App Router (`src/app`). Demonstrated how directory hierarchies dictate URL paths by creating the `src/app/api/jobs/route.js` file, which Next.js automatically maps to the `/api/jobs` endpoint.

### 3. Next.js API Handlers

- **Concept:** Executing backend logic within a full-stack React framework.
- **Implementation:** Authored an asynchronous `GET()` exported function. Replaced traditional Express `res` methods with the native `NextResponse.json()` utility to structure and transmit the JSON payload back to the client.
