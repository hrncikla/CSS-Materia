import { createBadge, createBadgeWrapper } from '../../js/modules/badge';
import { createIcon } from '../../js/modules/icon'; 

export default {
  title: 'Components/Badge',
  tags: ['autodocs'],
  render: (args) => createBadge(args),
  parameters: {
    docs: {
      description: {
        component: [
          'The badge is a small status indicator component used to show alerts, counts or dots.',
          '',
          '### Badge Variants',
          '- **Default**: Appears with error color and number inside.',
          '- **Dot**: Small circle indicator with no content.',
          '- **Info / Success / Warning**: Contextual color variants for different types of alerts.',
          '',
          '### Typical Usage',
          'Badges are usually placed over:',
          '- Icons (e.g., Notification)',
          '- Buttons (e.g., Messages)',
          '- Avatars (e.g., Online status)',
          '',
          'They must be wrapped inside a `.badge-wrapper` container to ensure correct positioning.',
          '',
          '```html',
          '<div class="badge-wrapper">',
          '  <button class="button">Inbox</button>',
          '  <div class="badge badge--info">5</div>',
          '</div>',
          '',
          '<div class="badge-wrapper">',
          '  <span class="material-symbols-outlined icon">',
          '     account_circle',
          '  </span>',
          '  <div class="badge badge--success badge--dot"></div>',
          '</div>',
          '',
          '```'
        ].join('\n'),
      },
    },
  },
  argTypes: {
    content: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['error', 'info', 'success', 'warning'],
    },
    dot: { control: 'boolean' },
  },
  args: {
    content: '128+',
    variant: 'error',
    dot: false,
  },
};

export const LiveExample = (args) => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.justifyContent = 'center';
  wrapper.style.alignItems = 'center';
  wrapper.style.padding = '2rem'; 
  wrapper.style.minHeight = '8rem'; 
  wrapper.style.backgroundColor = 'var(--md-sys-color-surface-variant)';
  wrapper.style.borderRadius = '1rem';
  wrapper.style.overflow = 'hidden'; 

  const badge = createBadge(args);
  wrapper.appendChild(badge);

  return wrapper;
};

LiveExample.storyName = 'Live Example';
LiveExample.parameters = {
  docs: {
    description: {
      story: 'Interactive badge component. Use the controls to toggle variant, dot, or text.',
    },
  },
  options: { showPanel: false },
  story: { disable: true },
};


export const Showcase = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '2rem';

  const badgeVariants = [
    { variant: 'error', label: '5' },
    { variant: 'info', label: 'i' },
    { variant: 'success', label: '✔' },
    { variant: 'warning', label: '!' },
    { variant: 'error', label: '', dot: true },
  ];

  badgeVariants.forEach(({ variant, label, dot }) => {
    const badge = createBadge({ variant, content: label, dot });
    const box = document.createElement('div');
    box.className = 'badge-wrapper';
    box.style.width = '2rem';
    box.style.height = '2rem';
    box.style.backgroundColor = 'var(--md-sys-color-surface-variant)';
    box.style.borderRadius = '0.5rem';
    box.appendChild(badge.querySelector('.badge'));
    container.appendChild(box);
  });

  return container;
};
Showcase.parameters = {
  docs: {
    description: {
      story: 'Static examples of all badge variants (default, info, success, warning, dot).',
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

// ---- Variant Stories -----

export const Default = {
  args: { variant: 'error', content: '3', dot: false },
};
Default.parameters = {
  docs: {
    description: {
      story: `
Default badge displays an error-colored pill with number.

**Background:** \`var(--md-sys-color-error)\`  
**Text:** \`var(--md-sys-color-on-error)\`

\`\`\`html
<div class="badge badge--error">3</div>
\`\`\`
      `,
    },
  },
};

export const Dot = {
  args: { variant: 'error', dot: true },
};
Dot.parameters = {
  docs: {
    description: {
      story: `
Dot badge is a minimal indicator without text.

**Background:** \`var(--md-sys-color-error)\`  
**Text:** \`var(--md-sys-color-on-error)\`

\`\`\`html
<div class="badge badge--error badge--dot"></div>
\`\`\`
      `,
    },
  },
};

export const Info = {
  args: { variant: 'info', content: 'i' },
};
Info.parameters = {
  docs: {
    description: {
      story: `
Info badge uses informational secondary color.

**Background:** \`var(--md-sys-color-info)\`  
**Text:** \`var(--md-sys-color-on-info)\`

\`\`\`html
<div class="badge badge--info">i</div>
\`\`\`
      `,
    },
  },
};

export const Success = {
  args: { variant: 'success', content: '✔' },
};
Success.parameters = {
  docs: {
    description: {
      story: `
Success badge indicates a positive action.

**Background:** \`var(--md-sys-color-success)\`  
**Text:** \`var(--md-sys-color-on-success)\`

\`\`\`html
<div class="badge badge--success">✔</div>
\`\`\`
      `,
    },
  },
};

export const Warning = {
  args: { variant: 'warning', content: '!' },
};
Warning.parameters = {
  docs: {
    description: {
      story: `
Warning badge shows caution or alert.

**Background:** \`var(--md-sys-color-tertiary)\`  
**Text:** \`var(--md-sys-color-on-tertiary)\`

\`\`\`html
<div class="badge badge--warning">!</div>
\`\`\`
      `,
    },
  },
};

export const BadgeOnIcon = () => {
  const icon = createIcon({
    symbol: 'notifications',
    size: 'large',  
    useMaterial: true,
  });

  return createBadgeWrapper({ child: icon, content: '3', variant: 'error' });
};
BadgeOnIcon.parameters = {
  docs: {
    description: {
      story: `
**Badge on Icon** — attaches a badge to a Material icon (e.g., notifications).

\`\`\`html
<div class="badge-wrapper">
  <span class="material-symbols-outlined icon icon--large">notifications</span>
  <div class="badge badge--error">3</div>
</div>
\`\`\`
      `,
    },
  },
};

export const BadgeOnAvatar = () => {
  const avatar = createIcon({
    symbol: 'account_circle', 
    useMaterial: true,
  });

  return createBadgeWrapper({ child: avatar, dot: true, variant: 'success' });
};
BadgeOnAvatar.parameters = {
  docs: {
    description: {
      story: `
**Dot Badge on Avatar** — attaches a small dot badge to an avatar to indicate presence.

\`\`\`html
<div class="badge-wrapper">
  <span class="material-symbols-outlined icon">
    account_circle
  </span>
  <div class="badge badge--success badge--dot"></div>
</div>
\`\`\`
      `,
    },
  },
};

export const BadgeOnButton = () => {
  const button = document.createElement('button');
  button.className = 'button button--filled';
  button.textContent = 'Messages';

  return createBadgeWrapper({ child: button, content: 'New', variant: 'success' });
};
BadgeOnButton.parameters = {
  docs: {
    description: {
      story: `
**Badge on Button** — attaches a badge to a button element.

\`\`\`html
<div class="badge-wrapper">
  <button class="button button--filled">Messages</button>
  <div class="badge badge--success">New</div>
</div>
\`\`\`
      `,
    },
  },
};

