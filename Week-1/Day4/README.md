# Day 4: Forms & Flexbox

## Core Concepts Learned

### 1. HTML Forms
* **Purpose:** To collect user input and transmit it to a server or process it via JavaScript.
* **Key Elements:**
  * `<form>`: The wrapper element.
  * `<input>`: The primary data collection element. The `type` attribute changes its behavior:
    * `type="text"`: Standard text field.
    * `type="email"`: Validates for an email format.
    * `type="radio"`: Allows selection of only one option in a group.
    * `type="checkbox"`: Allows multiple boolean (true/false) selections.
  * `<select>` & `<option>`: Used together to create dropdown menus.
  * `<button type="submit">`: Submits the form data.

### 2. CSS Flexbox (Flexible Box Layout)
* **Purpose:** A powerful, one-dimensional layout model used to align and distribute space among items in a container.
* **Initialization:** Applied to a parent container using `display: flex;`.
* **Key Properties:**
  * `justify-content`: Aligns items along the main axis (e.g., left-to-right). Common values: `flex-start`, `center`, `space-between`, `space-evenly`.
  * `align-items`: Aligns items along the cross axis (e.g., top-to-bottom). Common values: `flex-start`, `center`, `stretch`.
  * `flex-direction`: Changes the axis (e.g., `column` stacks items vertically instead of the default horizontal row).

## Project
Built a modern interface featuring a Flexbox-powered navigation bar (`justify-content: space-between` to separate the logo and links) and a centralized, responsive contact form utilizing various input types, labels, and dropdowns. Flexbox was also utilized to stack form labels above their inputs cleanly.