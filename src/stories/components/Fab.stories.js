import { createFab } from '../../js/modules/fab';

export default {
  title: 'Components/FAB',
  tags: ['autodocs'],
  render: (args) => createFab(args),
  parameters: {
    docs: {
      description: {
        component: [
          'Floating Action Button (FAB) visually represents the primary or frequent action in an application.',
          '',
          '## Available Variants',
          '- `.fab--primary` → Primary container (color: `--md-sys-color-primary-container`)',
          '- `.fab--secondary` (default) → Secondary container (color: `--md-sys-color-secondary-container`)',
          '- `.fab--tertiary` → Tertiary container (color: `--md-sys-color-tertiary-container`)',
          '',
          '## Available Sizes',
          '- `.fab--small` → 40px height (mini FAB)',
          '- `.fab` (default) → 56px height (standard FAB)',
          '- `.fab--large` → 96px height (large FAB)',
          '',
          '## Icon Styling',
          '- FABs use icons inside `<span class="material-symbols-outlined icon fab__icon">`.',
          '- The icon uses default size `1.5rem`, inherited from `.icon` class.',
          '',
          '## Label Support',
          '- Extended FABs can include text next to the icon using `.fab__label`.',
          '',
          '## HTML Examples',
          '',
          '**Standard FAB:**',
          '',
          '```html',
          '<button class="fab fab--primary">',
          '  <span class="material-symbols-outlined icon fab__icon">add</span>',
          '</button>',
          '```',
          '',
          '**Extended FAB (with label):**',
          '',
          '```html',
          '<button class="fab fab--primary">',
          '  <span class="material-symbols-outlined icon fab__icon">add</span>',
          '  <span class="fab__label">Create</span>',
          '</button>',
          '```',
          '---',
          '',
    
          '> ℹ️ **Best Practices:** Always display only the single most important action on the screen using FAB. Place FAB above related content.',
          '',
          '---',
        ].join('\n')
        
        
      },
    },
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['add', 'edit', 'share', 'star', 'lock'],
    },
    label: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    icon: 'add',
    label: '',
    size: 'default',
    variant: 'secondary',
    disabled: false,
  },
};

// ===== LIVE EXAMPLE =====
export const LiveExample = (args) => {
  return createFab(args);
};
LiveExample.storyName = 'Live Example';
LiveExample.parameters = {
  docs: {
    description: {
      story: 'Interactive FAB component. Choose size, variant, icon and label.',
    },
  },
  options: { showPanel: false },
  story: { disable: true },
};

// ===== SHOWCASE =====
export const Showcase = () => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.gap = '2rem';
  wrapper.style.flexWrap = 'wrap';
  wrapper.style.alignItems = 'center';

  const configs = [
    { icon: 'add', label: '', size: 'small', variant: 'secondary' },
    { icon: 'add', label: '', size: 'default', variant: 'secondary' },
    { icon: 'add', label: '', size: 'large', variant: 'secondary' },
    { icon: 'edit', label: 'Edit', size: 'default', variant: 'primary' },
    { icon: 'share', label: 'Share', size: 'default', variant: 'tertiary' },
  ];

  configs.forEach((args) => {
    const fab = createFab(args);
    wrapper.appendChild(fab);
  });

  return wrapper;
};
Showcase.parameters = {
  docs: {
    description: {
      story: 'Static overview of different FAB sizes, variants and label combinations.',
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

export const WithLabel = { args: { label: 'Add Item', icon: 'add' } };
WithLabel.parameters = {
  docs: {
    description: {
      story: [
        '**FAB with Label** — Displays an icon and text side by side.',
        '',
        '```html',
        '<button class="fab fab--secondary">',
        '  <span class="material-symbols-outlined icon fab__icon">add</span>',
        '  <span class="fab__label">Add Item</span>',
        '</button>',
        '```',
      ].join('\n'),
    },
  },
};

export const PrimaryDefault = { 
  args: { 
    size: 'default', 
    variant: 'primary', 
    icon: 'edit' 
  } 
};
PrimaryDefault.parameters = {
  docs: {
    description: {
      story: [
        '**Primary FAB** — Default primary floating action button.',
        '',
        '**Available Sizes:**',
        '- `.fab--small` → 40px height',
        '- `.fab` (default) → 56px height',
        '- `.fab--large` → 96px height',
        '',
        '```html',
        '<button class="fab fab--primary">',
        '  <span class="material-symbols-outlined icon fab__icon">edit</span>',
        '</button>',
        '```',
      ].join('\n'),
    },
  },
};

export const Disabled = { args: { disabled: true, icon: 'lock' } };
Disabled.parameters = {
  docs: {
    description: {
      story: [
        '**Disabled FAB** — Reduced opacity, disabled interaction.',
        '',
        '```html',
        '<button class="fab fab--secondary fab--disabled">',
        '  <span class="material-symbols-outlined icon fab__icon">lock</span>',
        '</button>',
        '```',
      ].join('\n'),
    },
  },
};
