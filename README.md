# My Materia

A modern, customizable CSS/SCSS framework inspired by **Material Design 3 (Material You)**.

My Materia provides tokens, layout utilities, component styles and theming tools for building consistent, accessible, and responsive UIs.

---

## Key Features

- Fully themeable via SCSS tokens & CSS variables  
- Utility-based layout and grid system (Material breakpoints)  
- Prebuilt UI components (buttons, cards, forms, etc.)  
- Color system based on Material Design tonal palettes  
- Minimal setup, no JS dependencies required by default  
- Modular SCSS structure – import only what you need  

---

## Live Documentation (Storybook)

This project uses **Storybook** (with Vite) and full MDX documentation.

### ▶️ Run Storybook locally:

```bash
npm install
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) in your browser.  
Main documentation page:  
[http://localhost:6006/?path=/docs/my-materia--docs](http://localhost:6006/?path=/docs/my-materia--docs)

---

## Project Structure

### `.storybook/`
- `main.js` – Storybook config: story sources, addons, and framework (`html + Vite`)
- `manager.ts` – Custom UI theme for Storybook (logo, colors, links)
- `preview.js` – Global preview config: CSS imports, control matchers
- `preview-head.html` – Loads Material Design fonts & icons (Roboto, Material Symbols)

### `src/scss/`
- `tokens/` – System and user-defined SCSS tokens (color, spacing, typography)
- `mixins/` – SCSS mixins for reusable logic (e.g. generate palettes, typography)
- `layout/` – Grid system and spacing utilities
- `components/` – Styles for UI components like buttons, cards, etc.
- `base/` – Reset, typography, default element styles
- `main.scss` – Entry point for compiling the full framework

---

## Fonts & Icons

- Font: [Roboto (Google Fonts)](https://fonts.google.com/specimen/Roboto)  
- Icons: [Material Symbols](https://fonts.google.com/icons)  
→ Both are loaded in `preview-head.html`.

---

## Inspired by Material Design 3

This framework references ideas and structure from:

- [Material Design 3 Guidelines](https://m3.material.io/)
- [Material Components GitHub](https://github.com/material-components/)
- [Material Symbols](https://fonts.google.com/icons)

---

## Build Output

Compiled CSS lives in:

```
/build/css/main.css
```

You can include it via:

```html
<link rel="stylesheet" href="/build/css/main.css" />
```

---

## Technical Stack

- SCSS Modules – Written in modular partials with clear separation of concerns
- CSS Variables – Auto-generated from SCSS tokens for runtime theming
- Storybook – Used for both documentation and interactive component testing
- Vite – Lightning-fast bundler for preview and dev server
- MDX – Used for writing documentation pages

## License

This project is licensed under the [MIT License](./LICENSE).  
Copyright © 2025 Klára Hrnčířová


