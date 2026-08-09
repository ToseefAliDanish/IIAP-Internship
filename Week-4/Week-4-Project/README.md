# Week 4 Master Project: React Task Dashboard

## Architecture Overview

This application serves as the capstone for Week 4, synthesizing core React concepts into a professional, component-based architecture.

### Concepts Demonstrated

1. **Component Composition:** The UI is modularized into three distinct files (`App.jsx`, `TaskForm.jsx`, `TaskCard.jsx`), establishing a clean Parent-Child hierarchy.
2. **State Management (`useState`):** \* **Global Data:** `App.jsx` handles the master array of objects and the active filter state.
   - **Local Data:** `TaskForm.jsx` handles its own controlled input states before lifting data up.
3. **Prop Drilling & Inverse Data Flow:** The Parent passes structural data down to the children, while also passing executable functions (`onToggle`, `onDelete`, `onAddTask`) down as props, allowing children to trigger state mutations safely.
4. **Declarative Rendering & Keys:** The UI is generated strictly via `.map()`, with React's Virtual DOM optimized using unique database-style IDs as `key` props.
5. **Conditional UI Mapping:** \* Leveraged the Logical AND (`&&`) for "URGENT" priority badges.
   - Leveraged the Ternary Operator (`? :`) for dynamic CSS class injections (strikethroughs, opacity) and button text toggling based on completion status.
6. **Derived State Filtering:** Replaced dual-state management with on-the-fly `.filter()` computation, ensuring UI filters ("All", "Pending", "Completed") operate with 100% accuracy without mutating the core array.
