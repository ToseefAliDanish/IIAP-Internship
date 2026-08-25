# Week 7 - Day 3: Global Components & Error Handling

## Core Concepts Implemented

### 1. Global Component Architecture (`layout.js`)

- **Concept:** Sharing UI elements across the entire application tree without manual code duplication.
- **Implementation:** Extracted a declarative `<Navbar />` into a standalone `src/components/Navbar.jsx` file. Injected it into the Next.js App Router root wrapper (`src/app/layout.js`) immediately preceding the `{children}` prop, ensuring persistent global rendering across all nested routes.

### 2. Next.js Body Parsing (`request.json()`)

- **Concept:** Translating incoming HTTP POST data within the Next.js serverless architecture.
- **Implementation:** Bypassed the need for external middleware (like Express's `body-parser`) by utilizing the native Web API `Request` method. Executed `const body = await request.json()` to parse the incoming stream into a readable JavaScript object.

### 3. Asynchronous Error Handling (`try/catch`)

- **Concept:** Preventing fatal application crashes during unpredictable backend operations.
- **Implementation:** Wrapped the entirety of the `POST` handler logic inside a `try {}` block. If stream parsing or validation throws an unhandled exception, execution is immediately diverted to the `catch (error) {}` block. This guarantees the server remains alive and responds to the client with a predictable `500 Internal Server Error` payload.
