# Week 6 - Day 2: Routes & URL Parameters

## Core Concepts Implemented

### 1. API Routing Architecture

- **Concept:** Designing distinct URL endpoints (`/api/employees`) to serve specific data resources to client applications.
- **Implementation:** Utilized `app.get()` to establish structural pathways for incoming HTTP requests, transitioning from serving plain text to returning structured data objects via `res.json()`.

### 2. Query Parameters (`req.query`)

- **Concept:** Processing optional filtering parameters appended to the end of a URL route.
- **Implementation:** Intercepted URLs structured like `?department=Engineering`. Captured the value utilizing `req.query.department` and applied an ES6 `.filter()` to dynamically alter the JSON payload before transmitting the response back to the client.

### 3. Route Parameters (`req.params`)

- **Concept:** Utilizing dynamic URL segments to identify and retrieve exact, single resources.
- **Implementation:** Engineered a dynamic route pattern (`/api/employees/:id`). Extracted the variable from `req.params.id`, cast the string to a Number, and utilized `.find()` to isolate the specific object in the database array.

### 4. Status Code Error Handling

- **Concept:** Communicating operational failures to the client via standard HTTP status codes.
- **Implementation:** Added conditional validation to the Route Parameter logic. If `.find()` returns undefined, the server executes `res.status(404)` chained with a JSON error payload, properly indicating a "Not Found" state.
