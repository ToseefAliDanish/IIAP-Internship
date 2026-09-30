# Week 10, Day 3: The Context API & Global State

## 🎯 Objective

Eliminate "prop drilling" by utilizing React's Context API. Learn to architect global state providers for foundational application data (Authentication and Theming) and securely consume them using custom hooks.

## 📚 Core Concepts Covered

- **Prop Drilling**: The anti-pattern of passing data through unnecessary intermediary components.
- **Context API**: React's native global data teleportation system, utilizing `createContext` and `useContext`.
- **Provider Pattern**: Wrapping the application root in `<Context.Provider>` components to broadcast data downwards.
- **Theme & Auth Patterns**: Industry-standard implementations for global visual settings and user session tracking.
- **Context vs Zustand**: Understanding that Context is ideal for low-frequency global changes (like Auth), while external libraries like Zustand are required for highly dynamic, high-frequency state to prevent full-app re-renders.

## 💻 Mini-Project: Global Portal Architecture

A simulated IIAP system dashboard utilizing two distinct global Contexts: `ThemeContext` and `AuthContext`. The nested `Navbar` and `Dashboard` components access global state completely independently via strictly typed custom hooks (`useTheme`, `useAuth`), demonstrating a fully decoupled architecture with zero prop drilling.

### Setup Instructions

1. Utilize the existing Vite React environment (`npm run dev`).
2. Replace the contents of `src/App.tsx` with the provided project code.
3. View at `http://localhost:5173`. Toggle the theme and login to verify global state broadcasting.
