
export default {
    title: 'Layout/Breakpoints',
    tags: ['autodocs'],
    parameters: {
      docs: {
        description: {
          component: [
            '',
            'This section describes the responsive breakpoint system used in the layout framework.',
            '',
            '---',
            '',
            '## Standard Material Design 3 Breakpoints',
            '',
            '| SCSS Token | CSS Variable | Default Value | Description |',
            '|:-----------|:-------------|:--------------|:------------|',
            '| `$md-sys-breakpoint-compact` | `--md-sys-breakpoint-compact` | 0px | Compact screens (phones, very small devices) |',
            '| `$md-sys-breakpoint-medium` | `--md-sys-breakpoint-medium` | 600px | Medium screens (small tablets, large phones) |',
            '| `$md-sys-breakpoint-large` | `--md-sys-breakpoint-large` | 840px | Large screens (tablets, small desktops) |',
            '',
            '---',
            '',
            '## Extended Breakpoints (Custom)',
            '',
            '| SCSS Token | CSS Variable | Default Value | Description |',
            '|:-----------|:-------------|:--------------|:------------|',
            '| `$md-sys-breakpoint-extended-md` | `--md-sys-breakpoint-extended-md` | 1240px | Medium desktop width |',
            '| `$md-sys-breakpoint-extended-lg` | `--md-sys-breakpoint-extended-lg` | 1440px | Large desktop width |',
            '| `$md-sys-breakpoint-extended-xl` | `--md-sys-breakpoint-extended-xl` | 1600px | Extra-large desktop |',
            '| `$md-sys-breakpoint-extended-2xlarge` | `--md-sys-breakpoint-extended-2xlarge` | 1920px | Ultra-wide monitors (4K) |',
            '',
            '---',
            '',
            '## ℹ️ Usage Notes',
            '',
            '>  Breakpoints are mainly intended for **advanced layout customization** (custom components, non-standard grids, etc.).',
            '> ',
            '> In most cases, you should rely on built-in utility classes like **Container**, **Grid**, and **Flex** that adapt automatically.',
            '> ',
            '> Manual use of breakpoints should only be for **specific edge cases** where you need direct control over responsiveness.',
            '',
            '---',
            '',
            '## Example: SCSS with Breakpoints',
            '',
            '```css',
            '@media (min-width: $md-sys-breakpoint-medium) {',
            '  .custom-component {',
            '    padding: 2rem;',
            '  }',
            '}',
            '```',
            
            '',
            '## Example: CSS with Breakpoints (CSS Variables)',
            '',
            '```css',
            '@media (min-width: var(--md-sys-breakpoint-medium)) {',
            '  .custom-component {',
            '    padding: 2rem;',
            '  }',
            '}',
            '```',
            '',
          ].join('\n')
        }
      }
    }
  };
  
// ✅ Export for Storybook - dynamic live preview of active breakpoint

// ✅ Export for Storybook - Breakpoints responsive overview (unified style)

export const BreakpointsOverview = () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.fontFamily = 'sans-serif';
    container.style.background = '#f4f4f4';
    container.style.border = '1px dashed #ccc';
    container.style.textAlign = 'center';
    container.style.minHeight = '200px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.justifyContent = 'center';
    container.style.gap = '1rem';
  
    const title = document.createElement('div');
    title.innerText = 'Current Breakpoint';
    title.style.fontSize = '1.2rem';  // ✅ Menší nadpis, ladí s ostatními
    title.style.fontWeight = '600';
    title.style.margin = '0';
    title.style.color = '#333';
  
    const info = document.createElement('div');
    info.style.fontSize = '1rem';
    info.style.fontWeight = 'bold';
    info.style.padding = '0.75rem 1rem';
    info.style.background = '#ffffff';
    info.style.border = '2px solid #1976d2';
    info.style.borderRadius = '6px';
    info.style.display = 'inline-block';
    info.style.minWidth = '220px';
  
    const widthInfo = document.createElement('div');
    widthInfo.style.fontSize = '0.9rem';
    widthInfo.style.color = '#555';
  
    const description = document.createElement('p');
    description.style.fontSize = '0.85rem';
    description.style.color = '#666';
    description.style.maxWidth = '600px';
    description.style.margin = '0 auto';
    description.innerText = 'Resize the window to see which responsive breakpoint is active. Breakpoints are automatically used in Container, Grid, and Flex utilities.';
  
    container.appendChild(title);
    container.appendChild(info);
    container.appendChild(widthInfo);
    container.appendChild(description);
  
    const updateBreakpoint = () => {
      const width = window.innerWidth;
  
      let label = '';
      if (width < 600) {
        label = 'Compact (0px – 599px)';
      } else if (width < 840) {
        label = 'Medium (600px – 839px)';
      } else if (width < 1240) {
        label = 'Large (840px – 1239px)';
      } else if (width < 1440) {
        label = 'Extended-MD (1240px – 1439px)';
      } else if (width < 1600) {
        label = 'Extended-LG (1440px – 1599px)';
      } else if (width < 1920) {
        label = 'Extended-XL (1600px – 1919px)';
      } else {
        label = 'Extended-2xlarge (1920px and up)';
      }
  
      info.innerText = `${label}`;
      widthInfo.innerText = `Current width: ${width}px`;
    };
  
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
  
    return container;
  };
  
  
  /*export default {
    title: 'Layout/Breakpoints',
    tags: ['autodocs'],
    parameters: {
      docs: {
        description: {
          component: [
            '',
            'This documentation describes the responsive breakpoints system used in the layout framework.',
            '',
            '---',
            '',
            '## Standard Material Design 3 Breakpoints',
            '',
            '| SCSS Token | Default Value | Description |',
            '|:-----------|:--------------|:------------|',
            '| `$md-sys-breakpoint-compact` | 0px | Compact screens (phones, very small devices) |',
            '| `$md-sys-breakpoint-medium` | 600px | Medium screens (small tablets, large phones) |',
            '| `$md-sys-breakpoint-large` | 840px | Large screens (tablets, small desktops) |',
            '',
            '---',
            '',
            '## Extended Breakpoints (Custom)',
            '',
            '| SCSS Token | Default Value | Description |',
            '|:-----------|:--------------|:------------|',
            '| `$md-sys-breakpoint-extended-md` | 1240px | Medium desktop width |',
            '| `$md-sys-breakpoint-extended-lg` | 1440px | Large desktop width |',
            '| `$md-sys-breakpoint-extended-xl` | 1600px | Extra-large desktop (wide screens) |',
            '| `$md-sys-breakpoint-extended-xxl` | 1920px | Ultra-wide monitors (4K) |',
            '',
            '---',
            '',
            '## Usage Notes',
            '',
            '> ℹ️ Breakpoints are mainly intended for **advanced layout customization**.',
            '> ',
            '> Most users should rely on the **Container**, **Grid**, and **Flex** utility classes, which automatically adapt to screen sizes.',
            '> ',
            '> **Manual use of breakpoints** is recommended only if you need custom components or more precise layout control.',
            '',
            '---',
            '',
            '## Example: Using a breakpoint in SCSS',
            '',
            '```scss',
            '@media (min-width: $md-sys-breakpoint-medium) {',
            '  .custom-component {',
            '    padding: 2rem;',
            '  }',
            '}',
            '```',
            '',
            '> 🔹 Tip: Combine manual breakpoints carefully with utility classes to ensure consistent responsiveness across your project.',
          ].join('\n')
        }
      }
    }
  };
  
    // ✅ Dummy example to enable autodoc rendering
export const BreakpointsOverview = () => {
    const div = document.createElement('div');
    div.innerText = 'Responsive breakpoints are used automatically in containers and layouts.';
    div.style.padding = '2rem';
    div.style.background = '#f9f9f9';
    div.style.border = '1px dashed #ccc';
    div.style.textAlign = 'center';
    return div;
  };*/