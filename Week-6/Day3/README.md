# Week 6 - Day 3: POST Requests & NPM Management

## Core Concepts Implemented

### 1. Package Management (`package.json` & `npm scripts`)

- **Concept:** Managing project dependencies and workflow automation.
- **Implementation:** Installed `nodemon` as a development dependency (`--save-dev`). Engineered custom NPM scripts (`npm run dev`) within the `package.json` manifest to initialize a hot-reloading development environment, dramatically improving workflow efficiency.

### 2. Global Middleware (`express.json()`)

- **Concept:** Intercepting and parsing incoming HTTP network traffic before it reaches the routing logic.
- **Implementation:** Mounted `app.use(express.json())` at the top of the application tree. This essential middleware translates incoming raw JSON payloads from the client into native JavaScript objects attached to the `req.body` property.

### 3. HTTP POST Architecture

- **Concept:** Building endpoints designed exclusively for data creation and insertion.
- **Implementation:**
  - Authored an `app.post('/api/employees')` endpoint.
  - Executed server-side validation to ensure the client provided the required payload properties (`name`, `department`, `role`).
  - Pushed the constructed object into the state array and returned an HTTP `201 Created` status code, strictly adhering to RESTful API standards.
