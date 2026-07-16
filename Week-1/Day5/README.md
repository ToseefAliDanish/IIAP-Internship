# Day 5: Building a Static Page

## Core Concepts Learned

### 1. Static Web Pages
* **Definition:** A web page delivered to the user's browser exactly as stored. It relies entirely on client-side code (HTML/CSS) and does not require server-side rendering or a database.
* **Use Cases:** Ideal for personal portfolios, landing pages, documentation, and read-only content.

### 2. Semantic HTML
* **Purpose:** Replaces generic `<div>` tags with meaningful tags to improve code readability, accessibility (for screen readers), and Search Engine Optimization (SEO).
* **Key Elements Used:**
  * `<header>`: Contains the introductory content or navigation links.
  * `<nav>`: Specifically designates a section of navigation links.
  * `<main>`: Wraps the dominant content of the document.
  * `<section>`: Defines a thematic grouping of content (e.g., an "About" or "Projects" area).
  * `<footer>`: Defines the footer of a document or section.

### 3. Layout Integration
* **Flexbox Grids:** Utilized `display: flex;` combined with the `gap` property to create responsive, side-by-side card layouts without relying on complex floats or absolute positioning.
* **The `flex: 1;` Property:** Applied to child elements within a flex container to ensure they grow and shrink equally, creating symmetrical grid columns.

## Project
Designed and built a complete, single-page static portfolio site. The project integrates custom Google Fonts (`Inter`), semantic HTML structuring, a sticky-style Flexbox navigation bar, and a responsive "Projects" section using flex-based card UI design.