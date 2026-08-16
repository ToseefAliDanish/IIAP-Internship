# Week 5 Master Project: Enterprise Support Desk

## Architecture Overview

This application serves as the capstone for Week 5, demonstrating enterprise-grade form handling, data validation, and component architecture in React.

### Core Architecture Achieved

1. **Separation of Concerns:**
   - **UI Layer (`/components`):** Purely declarative components handling visual rendering and user interaction.
   - **Logic Layer (`/hooks`):** State management logic extracted into a reusable `useForm.js` hook.
   - **Utility Layer (`/utils`):** Framework-agnostic JavaScript validation functions (`validators.js`).

2. **Controlled Component State:**
   - Overrode default browser DOM inputs to utilize React State as the Single Source of Truth.
   - Managed multi-input forms (Text, Email, Textarea, Select) dynamically using ES6 computed properties (`[name]: value`).

3. **Robust Data Validation:**
   - Intercepted the form's `onSubmit` event, executing comprehensive data checks (Empty strings, minimum lengths, Regex formatting) before permitting state mutation.
   - Conditionally rendered UI error boundaries and localized feedback text based on dynamic error state mapping.

4. **Inverse Data Flow:**
   - Successfully established bi-directional communication across isolated files, mapping Parent state functions downward via props, and Lifting Child form data upward upon successful validation.
