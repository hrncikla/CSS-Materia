export default {
  title: "Foundations/Typography",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: [
          '',
          'This section defines the typography system used across the framework.', 
          '',
          'It provides a consistent set of **font sizes**, **line heights**, and **font weights**,',
          'available via SCSS tokens, CSS variables and utility classes.',
          'All styles are optimized for responsiveness, accessibility and visual harmony across all components and layouts.',
          '',
          '---',
          '',
          '### 🔹 Typography Tokens Overview',
          '',
          '| SCSS Token | CSS Variable | Font Size | Line Height | Font Weight | Usage |',
          '|:-----------|:-------------|:----------|:------------|:------------|:------|',
          '| `$md-sys-typography-display-large` | `--md-sys-typography-display-large` | 57px | 64px | 400 | For very large titles on landing pages |',
          '| `$md-sys-typography-display-medium` | `--md-sys-typography-display-medium` | 45px | 52px | 400 | Section main titles |',
          '| `$md-sys-typography-display-small` | `--md-sys-typography-display-small` | 36px | 44px | 400 | Smaller hero headings |',
          '| `$md-sys-typography-headline-large` | `--md-sys-typography-headline-large` | 32px | 40px | 400 | Big headings inside cards or sections |',
          '| `$md-sys-typography-headline-medium` | `--md-sys-typography-headline-medium` | 28px | 36px | 400 | Medium headlines |',
          '| `$md-sys-typography-headline-small` | `--md-sys-typography-headline-small` | 24px | 32px | 400 | Section titles or banners |',
          '| `$md-sys-typography-title-large` | `--md-sys-typography-title-large` | 22px | 28px | 500 | Dialog or modal headings |',
          '| `$md-sys-typography-title-medium` | `--md-sys-typography-title-medium` | 16px | 24px | 500 | Subtitles, forms, cards |',
          '| `$md-sys-typography-title-small` | `--md-sys-typography-title-small` | 14px | 20px | 500 | Labels for form sections |',
          '| `$md-sys-typography-body-large` | `--md-sys-typography-body-large` | 16px | 24px | 400 | Main paragraph text |',
          '| `$md-sys-typography-body-medium` | `--md-sys-typography-body-medium` | 14px | 20px | 400 | Subparagraphs, secondary text |',
          '| `$md-sys-typography-body-small` | `--md-sys-typography-body-small` | 12px | 16px | 400 | Small note text |',
          '| `$md-sys-typography-label-large` | `--md-sys-typography-label-large` | 14px | 20px | 500 | Button texts, prominent labels |',
          '| `$md-sys-typography-label-medium` | `--md-sys-typography-label-medium` | 12px | 16px | 500 | Inputs, checkboxes |',
          '| `$md-sys-typography-label-small` | `--md-sys-typography-label-small` | 11px | 16px | 500 | Small captions or helper texts |',
          '',
          '---',
          '',
          'Each SCSS typography token automatically generates CSS variables for dynamic and responsive usage.',
          '',
          '```css',
          ':root {',
          '  --md-sys-typography-display-large-font-size: 57px;',
          '  --md-sys-typography-display-large-line-height: 64px;',
          '  --md-sys-typography-display-large-font-weight: 400;',
          '  /* etc. */',
          '}',
          '```',
          '',
          '---',
          '',
          '### 🔹 Typography Classes',
          '',
          'You can apply predefined classes directly in HTML:',
          '',
          '- `.display-large`',
          '- `.headline-medium`',
          '- `.body-small`',
          '- `.label-large`',
          '',
          'Example:',
          '',
          '```html',
          '<h1 class="display-large">Main Title</h1>',
          '<p class="body-medium">This is normal paragraph text.</p>',
          '<button class="label-large">Button</button>',
          '```',
          '',
          '---',
          '',
          '### 🔹 Element Defaults',
          '',
          'By default, standard elements are automatically styled:',
          '',
          '- `h1` → `display-large`',
          '- `h2` → `display-medium`',
          '- `h3` → `display-small`',
          '- `h4` → `headline-large`',
          '- `h5` → `headline-medium`',
          '- `h6` → `headline-small`',
          '- `p` → `body-large`',
          '- `button` → `label-large`',
          '- `span.caption` → `label-small`',
          '',
          '---',
          '',
          '### Recommended Usage',
          '',
          '- **Display styles** are used for very large titles and landing pages.',
          '- **Headline styles** are ideal for main headings inside sections or cards.',
          '- **Title styles** fit for subtitles, modals, and small banners.',
          '- **Body styles** are used for general paragraph text.',
          '- **Label styles** are for buttons, form labels, and captions.',
          '',
          '---',
          '',
          '### Common Mistakes',
          '',
          '- Do **not** manually adjust font sizes unless absolutely necessary. Prefer using defined classes or the typography mixin.',
          '- Do **not** mix typography classes with random font-size overrides (it breaks consistency).',
          '- Always check accessibility (line height and font size should be large enough for readability).',
          '',
          '---',
          '',
          '### ℹ️ Usage Notes',
          '',
          '> The typography system guarantees accessibility, scalability and visual consistency across your application.',
          '> For custom variations, use the `typography` SCSS mixin or override variables locally.',
          '',
          '---',
          '',
          '### Quick Example',
          '',
          '```html',
          '<h1 class="display-large">Material Design Typography</h1>',
          '<p class="body-large">Example of standard paragraph styling using body-large token.</p>',
          '```'
        ].join('\n')
      }
    }
  }
}


export const TypographyOverview = () => {
  const styles = [
    { className: "display-large", size: "57px", lineHeight: "64px", weight: "400" },
    { className: "display-medium", size: "45px", lineHeight: "52px", weight: "400" },
    { className: "display-small", size: "36px", lineHeight: "44px", weight: "400" },
    { className: "headline-large", size: "32px", lineHeight: "40px", weight: "400" },
    { className: "headline-medium", size: "28px", lineHeight: "36px", weight: "400" },
    { className: "headline-small", size: "24px", lineHeight: "32px", weight: "400" },
    { className: "title-large", size: "22px", lineHeight: "28px", weight: "500" },
    { className: "title-medium", size: "16px", lineHeight: "24px", weight: "500" },
    { className: "title-small", size: "14px", lineHeight: "20px", weight: "500" },
    { className: "body-large", size: "16px", lineHeight: "24px", weight: "400" },
    { className: "body-medium", size: "14px", lineHeight: "20px", weight: "400" },
    { className: "body-small", size: "12px", lineHeight: "16px", weight: "400" },
    { className: "label-large", size: "14px", lineHeight: "20px", weight: "500" },
    { className: "label-medium", size: "12px", lineHeight: "16px", weight: "500" },
    { className: "label-small", size: "11px", lineHeight: "16px", weight: "500" },
  ];

  const wrapper = document.createElement("div");
  wrapper.style.padding = "2rem";
  wrapper.style.fontFamily = "sans-serif";

  const table = document.createElement("table");
  table.style.width = "100%";
  table.style.borderCollapse = "collapse";
  table.style.fontSize = "14px";

  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr style="background-color: #f0f0f0;">
      <th style="padding: 10px; border: 1px solid #ddd;">CSS Class</th>
      <th style="padding: 10px; border: 1px solid #ddd;">Font Size</th>
      <th style="padding: 10px; border: 1px solid #ddd;">Line Height</th>
      <th style="padding: 10px; border: 1px solid #ddd;">Font Weight</th>
      <th style="padding: 10px; border: 1px solid #ddd;">Example</th>
    </tr>
  `;
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  styles.forEach(({ className, size, lineHeight, weight }) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td style="padding: 10px; border: 1px solid #ddd;"><code>.${className}</code></td>
      <td style="padding: 10px; border: 1px solid #ddd;">${size}</td>
      <td style="padding: 10px; border: 1px solid #ddd;">${lineHeight}</td>
      <td style="padding: 10px; border: 1px solid #ddd;">${weight}</td>
    `;

    const exampleTd = document.createElement("td");
    exampleTd.style.padding = "10px";
    exampleTd.style.border = "1px solid #ddd";

    const example = document.createElement("div");
    example.className = className;
    example.innerText = `Example text`;

    exampleTd.appendChild(example);
    tr.appendChild(exampleTd);
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);


  
  wrapper.appendChild(table);

  return wrapper;
};
