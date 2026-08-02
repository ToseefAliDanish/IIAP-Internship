# Smart Expense Tracker 🚀

## Overview

A fully responsive, client-side web application designed to track, calculate, and categorize financial expenses. This project was engineered entirely as a solo endeavor to showcase modern ES6 JavaScript architecture, strict semantic HTML, and responsive CSS design.

## Technical Architecture

- **State Management:** Utilizes a centralized array of objects to maintain application state, ensuring a single source of truth for all UI renders and calculations.
- **Non-Mutating Logic:** Employs ES6 Spread (`...`) and Rest operators alongside Destructuring to process data without permanently altering the original state arrays, establishing a React-ready foundation.
- **Functional Rendering:** Replaced traditional iterative loops with declarative array methods (`.map()`, `.filter()`, `.forEach()`) to handle DOM generation and mathematical aggregation.
- **Responsive Layout:** Built with a CSS Flexbox grid system, augmented by `@media` queries to ensure seamless layout reflowing across desktop and mobile viewports.

## Core Features

- **Real-Time Data Handling:** Instant form validation and UI updates upon submission.
- **Dynamic DOM Injection:** Safe and efficient HTML rendering utilizing ES6 Template Literals.
- **Instant State Filtering:** Category filter buttons that instantly re-render specific data subsets without triggering page reloads.
- **Automated Financial Math:** Live currency formatting and total sum calculations that react strictly to the current data state.

## Installation & Setup

1. Clone or download the project files to your local machine.
2. Open the project folder in your preferred code editor.
3. Launch `index.html` using a local development server (e.g., Live Server) to view and interact with the application.

## Author

**Toseef Ali Danish** _Solo Engineering Project_
