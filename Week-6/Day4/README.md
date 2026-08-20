# Week 6 - Day 4: Standardized API Architecture

## Core Concepts Implemented

### 1. Unified JSON Response Formatting

- **Concept:** Establishing a predictable API envelope to streamline client-side data parsing.
- **Implementation:** Wrapped all `res.json()` payloads within a standardized object structure. Success responses return `{ success: true, data: [...] }` (and occasionally `count`), while failure responses return `{ success: false, error: "..." }`. This eliminates frontend ambiguity when evaluating server responses.

### 2. HTTP Status Code Management

- **Concept:** Utilizing standard network protocol codes to indicate the specific outcome of an HTTP request.
- **Implementation:**
  - Explicitly chained `.status(200)` for successful data retrieval.
  - Triggered `.status(201)` to explicitly signify successful resource creation during POST operations.
  - Intercepted invalid payload structures with `.status(400)` (Bad Request).
  - Handled undefined resource queries with `.status(404)` (Not Found).

### 3. Early Return Pattern (Guard Clauses)

- **Concept:** Preventing server crashes and blocking execution of code if validation fails.
- **Implementation:** Utilized the `return res.status(...)` pattern during the `if (!gadget)` and `if (!name...)` checks. Using the `return` keyword immediately terminates the route function, ensuring the backend does not attempt to send multiple responses to a single request.
