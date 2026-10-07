# Week 11, Day 3: Server Actions & Zod Validation

## 🎯 Objective

Replace traditional API endpoints and complex client-side state management by utilizing Next.js Server Actions. Master secure form handling, strict server-side schema validation using Zod, and manual cache invalidation to instantly reflect database mutations in the UI.

## 📚 Core Concepts Covered

- **Server Actions (`"use server"`)**: Executing secure, backend-only asynchronous functions directly from frontend DOM events without constructing API routes.
- **Form Action Binding**: Passing server functions directly into the HTML `<form action={fn}>` attribute to natively handle POST data.
- **`useFormStatus`**: A React DOM hook used within Client Components to track the pending state of an active Server Action submission.
- **Zod Validation**: Implementing strict server-side schema parsing (`z.object()`, `safeParse()`) to sanitize incoming `FormData` and prevent malicious payload injections.
- **Cache Revalidation**: Utilizing `revalidatePath` to surgically purge cached route segments, forcing Next.js to re-render the Server Component with fresh database data.

## 💻 Mini-Project: Javascript-Free Issue Submission

A fully functional form architecture built across the server/client boundary. `actions.ts` securely parses incoming form data using Zod, artificially delays the response to demonstrate pending states, mutates a mock database, and triggers `revalidatePath`. The UI integrates a dedicated client-side `SubmitButton` to provide real-time user feedback while the Server Action executes in the background.

### Setup Instructions

1. Run `npm install zod`.
2. Create `app/actions.ts`.
3. Create the route `app/day3-actions/` containing `SubmitButton.tsx` and `page.tsx`.
4. Run `npm run dev` and navigate to `/day3-actions`. Submit the form to observe backend validation and instant UI cache revalidation.
