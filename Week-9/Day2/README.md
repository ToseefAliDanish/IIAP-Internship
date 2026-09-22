# Week 9, Day 2: Advanced TypeScript Data Modeling

## 🎯 Objective

Learn to design strict data blueprints in TypeScript to prevent runtime errors. Focus on locking down data shapes, combining types, and safely handling unpredictable variables before they crash the application.

## 📚 Core Concepts Covered

- **Interfaces vs Type Aliases**: Structuring objects vs renaming data.
- **Optional (`?`) & Readonly**: Making fields flexible or permanently locking them.
- **Union (`|`) & Intersection (`&`)**: Providing multiple type options or mashing blueprints together.
- **Literal Types & Enums**: Forcing exact values and creating official lists of constants.
- **Type Narrowing**: Using `typeof`, `in`, and Discriminated Unions to safely identify data on the fly.

## 💻 Mini-Project: IIAP Issue Tracker

A TypeScript execution script that models complex `SoftwareBug` and `HardwareFailure` objects using intersections and strict discriminators. The script uses type narrowing to safely process unpredictable incoming tickets without throwing compiler errors.

### Setup Instructions

1. Run `npm install -D typescript ts-node`
2. Save the project code in `index.ts`
3. Execute using `npx ts-node index.ts`
