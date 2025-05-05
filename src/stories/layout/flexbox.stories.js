export default {
    title: 'Layout/Flexbox',
    tags: ['autodocs'],
    parameters: {
      docs: {
        description: {
          component: [
            '',
            'This section describes flexbox-based utility classes for consistent and rapid layout building.',
            '',
            '---',
            '',
            '## Flexbox Utilities',
            '',
            '###  Basic Flex Display and Direction',
            '',
            '| Class | Property | Value |',
            '|:------|:---------|:------|',
            '| `.flex` | display | flex |',
            '| `.flex-row` | flex-direction | row |',
            '| `.flex-column` | flex-direction | column |',
            '| `.flex-wrap` | flex-wrap | wrap |',
            '',
            '### Main Alignment Utilities',
            '',
            '| Class | Property | Value |',
            '|:------|:---------|:------|',
            '| `.justify-start` | justify-content | flex-start |',
            '| `.justify-center` | justify-content | center |',
            '| `.justify-end` | justify-content | flex-end |',
            '| `.justify-between` | justify-content | space-between |',
            '| `.align-start` | align-items | flex-start |',
            '| `.align-center` | align-items | center |',
            '| `.align-end` | align-items | flex-end |',
            '',
            '### Self-Alignment Utilities (per item)',
            '',
            '| Class | Property | Value |',
            '|:------|:---------|:------|',
            '| `.self-start` | align-self | flex-start |',
            '| `.self-center` | align-self | center |',
            '| `.self-end` | align-self | flex-end |',
            '',
            '### Flex Growth and Shrink Utilities',
            '',
            '| Class | Property | Value |',
            '|:------|:---------|:------|',
            '| `.flex-grow` | flex-grow | 1 |',
            '| `.flex-shrink` | flex-shrink | 1 |',
            '| `.flex-basis-auto` | flex-basis | auto |',
            '',
            '### Flex Order Utilities',
            '',
            '| Class | Property | Value |',
            '|:------|:---------|:------|',
            '| `.order-0` | order | 0 |',
            '| `.order-1` | order | 1 |',
            '| `.order-2` | order | 2 |',
            '| `.order-3` | order | 3 |',
            '| `.order-4` | order | 4 |',
            '',
            '###  Flex Gap Utilities',
            '',
            '| Class | CSS Variable | SCSS Token | Value |',
            '|:------|:--------------|:-----------|:------|',
            '| `.gap-none` | `--md-sys-flex-gap-none` | `$md-sys-flex-gap-none` | 0rem |',
            '| `.gap-xsmall` | `--md-sys-flex-gap-xsmall` | `$md-sys-flex-gap-xsmall` | 0.25rem |',
            '| `.gap-small` | `--md-sys-flex-gap-small` | `$md-sys-flex-gap-small` | 0.5rem |',
            '| `.gap-medium` | `--md-sys-flex-gap-medium` | `$md-sys-flex-gap-medium` | 1rem |',
            '| `.gap-large` | `--md-sys-flex-gap-large` | `$md-sys-flex-gap-large` | 1.5rem |',
            '| `.gap-xlarge` | `--md-sys-flex-gap-xlarge` | `$md-sys-flex-gap-xlarge` | 2rem |',
            '| `.gap-2xlarge` | `--md-sys-flex-gap-2xlarge` | `$md-sys-flex-gap-2xlarge` | 2.5rem |',
            '| `.gap-3xlarge` | `--md-sys-flex-gap-3xlarge` | `$md-sys-flex-gap-3xlarge` | 3rem |',
            '| `.gap-4xlarge` | `--md-sys-flex-gap-4xlarge` | `$md-sys-flex-gap-4xlarge` | 3.5rem |',
            '| `.gap-5xlarge` | `--md-sys-flex-gap-5xlarge` | `$md-sys-flex-gap-5xlarge` | 4rem |',
            '| `.gap-default` | `--md-sys-flex-gap-small` | `$md-sys-flex-gap-small` | 0.5rem (default) |',
            '',
            '---',
            '',
            '## ℹ️ Usage Notes',
            '',
            '> Flex utilities help you build layouts without writing custom CSS.',
            '> It is recommended to combine flex utilities with **spacing classes** (`p-medium`, `m-large`) to achieve consistent padding and margins across layouts.',
            '',
            '> Always use flex gap utilities (`gap-small`, `gap-large`) rather than manual margin between flex items for better consistency and responsiveness.',
            '',
            '---',
            '',
            '## Example Usage',
            '',
            '```html',
            '<div class="flex flex-wrap gap-medium justify-center align-center">',
            '  <div>Item 1</div>',
            '  <div>Item 2</div>',
            '  <div>Item 3</div>',
            '</div>',
            '```'
          ].join('\n')
        }
      }
    }
  }
  
  export const FlexboxExamples = () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.fontFamily = 'sans-serif';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '2rem';
  
    const examples = [
      { title: 'Flex Row + Center', classes: ['flex', 'flex-row', 'justify-center', 'align-center'] },
      { title: 'Flex Column + Center', classes: ['flex', 'flex-column', 'justify-center', 'align-center'] },
      { title: 'Flex Row + Space Between', classes: ['flex', 'flex-row', 'justify-between', 'align-center'] },
      { title: 'Flex Wrap + Gap Medium', classes: ['flex', 'flex-wrap', 'gap-medium', 'justify-center'] },
    ];
  
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    table.style.fontSize = '14px';
    table.style.tableLayout = 'fixed'; 
  
    const thead = document.createElement('thead');
    thead.innerHTML = `
      <tr style="background-color: #f0f0f0;">
        <th style="width: 25%; text-align: left; padding: 10px; border: 1px solid #ddd;">Description</th>
        <th style="width: 25%; text-align: left; padding: 10px; border: 1px solid #ddd;">Applied Classes</th>
        <th style="width: 50%; text-align: left; padding: 10px; border: 1px solid #ddd;">Example</th>
      </tr>
    `;
    table.appendChild(thead);
  
    const tbody = document.createElement('tbody');
  
    examples.forEach((example) => {
      const tr = document.createElement('tr');
  
      tr.innerHTML = `
        <td style="padding: 10px; border: 1px solid #ddd; vertical-align: top;">${example.title}</td>
        <td style="padding: 10px; border: 1px solid #ddd; vertical-align: top;">
          ${example.classes.map(c => `<div>.<code>${c}</code></div>`).join('')}
        </td>
      `;
  
      const exampleTd = document.createElement('td');
      exampleTd.style.padding = '10px';
      exampleTd.style.border = '1px solid #ddd';
      exampleTd.style.verticalAlign = 'top';
  
      const wrapper = document.createElement('div');
      wrapper.className = example.classes.join(' ');
      wrapper.style.background = '#e8f5e9'; // 💚 světle zelená (#e8f5e9)
      wrapper.style.padding = '1rem';
      wrapper.style.minHeight = '150px';
      wrapper.style.display = 'flex';
      wrapper.style.flexWrap = 'wrap';
      wrapper.style.gap = '1rem';
      wrapper.style.alignItems = 'center';
      wrapper.style.justifyContent = 'center';
      wrapper.style.border = '2px dashed #66bb6a'; // lehce tmavší zelený rámeček
  
      ['Item 1', 'Item 2', 'Item 3'].forEach((text) => {
        const item = document.createElement('div');
        item.style.background = '#90caf9'; 
        item.style.padding = '0.5rem 1rem';
        item.style.borderRadius = '6px';
        item.style.fontWeight = 'bold';
        item.style.textAlign = 'center';
        item.style.minWidth = '80px';
        item.innerText = text;
        wrapper.appendChild(item);
      });
  
      exampleTd.appendChild(wrapper);
      tr.appendChild(exampleTd);
      tbody.appendChild(tr);
    });
  
    table.appendChild(tbody);
    container.appendChild(table);
  
    return container;
  };
  
  