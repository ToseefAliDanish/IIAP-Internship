# Day 2: Links, Images & Styling Fundamentals

## Core Concepts Learned

### 1. Anchor Tags & Links (`<a>`)
* **Purpose:** Creates clickable links to navigate between pages or websites.
* **Attributes:** Requires the `href` attribute to define the destination URL. Using `target="_blank"` opens the link in a new browser tab.
* **Types:** Absolute links go to external websites (e.g., `https://google.com`), while relative links point to local project files (e.g., `about.html`).

### 2. Images & Optimization (`<img>`)
* **Purpose:** Embeds images into the document. It is a self-closing tag.
* **Attributes:** Requires `src` (source path/URL) and `alt` (alternative text).
* **Best Practices:** `alt` text is critical for accessibility (screen readers) and SEO. Images should be compressed/optimized before deployment to ensure fast page load times.

### 3. CSS Color Formats
* **Hex Codes:** A 6-character alphanumeric code starting with `#` (e.g., `#FFFFFF` for white). Standard in design tools.
* **RGB:** Defines Red, Green, and Blue values from 0-255 (e.g., `rgb(0, 0, 0)` for black). Can include an Alpha channel for opacity (RGBA).
* **HSL:** Defines Hue (0-360), Saturation (0-100%), and Lightness (0-100%). Intuitive for creating color palettes.

### 4. Typography & Web Fonts
* **`font-family`:** The CSS property used to change fonts.
* **Web Fonts:** Custom fonts can be imported from external services like Google Fonts using `<link>` tags in the HTML `<head>`, breaking the reliance on standard system fonts.

## Project
Built a styled "Tech Article" page utilizing imported Google Fonts, a responsive placeholder image with alt text, an external link, and a CSS stylesheet demonstrating Hex, RGB, and HSL color formats in practice.