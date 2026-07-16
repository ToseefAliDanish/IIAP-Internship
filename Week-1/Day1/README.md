# Day 1: HTML & CSS Basics

## Core Concepts Learned

### 1. HTML (HyperText Markup Language)
* **Purpose:** Provides the structural foundation of a webpage.
* **Tags & Elements:** Content is wrapped in tags (e.g., `<p>Text</p>`). The opening tag, content, and closing tag together form an HTML Element.
* **Boilerplate:** The mandatory structure of an HTML document, including `<!DOCTYPE html>`, `<html>`, `<head>` (for metadata and links), and `<body>` (for visible content).

### 2. CSS (Cascading Style Sheets)
* **Purpose:** Handles the visual presentation, layout, and design of the HTML structure.
* **Inline CSS:** Styles applied directly within an HTML tag using the `style` attribute (e.g., `<p style="color: red;">`). Useful for quick tests but not scalable.
* **External CSS:** Styles written in a separate `.css` file. This is the industry standard as it separates content from design and allows for styling multiple pages from a single file.

### 3. Linking Files
* External CSS is connected to an HTML file using the `<link>` element placed inside the `<head>` section:
    `<link rel="stylesheet" href="style.css">`

## Project
Built a basic webpage (`index.html`) utilizing standard boilerplate, headings, paragraphs, and lists, styled using both inline CSS and an external stylesheet (`style.css`).