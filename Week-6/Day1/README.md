# Week 6 - Day 1: Node.js & Express.js Foundation

## Core Concepts Implemented

### 1. The Client-Server Architecture

- **Concept:** Separating application UI (Frontend) from data processing and routing (Backend).
- **Implementation:** Transitioned from client-side React development to server-side logic, establishing the foundational mental model of Requests (`req`) and Responses (`res`).

### 2. Node.js Environment Initialization

- **Concept:** Executing JavaScript outside of a browser context.
- **Implementation:** Initialized a blank Node environment using `npm init -y` to generate a `package.json` manifest, establishing a standalone backend project structure.

### 3. Express.js Server Instantiation

- **Concept:** Utilizing a web framework to abstract complex native Node.js HTTP routing.
- **Implementation:**
  - Imported the `express` module using CommonJS (`require`).
  - Bound the application instance to port `3000` via `app.listen()`.
  - Engineered a foundational HTTP GET route (`app.get('/')`) capable of receiving network requests from a web browser and returning a plain-text payload via `res.send()`.
