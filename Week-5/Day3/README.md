# Week 5 - Day 3: Form Validation & Error State

## Core Concepts Implemented

### 1. Dedicated Error State Management

- **Concept:** Isolating validation feedback into its own state object, independent of the primary form data.
- **Implementation:** Introduced `const [errors, setErrors] = useState({})`. This allows the application to track multiple field errors simultaneously (e.g., `{ title: "Required", email: "Invalid format" }`) and trigger targeted re-renders without affecting the user's typed input.

### 2. Custom Submission Validation

- **Concept:** Intercepting the submit cycle to evaluate data integrity before allowing state mutations to propagate upward.
- **Implementation:** \* Added the `noValidate` attribute to the HTML `<form>` to suppress generic browser tooltips.
  - Authored a `validateForm()` routine that executes prior to `onAddTicket`. It utilizes `.trim()` for empty-field checking and Regular Expressions (`/\S+@\S+\.\S+/`) for email pattern validation, returning a boolean to halt or proceed with submission.

### 3. Conditional Error UI

- **Concept:** Dynamically rendering UI elements strictly when validation errors are present.
- **Implementation:** \* Applied conditional CSS class injection (`className={errors.title ? "input-error" : ""}`) to alter input borders.
  - Utilized the Logical AND operator (`{errors.title && <p>...}</p>}`) to render animated, localized error messages directly beneath the offending input fields.
