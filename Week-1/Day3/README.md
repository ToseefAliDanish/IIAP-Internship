# Day 3: Lists, Tables & The Box Model

## Core Concepts Learned

### 1. Lists (`<ul>`, `<ol>`, `<li>`)
* **Unordered Lists (`<ul>`):** Used for non-sequential items (bullet points).
* **Ordered Lists (`<ol>`):** Used for sequential items (numbered).
* **List Items (`<li>`):** The individual elements contained within either list type.

### 2. Tables (`<table>`)
* **Purpose:** Structuring tabular data into rows and columns.
* **Structure:** Consists of Table Rows (`<tr>`), Table Headers (`<th>` for column titles), and Table Data cells (`<td>` for content).
* **Styling:** CSS `border-collapse: collapse;` is commonly used to clean up the default double-borders browsers apply to tables.

### 3. The CSS Box Model
Every element in HTML is a rectangular box governed by four layers:
1. **Content:** The actual nested text, image, or child element.
2. **Padding:** The internal space between the content and the border. Increases the overall size of the element's background area.
3. **Border:** The structural line surrounding the padding. Controlled via `border` (thickness, style, color) and rounded via `border-radius`.
4. **Margin:** The external space outside the border. Used to push elements away from one another.

## Project
Built a structured pricing table for a SaaS application. The project utilized `<table>` for layout, nested `<ul>` tags for feature lists, and heavily relied on the CSS Box Model to create internal breathing room (padding), distinct dividers (borders), and proper spacing between elements (margins).