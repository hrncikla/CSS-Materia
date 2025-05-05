export default {
    title: 'Layout/Container',
    tags: ['autodocs'],
    parameters: {
      docs: {
        description: {
          component: [
            '',
            'The `.container` class provides a responsive, centered layout wrapper.',
            '',
            'It automatically adapts its maximum width based on breakpoints:',
            '',
            '| Breakpoint | Min-Width | Max-Container Width |',
            '|:-----------|:----------|:--------------------|',
            '| Compact    | 0px       | `$md-sys-container-compact` |',
            '| Medium     | 600px     | `$md-sys-container-medium` |',
            '| Large      | 840px     | `$md-sys-container-large` |',
            '| Extended-md| 1240px    | `$md-sys-container-extended-md` |',
            '| Extended-lg| 1440px    | `$md-sys-container-extended-lg` |',
            '| Extended-xl| 1600px    | `$md-sys-container-extended-xl` |',
            '| Extended-xxl| 1920px   | `$md-sys-container-extended-xxl` |',
            '',
            '---',
            '',
            '## How `.container` works',
            '',
            '- `width: 100%` - always full width',
            '- `margin-inline: auto` - centered horizontally',
            '- `padding-inline: var(--md-sys-container-padding)` - consistent horizontal spacing',
            '- `max-width` changes based on screen width breakpoints',
            '',
            'The container uses spacing token:',
            '',
            '- `$md-sys-container-padding` = default horizontal padding inside container.',
            '',
            '---',
            '',
            '## Example Usage',
            '',
            '```html',
            '<div class="container">',
            '  <h2>Centered Content</h2>',
            '  <p>This container adapts based on screen width.</p>',
            '</div>',
            '```',
            '',
          ].join('\n'),
        },
      },
    },
  };
  
  // ✅ Live Example: Container adapting based on width
  


  export const ContainerExamples = () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.fontFamily = 'sans-serif';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '2rem';
    container.style.alignItems = 'center';


    // ✅ Dynamické zobrazení šířky
    const widthDisplay = document.createElement('div');
    widthDisplay.style.padding = '0.5rem 1rem';
    widthDisplay.style.background = '#e0e0e0';
    widthDisplay.style.fontSize = '14px';
    widthDisplay.style.width = 'fit-content';
    widthDisplay.style.borderRadius = '4px';
    widthDisplay.innerText = `Viewport width: ${window.innerWidth}px`;
    
    // ✅ Aktualizace při změně velikosti
    window.addEventListener('resize', () => {
        widthDisplay.innerText = `Viewport width: ${window.innerWidth}px`;
    });
  
    const createContainerBox = (label) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'container';
      wrapper.style.background = '#e3f2fd'; // světlá modrá = container space
      wrapper.style.padding = '1rem';
      wrapper.style.border = '2px solid #1976d2';
      wrapper.style.minHeight = '150px';
      wrapper.style.width = '100%';
  
      const innerBox = document.createElement('div');
      innerBox.style.background = '#ffffff';
      innerBox.style.border = '2px dashed #1976d2';
      innerBox.style.padding = '1rem';
      innerBox.style.textAlign = 'center';
      innerBox.innerHTML = `<strong>${label}</strong><br/>Adaptable content`;
  
      wrapper.appendChild(innerBox);
  
      return wrapper;
    };
  
    // Příklad základního containeru
    container.appendChild(createContainerBox('Default Container'));
  
    const infoText = document.createElement('p');
    infoText.style.fontSize = '14px';
    infoText.style.color = '#555';
    infoText.innerText = 'Resize the screen to see how the container adapts to different breakpoints.';
  
    container.appendChild(infoText);
    container.appendChild(widthDisplay);
  
    return container;
  };
  
