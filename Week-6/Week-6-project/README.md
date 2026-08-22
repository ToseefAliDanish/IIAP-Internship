# Week 6 Master Project: PAA E-Services Flight Dashboard

## Architecture Overview

This application serves as the capstone for Week 6, demonstrating a fully functional Express.js REST API successfully connected to a frontend client. It utilizes the official design language of the Pakistan Airports Authority (PAA) to simulate a real-world, government-grade web portal.

### Core Architecture Achieved

#### 1. Express Server & Middleware

- **Node.js & Express:** Initialized a lightweight, robust backend environment.
- **JSON Parsing:** Utilized `express.json()` to intercept and parse incoming HTTP POST payloads.
- **Static Serving:** Implemented `express.static('public')` to serve the frontend UI directly from the backend server, eliminating the need for a separate frontend hosting environment during development.

#### 2. Advanced Routing & Parameters

- **Endpoint Engineering:** Designed clean API routes (`/api/flights`) for distinct data operations.
- **Query Parameters (`req.query`):** Captured URL queries (e.g., `?type=domestic`) to dynamically filter the flight database before sending data back to the client.
- **Route Parameters (`req.params`):** Extracted dynamic URL segments (`/api/flights/:id`) to identify and return specific, single flight records.

#### 3. Standardized API Responses

- **Consistent JSON Envelope:** Adhered strictly to professional JSON formatting (`{ success: boolean, count: number, data: payload }`).
- **HTTP Status Codes:**
  - `200 OK`: For successful data retrieval.
  - `201 Created`: For successful POST operations.
  - `400 Bad Request`: Triggered via Guard Clauses if the client sends incomplete POST data.
  - `404 Not Found`: Triggered if a requested flight ID does not exist in the database.

#### 4. Frontend API Consumption & Thematic UI

- **Client-Side Fetching:** Utilized the native browser `fetch()` API to request data from the local Express backend and map the resulting JSON to the DOM.
- **Dynamic Rendering:** Wrote conditional JavaScript logic to inject dynamic CSS classes (`status-green`, `status-red`) based on the live API data.
- **Government UI/UX:** Engineered a professional stylesheet utilizing the official PAA color palette (Pakistan Flag Green `#00563F`), structural navigation bars, and authoritative typography.

---

## How to Run the Application

1. Open your terminal and navigate to the project folder (`cosmic-coffee-api` / `paa-flight-api`).
2. Ensure dependencies are installed by running:
   ```bash
   npm install
   ```
