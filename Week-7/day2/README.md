# Week 7 - Day 2: Next.js UI Routing & Middleware

## Core Concepts Implemented

### 1. File-Based UI Routing (`page.js`)

- **Concept:** Building multi-page frontend architectures without third-party router libraries.
- **Implementation:** Leveraged the Next.js App Router paradigm. Demonstrated that while `route.js` provisions backend JSON endpoints, `page.js` within the same folder hierarchy provisions React Server Components. Created `src/app/jobs/page.js` to establish the `/jobs` frontend view.

### 2. Single Page Application Navigation (`<Link>`)

- **Concept:** Maintaining application state and preventing hard DOM reloads during client navigation.
- **Implementation:** Replaced native HTML `<a>` tags with the `next/link` module. This enables Next.js to pre-fetch route data in the background and swap out React components instantly, ensuring a seamless, mobile-app-like user experience.

### 3. Edge Middleware Interception

- **Concept:** Executing server-side logic globally prior to a request resolving to its destination.
- **Implementation:**
  - Authored a global `middleware.js` file at the `src/` root.
  - Extracted the request trajectory via `request.nextUrl.pathname`.
  - Utilized `NextResponse.next()` to pass control down the application tree after logging execution.
  - Applied an export `config.matcher` array (`'/api/:path*'`) to strictly limit middleware execution to backend API pathways, optimizing server performance.
