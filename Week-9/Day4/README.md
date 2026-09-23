# Week 9, Day 4: Full-Stack TypeScript (React & Express)

## 🎯 Objective

Bridge the gap between frontend and backend using TypeScript. Learn how to explicitly type React components, state, DOM events, and Express API routes, while utilizing a shared data model to keep the entire stack synchronized.

## 📚 Core Concepts Covered

- **Typing React Props & Children**: Creating interfaces for component arguments and using `React.ReactNode` to render nested elements.
- **Typing Hooks**: Passing Generics to `useState<T>` for complex state, and `useRef<T>` for specific HTML DOM elements.
- **Typing DOM Events**: Securing user interactions using `React.ChangeEvent` (inputs) and `React.FormEvent` (forms).
- **Typing Express routes**: Utilizing Generics in Express `Request` and `Response` objects to strictly validate incoming payloads and outgoing data.
- **Shared Types**: The architectural standard of centralizing data blueprints so the frontend interface and backend database models never fall out of sync.

## 💻 Mini-Project: Full-Stack Ticket Manager Simulation

A unified `.tsx` file that models a modern monorepo architecture. It contains a shared `IIAPTicket` interface that dictates the structure of both a simulated Express POST route and a fully-typed React form component.

### Setup Instructions

1. Initialize project: `npm init -y`
2. Install dependencies: `npm i react express`
3. Install dev types: `npm i -D typescript tsx @types/react @types/express`
4. Save the project code in `index.tsx`
5. Execute using `npx tsx index.tsx` to verify zero type-compilation errors.
