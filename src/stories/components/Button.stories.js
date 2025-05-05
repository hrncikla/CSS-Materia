import { fn } from '@storybook/test';
import { createButton } from '../../js/modules/button';
import { createIcon } from '../../js/modules/icon';

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: (args) => createButton(args),
  parameters: {
    docs: {
      description: {
        component: [
          'Buttons allow users to take actions and make choices with a single tap.',
          'Follows [Material Design 3](https://m3.material.io/components/buttons) guidelines.',
          '',
          '### Button Variants',
          '- **Filled** – Primary action emphasis.',
          '- **Tonal** – Secondary option with softer emphasis.',
          '- **Elevated** – Subtle background shadow for medium emphasis.',
          '- **Outlined** – No fill, border only, for lower emphasis.',
          '- **Text** – Bare button, for inline or toolbar actions.',
          '- **Icon** – Only icon, no label (compact).',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'tonal', 'elevated', 'outlined', 'text', 'icon'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    icon: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Tlačítko',
    variant: 'filled',
    size: 'medium',
    icon: false,
    disabled: false,
  },
};

export const LiveExample = (args) => {
  return createButton(args);
};
LiveExample.storyName = 'Live Example';
LiveExample.parameters = {
  docs: {
    description: {
      story: 'Fully interactive button example. You can modify label, icon, color, variant.',
    },
  },
};

export const Showcase = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '1rem';
  container.style.flexWrap = 'wrap';
  container.style.alignItems = 'center';

  const variants = ['filled', 'tonal', 'elevated', 'outlined', 'text', 'icon'];

  variants.forEach((variant) => {
    const button = document.createElement('button');
    button.className = `button button--${variant}`;

    if (variant === 'icon') {
      const icon = createIcon({ symbol: 'favorite', useMaterial: true });
      button.appendChild(icon);
    } else {
      button.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
    }

    container.appendChild(button);
  });

  return container;
};
Showcase.parameters = {
  docs: {
    description: {
      story: 'Visual overview of button types (filled, tonal, elevated, outlined, text, icon).',
    },
  },
  backgrounds: {
    default: 'soft neutral',
    values: [
      { name: 'soft neutral', value: '#EDEDED' },
      { name: 'light surface', value: '#F4F4F4' },
      { name: 'dark gray', value: '#2E2E2E' },
    ],
  },
};

export const Filled = { args: { variant: 'filled' } };
Filled.parameters = {
  docs: {
    description: {
      story: `
**Filled button** – used for primary actions.

\`\`\`html
<button class="button button--filled">Tlačítko</button>
\`\`\`
      `,
    },
  },
};

export const Tonal = { args: { variant: 'tonal' } };
Tonal.parameters = {
  docs: {
    description: {
      story: `
**Tonal button** – secondary alternative to filled.

\`\`\`html
<button class="button button--tonal">Tlačítko</button>
\`\`\`
      `,
    },
  },
};

export const Elevated = { args: { variant: 'elevated' } };
Elevated.parameters = {
  docs: {
    description: {
      story: `
**Elevated button** – medium emphasis button on low-contrast backgrounds.

\`\`\`html
<button class="button button--elevated">Tlačítko</button>
\`\`\`
      `,
    },
  },
};

export const Outlined = { args: { variant: 'outlined' } };
Outlined.parameters = {
  docs: {
    description: {
      story: `
**Outlined button** – secondary low emphasis action.

\`\`\`html
<button class="button button--outlined">Tlačítko</button>
\`\`\`
      `,
    },
  },
};

export const Text = { args: { variant: 'text' } };
Text.parameters = {
  docs: {
    description: {
      story: `
**Text button** – minimal emphasis, often inline or in toolbars.

\`\`\`html
<button class="button button--text">Tlačítko</button>
\`\`\`
      `,
    },
  },
};

export const Icon = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '2rem';
  container.style.alignItems = 'center';

  // Standalone icon button
  const standalone = document.createElement('button');
  standalone.className = 'button button--icon';
  const iconStandalone = createIcon({ symbol: 'star', useMaterial: true });
  standalone.appendChild(iconStandalone);

  // Leading icon button
  const leading = document.createElement('button');
  leading.className = 'button button--filled';
  const iconLeading = createIcon({ symbol: 'search', useMaterial: true });
  iconLeading.classList.add('icon--leading');
  iconLeading.classList.add('icon--on-primary');
  leading.appendChild(iconLeading);
  leading.appendChild(document.createTextNode('Search'));

  // Trailing icon button
  const trailing = document.createElement('button');
  trailing.className = 'button button--filled';
  trailing.appendChild(document.createTextNode('Upload'));
  const iconTrailing = createIcon({ symbol: 'upload', useMaterial: true });
  iconTrailing.classList.add('icon--trailing');
  iconTrailing.classList.add('icon--on-primary');
  trailing.appendChild(iconTrailing);

  container.appendChild(standalone);
  container.appendChild(leading);
  container.appendChild(trailing);

  return container;
};

Icon.parameters = {
  docs: {
    description: {
      story: `
**Icon Button** – compact button using only an icon, or icon with label (leading/trailing).

\`\`\`html
<button class="button button--icon">
  <span class="material-symbols-outlined icon">star</span>
</button>
<button class="button button--filled">
  <span class="material-symbols-outlined icon icon--leading icon--on-primary">search</span>
  Search
</button>
<button class="button button--filled">
  Upload
  <span class="material-symbols-outlined icon icon--trailing icon--on-primary">upload</span>
</button>
\`\`\`
      `,
    },
  },
};
