
# My Materia

A modern, customizable CSS/SCSS framework inspired by **Material Design 3 (Material You)**.

My Materia provides tokens, layout utilities, component styles, and theming tools for building consistent, accessible, and responsive UIs.

---

## Key Features

- Fully themeable via SCSS tokens & CSS variables  
- Utility-based layout and grid system (Material breakpoints)  
- Prebuilt UI components (buttons, cards, forms, etc.)  
- Color system based on Material Design tonal palettes  
- Minimal setup, no JS dependencies required by default  
- Modular SCSS structure – import only what you need  

---

## Download & Setup

You can get started by cloning the full repository or using the pre-built minified CSS directly from GitHub Pages.

### Use the Minified CSS (Quick Start)

Include the pre-built, minified CSS directly from GitHub Pages:

```html
<link rel="stylesheet" href="https://hrncikla.github.io/CSS-Materia/css/materia.min.css" />
```

Basic HTML setup:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Materia</title>
  <link rel="stylesheet" href="https://hrncikla.github.io/CSS-Materia/css/materia.min.css" />
</head>
<body>
  <div class="container">
    <h1 class="display-large" style="color: var(--md-sys-color-primary);">My Materia</h1>
    <div class="card card--filled">
      <div class="card__header">
        <h2 class="card__header-title">Welcome to My Materia</h2>
        <p class="card__header-subtitle">Modern CSS framework based on Material Design 3</p>
      </div>
      <div class="card__content">
        <p>This is a test page to demonstrate the basic components and styles provided by the My Materia framework.</p>
      </div>
      <div class="card__actions">
        <button class="button button--filled">Get Started</button>
        <button class="button button--text">Contact Us</button>
      </div>
    </div>
  </div>
</body>
</html>
```

---

### Clone the Repository

Clone the full project for local development:

```bash
git clone https://github.com/hrncikla/CSS-Materia.git
```

### Directory Structure

```
CSS-Materia/
├── .storybook/      # Storybook configuration
├── build/           # Compiled and minified CSS/JS files
├── public/          # Static files for deployment
├── src/             # Source files (SCSS, JS, components)
├── .gitignore       # Git ignore rules
├── LICENSE          # License file
├── package.json     # Project dependencies and scripts
└── README.md        # Project overview and setup instructions
```

---

## Install Dependencies

After cloning, navigate into the project directory and install the required packages:

```bash
cd CSS-Materia
npm install
```

---

## Build & Storybook

Before starting Storybook, **you must** build your CSS. Use the following scripts from your `package.json`:

```json
"scripts": {
  "storybook": "npm run build:css && storybook dev -p 6006",
  "build-storybook": "storybook build",
  "build:css": "sass src/scss/main.scss build/css/materia.min.css --style compressed --no-source-map",
  "watch:css": "sass --watch src/scss:build/css"
}
```

### Important:
- **Build CSS first**: Run `npm run build:css` before starting Storybook.
- **Rebuild after changes**: Run `npm run build:css` again whenever you update your SCSS files to reflect changes in Storybook.

---

## Live Documentation (Storybook)

This project uses **Storybook** (with Vite) and full MDX documentation.

### Run Storybook locally:

```bash
npm run build:css && storybook dev -p 6006
```

Open [http://localhost:6006](http://localhost:6006) in your browser.  
Main documentation page:  
[http://localhost:6006/?path=/docs/my-materia--docs](http://localhost:6006/?path=/docs/my-materia--docs)

Published version:
https://hrncikla.github.io/MyMateria/?path=/docs/my-materia--docs

---

## Customize Tokens

To adapt Materia to your brand, edit the file `src/scss/tokens/user-tokens.scss`.  
It includes colors, typography, radius, spacing, etc.

---

## Inspired by Material Design 3

This framework references ideas and structure from:

- [Material Design 3 Guidelines](https://m3.material.io/)
- [Material Components GitHub](https://github.com/material-components/)
- [Material Symbols](https://fonts.google.com/icons)

---

## License

This project is licensed under the [MIT License](./LICENSE).  
Copyright © 2025 Klára Hrnčířová
