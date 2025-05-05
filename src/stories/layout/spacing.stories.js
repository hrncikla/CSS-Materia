export default {
  title: 'Layout/Layout Spacing',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: [
            'This section describes spacing tokens and spacing utility classes.',
            '',
            '---',
            '',
            '## Spacing Tokens',
            '',
            '| SCSS Token | CSS Variable | Default Value | Usage |',
            '|:-----------|:-------------|:--------------|:------|',
            '| `$md-sys-space-none` | `--md-sys-space-none` | 0rem | No spacing |',
            '| `$md-sys-space-xsmall` | `--md-sys-space-xsmall` | 0.25rem | Tiny spacing |',
            '| `$md-sys-space-small` | `--md-sys-space-small` | 0.5rem | Small spacing |',
            '| `$md-sys-space-medium` | `--md-sys-space-medium` | 1rem | Default spacing |',
            '| `$md-sys-space-large` | `--md-sys-space-large` | 1.5rem | Large spacing |',
            '| `$md-sys-space-xlarge` | `--md-sys-space-xlarge` | 2rem | Extra large spacing |',
            '| `$md-sys-space-2xlarge` | `--md-sys-space-2xlarge` | 2.5rem | Huge spacing |',
            '| `$md-sys-space-3xlarge` | `--md-sys-space-3xlarge` | 3rem | Section spacing |',
            '| `$md-sys-space-4xlarge` | `--md-sys-space-4xlarge` | 3.5rem | Very large spacing |',
            '| `$md-sys-space-5xlarge` | `--md-sys-space-5xlarge` | 4rem | Maximum page spacing |',
            '',
            '> ℹ️ Depending on the project style, developers can either use:',
            '> - direct **CSS variables** (e.g., `var(--md-sys-space-medium)`),',
            '> - direct **SCSS tokens** (e.g., `$md-sys-space-medium`),',
            '> - or ready-made **utility classes** (e.g., `p-medium`, `mt-large`) described below.',
            '',
            '---',
            '',
            '## Padding & Margin Utility Classes',
            '',
            'Apply spacing to any direction:',
            '',
            '- `p-{size}`, `m-{size}` — all sides',
            '- `pt-{size}`, `pb-{size}`, `pl-{size}`, `pr-{size}`, `mt-{size}`, `mb-{size}`, etc. — top, bottom, left, right',
            '- `px-{size}`, `py-{size}`, `mx-{size}`, `my-{size}` — inline/block',
            '',
            '### Example Usage',
            '',
            '```html',
            '<div class="pt-medium pb-small px-large">',
            '  <p>Box with top/bottom and inline spacing</p>',
            '</div>',
            '',
            '<div class="m-5xlarge">',
            '  <p>Max margin example</p>',
            '</div>',
            '```',
            '',
            '---',
            '',
            '## Utility Class → Token Mapping',
            '',
            '> ℹ️ All spacing classes support all size variants `{size}` like `none`, `xsmall`, `small`, `medium`, `large`, `xlarge`, `2xlarge`, ..., `5xlarge`.',
            '>  - `px-{size}`, `mx-{size}` apply to **horizontal (inline) spacing** → left + right.',
            '>  - `py-{size}`, `my-{size}` apply to **vertical (block) spacing** → top + bottom.',
            '',
            '---',
            '',
            '### Padding classes',
            '',
            '| Class | Property | SCSS Token | Value |',
            '|:------|:---------|:-----------|:------|',
            '| `.p-none` | padding | `$md-sys-space-none` | 0rem |',
            '| `.p-xsmall` | padding | `$md-sys-space-xsmall` | 0.25rem |',
            '| `.p-small` | padding | `$md-sys-space-small` | 0.5rem |',
            '| `.p-medium` | padding | `$md-sys-space-medium` | 1rem |',
            '| `.p-large` | padding | `$md-sys-space-large` | 1.5rem |',
            '| `.p-xlarge` | padding | `$md-sys-space-xlarge` | 2rem |',
            '| `.p-2xlarge` | padding | `$md-sys-space-2xlarge` | 2.5rem |',
            '| `.p-3xlarge` | padding | `$md-sys-space-3xlarge` | 3rem |',
            '| `.p-4xlarge` | padding | `$md-sys-space-4xlarge` | 3.5rem |',
            '| `.p-5xlarge` | padding | `$md-sys-space-5xlarge` | 4rem |',
            '| `.pt-{size}` | padding-top | `$md-sys-space-{size}` | varies |',
            '| `.pb-{size}` | padding-bottom | `$md-sys-space-{size}` | varies |',
            '| `.pl-{size}` | padding-left | `$md-sys-space-{size}` | varies |',
            '| `.pr-{size}` | padding-right | `$md-sys-space-{size}` | varies |',
            '| `.px-{size}` | padding-inline (left + right) | `$md-sys-space-{size}` | varies |',
            '| `.py-{size}` | padding-block (top + bottom) | `$md-sys-space-{size}` | varies |',
            '',
            '---',
            '',
            '### Margin classes',
            '',
            '| Class | Property | SCSS Token | Value |',
            '|:------|:---------|:-----------|:------|',
            '| `.m-none` | margin | `$md-sys-space-none` | 0rem |',
            '| `.m-xsmall` | margin | `$md-sys-space-xsmall` | 0.25rem |',
            '| `.m-small` | margin | `$md-sys-space-small` | 0.5rem |',
            '| `.m-medium` | margin | `$md-sys-space-medium` | 1rem |',
            '| `.m-large` | margin | `$md-sys-space-large` | 1.5rem |',
            '| `.m-xlarge` | margin | `$md-sys-space-xlarge` | 2rem |',
            '| `.m-2xlarge` | margin | `$md-sys-space-2xlarge` | 2.5rem |',
            '| `.m-3xlarge` | margin | `$md-sys-space-3xlarge` | 3rem |',
            '| `.m-4xlarge` | margin | `$md-sys-space-4xlarge` | 3.5rem |',
            '| `.m-5xlarge` | margin | `$md-sys-space-5xlarge` | 4rem |',
            '| `.mt-{size}` | margin-top | `$md-sys-space-{size}` | varies |',
            '| `.mb-{size}` | margin-bottom | `$md-sys-space-{size}` | varies |',
            '| `.ml-{size}` | margin-left | `$md-sys-space-{size}` | varies |',
            '| `.mr-{size}` | margin-right | `$md-sys-space-{size}` | varies |',
            '| `.mx-{size}` | margin-inline (left + right) | `$md-sys-space-{size}` | varies |',
            '| `.my-{size}` | margin-block (top + bottom) | `$md-sys-space-{size}` | varies |',
          ].join('\n') 
      },
    },
  },
};

// ✅ Live Example with new 2xlarge style spacing + visual separation

// ✅ Live Example with fixed box size, centered content and correct margin/padding separation

// ✅ Spacing Examples — as table layout like in Shapes

export const SpacingExamples = () => {
  const container = document.createElement('div');
  container.style.padding = '2rem';
  container.style.fontFamily = 'sans-serif';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '2rem';

  const tokens = [
    { className: 'p-none', label: '0rem' },
    { className: 'p-xsmall', label: '0.25rem' },
    { className: 'p-small', label: '0.5rem' },
    { className: 'p-medium', label: '1rem' },
    { className: 'p-large', label: '1.5rem' },
    { className: 'p-xlarge', label: '2rem' },
  ];

  const table = document.createElement('table');
  table.style.width = '100%';
  table.style.borderCollapse = 'collapse';
  table.style.fontSize = '14px';

  const thead = document.createElement('thead');
  thead.innerHTML = `
    <tr style="background-color: #f0f0f0;">
      <th style="padding: 10px; border: 1px solid #ddd;">CSS Class</th>
      <th style="padding: 10px; border: 1px solid #ddd;">Property</th>
      <th style="padding: 10px; border: 1px solid #ddd;">SCSS Token</th>
      <th style="padding: 10px; border: 1px solid #ddd;">Default Value</th>
      <th style="padding: 10px; border: 1px solid #ddd;">Example</th>
    </tr>
  `;
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  tokens.forEach((token) => {
    const tr = document.createElement('tr');
    const size = token.className.split('-')[1];
    const cssVar = `--md-sys-space-${size}`;
    const scssToken = `$md-sys-space-${size}`;

    tr.innerHTML = `
      <td style="padding: 10px; border: 1px solid #ddd;"><code>.${token.className}</code></td>
      <td style="padding: 10px; border: 1px solid #ddd;">padding</td>
      <td style="padding: 10px; border: 1px solid #ddd;"><code>${scssToken}</code></td>
      <td style="padding: 10px; border: 1px solid #ddd;">${token.label}</td>
    `;

    const exampleTd = document.createElement('td');
    exampleTd.style.padding = '10px';
    exampleTd.style.border = '1px solid #ddd';

    const wrapper = document.createElement('div');
    wrapper.style.background = '#f4f4f4';
    wrapper.style.padding = '1rem';
    wrapper.style.display = 'flex';
    wrapper.style.alignItems = 'center';
    wrapper.style.justifyContent = 'center';
    wrapper.style.height = '180px';

    const outerBox = document.createElement('div');
    outerBox.className = token.className;
    outerBox.style.background = '#e8f5e9'; // zelené = padding prostor
    outerBox.style.border = '2px solid #388e3c';
    outerBox.style.width = '150px';
    outerBox.style.height = '100px';
    outerBox.style.display = 'flex';
    outerBox.style.alignItems = 'center';
    outerBox.style.justifyContent = 'center';
    outerBox.style.padding = token.label; // Reálná velikost paddingu

    const innerBox = document.createElement('div');
    innerBox.style.background = '#ffffff';
    innerBox.style.border = '2px dashed #2e7d32';
    innerBox.innerText = 'Content';
    innerBox.style.width = '100%';
    innerBox.style.height = '100%';
    innerBox.style.display = 'flex';
    innerBox.style.alignItems = 'center';
    innerBox.style.justifyContent = 'center';

    outerBox.appendChild(innerBox);
    wrapper.appendChild(outerBox);
    exampleTd.appendChild(wrapper);

    tr.appendChild(exampleTd);
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  container.appendChild(table);

  return container;
};


