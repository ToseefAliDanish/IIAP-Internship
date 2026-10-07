# Week 11, Day 5: Full-Stack App Router Capstone

## 🎯 Objective

Synthesize all Next.js 16.4 App Router concepts learned throughout Week 11 into a unified, full-stack application. The **IIAP Task Manager** demonstrates a complete CRUD (Create, Read, Update, Delete) lifecycle utilizing server-first architecture, strict typing, and perimeter security.

## 📚 Concepts Integrated

This capstone project combines the following daily milestones:

- **Day 1 (Advanced Routing):**
  - Implemented Dynamic Routing (`/tasks/[id]`) for individualized task editing.
  - Configured custom `not-found.tsx` error boundaries to handle invalid route parameters gracefully.
- **Day 2 (Rendering & Streaming):**
  - Built predominantly with **Server Components** to keep the browser bundle lightweight and secure.
  - Integrated `loading.tsx` to utilize React Suspense for instantly streamed UI skeletons during artificial network delays.
  - Dropped strategic `"use client"` boundaries only where strictly necessary (e.g., `SubmitBtn.tsx` for `useFormStatus`).
- **Day 3 (Mutations & Validation):**
  - Replaced traditional React state forms with **Server Actions** (`actions.ts`).
  - Enforced strict backend payload validation using the **Zod** schema library before mutating the mock database.
  - Triggered instant UI synchronization post-mutation using `revalidatePath` and `redirect`.
- **Day 4 (Security & APIs):**
  - Secured the application boundary using Next.js 16.4 Edge Middleware (`proxy.ts`).
  - Generated standard REST endpoints via Route Handlers (`app/api/auth/route.ts`) to issue HTTP-only authentication cookies.
  - Differentiated between isolated backend secrets (`SECRET_SYSTEM_KEY`) and public browser variables (`NEXT_PUBLIC_APP_NAME`) using `.env.local`.

## 🗂️ Project Architecture

```text
week-11/day5/
├── .env.local                  # Environment variables
├── proxy.ts                    # Edge security middleware
├── app/
│   ├── db.ts                   # Mock server-side database
│   ├── actions.ts              # Zod validation & Server Actions
│   ├── page.tsx                # Public login portal
│   ├── api/auth/route.ts       # Cookie generation API
│   └── tasks/
│       ├── page.tsx            # Task list & creation form
│       ├── loading.tsx         # Streaming skeleton UI
│       ├── SubmitBtn.tsx       # Client component for loading states
│       └── [id]/
│           ├── page.tsx        # Dynamic task editor
│           └── not-found.tsx   # 404 handler for invalid tasks
```
