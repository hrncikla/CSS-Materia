import { createIcon } from '../../js/modules/icon';

export default {
  title: 'Components/Icon',
  tags: ['autodocs'],
  render: (args) => createIcon(args),
  parameters: {
    docs: {
      description: {
        component: [
          'Icons visually represent actions, content types, or states.',
          'This implementation primarily uses [Material Symbols Outlined](https://fonts.google.com/icons?icon.set=Material+Symbols+Outlined), part of Material Design 3 guidelines.',
          '',
          'Material Symbols are provided by Google Fonts and used under the terms of the [Material Symbols License](https://developers.google.com/fonts/docs/material_symbols).',
          '',
          '> **Note:** To correctly display Material Symbols, make sure you include the font in your HTML head:',
          '',
          '```html',
          '<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">',
          '```',
          '',
      
          'Icons support:',
          '- Different sizes: small, default, large',
          '- Semantic colors: primary, secondary, tertiary, error, disabled',
          '- Optional container for circular background',
          '',
          '```html',
          '<span class="material-symbols-outlined icon">star</span>',
          '<span class="material-symbols-outlined icon icon--primary">lock</span>',
          '<div class="icon-container">',
          '  <span class="material-symbols-outlined icon">notifications</span>',
          '</div>',
          '<span class="icon">⭐</span>',
          '```',
          '',
          '## ℹ️ Usage Guidelines for Icons',
          'Icons visually support actions, content types, or UI states.',
          'In this framework, you can use **two types of icons**:',
          '',
          '### 1. Material Symbols Outlined',
          '- **Recommended** for consistency with Material Design 3.',
          '- Automatically loads from Google Fonts.',
          '- Supports semantic color classes (primary, secondary, error, etc.).',
          '- Can be sized using `.icon--small`, `.icon--large`.',
          '',
          '```html',
          '<span class="material-symbols-outlined icon">star</span>',
          '```',
          '',
          '**With Container:**',
          '',
          '```html',
          '<div class="icon-container">',
          '  <span class="material-symbols-outlined icon">notifications</span>',
          '</div>',
          '```',
          '',
          '### 2. Custom Icons',
          '- Use for quick fallback (e.g., ⭐, ⚡, 🔒).',
          '- No dependency on external fonts.',
          '- Suitable for simple demos or alternative designs.',
          '',
          '```html',
          '<span class="icon">⭐</span>',
          '```',
          '',
          '🔹 Best Practices',
          '- Prefer **Material Symbols** for production UI.',
          '- Use **Custom icons** only for fast prototypes.',
          '- Always use `.icon-container` for proper spacing in buttons, chips, or badges.',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    symbol: {
      control: { type: 'select' },
      options: ['star', 'lock', 'notifications', 'warning', '⭐'],
      description: 'Choose from predefined symbols.',
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'small', 'large'],
    },
    color: {
      control: { type: 'select' },
      options: ['', 'primary', 'secondary', 'tertiary', 'error', 'disabled'],
    },
    container: { control: 'boolean' },
  },
  args: {
    symbol: 'star',
    size: 'default',
    color: '',
    container: false,
  },
};

export const LiveExample = (args) => {
  return createIcon(args);
};
LiveExample.storyName = 'Live Example';
LiveExample.parameters = {
  docs: {
    description: {
      story: 'Interactive icon example. Choose icon, size, color and optional container.',
    },
  },
  options: { showPanel: false },
  story: { disable: true },
};

export const Showcase = () => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.gap = '2rem';
  wrapper.style.flexWrap = 'wrap';
  wrapper.style.alignItems = 'center';

  const examples = [
    { symbol: 'star', useMaterial: true, size: 'small' },
    { symbol: 'star', useMaterial: true },
    { symbol: 'star', useMaterial: true, size: 'large' },
    { symbol: 'warning', useMaterial: true, color: 'error' },
    { symbol: 'lock', useMaterial: true, color: 'primary' },
    { symbol: 'notifications', useMaterial: true, container: true },
    { symbol: '⭐', useMaterial: false }, // Vlastní symbol
  ];

  examples.forEach((args) => {
    const icon = createIcon(args);
    wrapper.appendChild(icon);
  });

  return wrapper;
};
Showcase.parameters = {
  docs: {
    description: {
      story: 'Examples of icons.',
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

export const WithContainer = {
  args: {
    symbol: 'notifications',
    container: true,
    useMaterial: true,
  },
};
WithContainer.parameters = {
  docs: {
    description: {
      story: [
        '**Icon inside a container** — Useful for icon buttons or floating actions.',
        '',
        '```html',
        '<div class="icon-container">',
        '  <span class="material-symbols-outlined icon">notifications</span>',
        '</div>',
        '```',
      ].join('\n'),
    },
  },
};

export const Colored = {
  args: {
    symbol: 'lock',
    color: 'error',
    useMaterial: true,
  },
};
Colored.parameters = {
  docs: {
    description: {
      story: [
        '**Colored icon** — Change the icon color using theme tokens and state classes.',
        '',
        '**Available Colors and Required Classes:**',
        '- class `.icon--primary` → color `--md-sys-color-primary`',
        '- class `.icon--on-primary` → color `--md-sys-color-on-primary`',
        '- class `.icon--secondary` → color `--md-sys-color-secondary`',
        '- class `.icon--on-secondary` → color `--md-sys-color-on-secondary`',
        '- class `.icon--tertiary` → color `--md-sys-color-tertiary`',
        '- class `.icon--on-tertiary` → color `--md-sys-color-on-tertiary`',
        '- class `.icon--error` → color `--md-sys-color-error`',
        '- class `.icon--on-error` → color `--md-sys-color-on-error`',
        '- class `.icon--disabled` → color `--md-sys-color-on-surface` with `opacity: 0.38`',
        '',
        '```html',
        '<!-- Colored error icon -->',
        '<span class="material-symbols-outlined icon icon--error">',
        '  lock',
        '</span>',
        '',
        '<!-- Disabled icon -->',
        '<span class="material-symbols-outlined icon icon--disabled">',
        '  lock',
        '</span>',
        '```',
      ].join('\n'),
    },
  },
};

export const SizeVariants = () => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.gap = '2rem';
  wrapper.style.flexWrap = 'wrap';
  wrapper.style.alignItems = 'center';

  const sizes = [
    { symbol: 'star', size: 'small', useMaterial: true },
    { symbol: 'star', size: 'default', useMaterial: true },
    { symbol: 'star', size: 'large', useMaterial: true },
  ];

  sizes.forEach((args) => {
    const icon = createIcon(args);
    wrapper.appendChild(icon);
  });

  return wrapper;
};
SizeVariants.storyName = 'Sizes';
SizeVariants.parameters = {
  docs: {
    description: {
      story: [
        '**Size Variants** — Icons can be displayed in different preset sizes.',
        '',
        '**Available Sizes:**',
        '- `.icon--small` → 1.25rem',
        '- `.icon` (default) → 1.5rem',
        '- `.icon--large` → 2rem',
        '',
        '```html',
        '<span class="material-symbols-outlined icon icon--small">star</span>',
        '<span class="material-symbols-outlined icon">star</span>',
        '<span class="material-symbols-outlined icon icon--large">star</span>',
        '```',
        '',
      ].join('\n'),
    },
  },
};

export const CustomIcon = {
  args: {
    symbol: '⭐',
    useMaterial: false,
  },
};
CustomIcon.parameters = {
  docs: {
    description: {
      story: [
        '**Custom Icon** — Displays a custom symbol without relying on Material Symbols.',
        '',
        '```html',
        '<span class="icon">⭐</span>',
        '```',
        '',
        '**Note:**',
        '- If you want the custom icon inside a circular background (e.g., for a button or badge), wrap it in `.icon-container`.',
        '',
        '**Example with container:**',
        '',
        '```html',
        '<div class="icon-container">',
        '  <span class="icon">⭐</span>',
        '</div>',
        '```',
      ].join('\n'),
    },
  },
};
