import { createTooltip } from '../../js/modules/tooltip';
import { createStoryWrapper } from '../helpers/storybook-helpers';

export default {
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  render: (args) => createTooltip(args),
  parameters: {
    docs: {
      description: {
        component: [
          'The Tooltip component provides brief informative text when users hover or focus on an element.',
          '',
          '## Structure',
          '- `.tooltip` — wrapper container',
          '- `.tooltip__content` — tooltip content container (appears on hover/focus)',
          '',
          '## Positions',
          '- `.tooltip--top` (default)',
          '- `.tooltip--bottom`',
          '- `.tooltip--left`',
          '- `.tooltip--right`',
          '',
          '## Color Variants (on `.tooltip__content`)',
          '- `.tooltip__content--success`',
          '- `.tooltip__content--info`',
          '- `.tooltip__content--warning`',
          '- `.tooltip__content--error`',
          '',
          '## HTML Example',
          '```html',
          '<div class="tooltip tooltip--top">',
          '  <button>Hover me</button>',
          '  <div class="tooltip__content tooltip__content--success">Success tooltip</div>',
          '</div>',
          '```',
          '',
          '> **Accessibility tip:** Do not rely on tooltip content for critical information.',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    content: { control: 'text' },
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
    color: {
      control: { type: 'select' },
      options: ['', 'success', 'info', 'warning', 'error'],
    },
  },
  args: {
    label: 'Hover me',
    content: 'Tooltip content here',
    position: 'top',
    color: '',
  },
};

export const LiveExample = {
  render: (args) => {
    const wrapper = createStoryWrapper('120px', '7rem');
    const tooltip = createTooltip(args);
    wrapper.appendChild(tooltip);
    return wrapper;
  },
};
LiveExample.storyName = 'Live Example';
LiveExample.parameters = {
  docs: {
    description: {
      story: 'Tooltip s možností zvolit pozici a upravit text.',
    },
  },
  options: { showPanel: false },
  story: { disable: true },
};

export const Showcase = () => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'grid';
  wrapper.style.gridTemplateColumns = 'repeat(auto-fit, minmax(140px, 1fr))';
  wrapper.style.gap = '2rem';
  wrapper.style.padding = '2rem';
  wrapper.style.justifyItems = 'center';

  const positions = ['top', 'bottom', 'left', 'right'];

  positions.forEach((pos) => {
    const tooltip = createTooltip({
      label: pos.charAt(0).toUpperCase() + pos.slice(1),
      position: pos,
      content: `Tooltip ${pos}`,
    });
    wrapper.appendChild(tooltip);
  });

  return wrapper;
};
Showcase.parameters = {
  docs: {
    description: {
      story: 'Ukázka všech pozic tooltipu kolem prvku.',
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

export const TooltipTop = {
  args: { position: 'top' },
  render: (args) => {
    const wrapper = createStoryWrapper('120px');
    const tooltip = createTooltip(args);
    wrapper.appendChild(tooltip);
    return wrapper;
  },
};
TooltipTop.parameters = {
  docs: {
    description: {
      story: 'Tooltip displayed above the element using `.tooltip--top` class.\n\n```html\n<div class="tooltip tooltip--top">\n  <button>Hover me</button>\n  <div class="tooltip__content">Tooltip text</div>\n</div>\n```',
    },
  },
};

export const TooltipBottom = {
  args: { position: 'bottom' },
  render: (args) => {
    const wrapper = createStoryWrapper('120px');
    const tooltip = createTooltip(args);
    wrapper.appendChild(tooltip);
    return wrapper;
  },
};
TooltipBottom.parameters = {
  docs: {
    description: {
      story: 'Tooltip displayed below the element using `.tooltip--bottom` class.\n\n```html\n<div class="tooltip tooltip--bottom">\n  <button>Hover me</button>\n  <div class="tooltip__content">Tooltip text</div>\n</div>\n```',
    },
  },
};

export const TooltipLeft = {
  args: { position: 'left' },
  render: (args) => {
    const wrapper = createStoryWrapper('100px', '7rem');
    const tooltip = createTooltip(args);
    wrapper.appendChild(tooltip);
    return wrapper;
  },
};
TooltipLeft.parameters = {
  docs: {
    description: {
      story: 'Tooltip displayed to the left using `.tooltip--left` class.\n\n```html\n<div class="tooltip tooltip--left">\n  <button>Hover me</button>\n  <div class="tooltip__content">Tooltip text</div>\n</div>\n```',
    },
  },
};

export const TooltipRight = { args: { position: 'right' } };
TooltipRight.parameters = {
  docs: {
    description: {
      story: 'Tooltip displayed to the right using `.tooltip--right` class.\n\n```html\n<div class="tooltip tooltip--right">\n  <button>Hover me</button>\n  <div class="tooltip__content">Tooltip text</div>\n</div>\n```',
    },
  },
};

// ===== COLOR VARIANTS SHOWCASE =====
export const TooltipColorsShowcase = () => {
  const wrapper = createStoryWrapper();

  const colors = [
    { label: 'Success', color: 'success' },
    { label: 'Info', color: 'info' },
    { label: 'Warning', color: 'warning' },
    { label: 'Error', color: 'error' },
  ];

  colors.forEach(({ label, color }) => {
    const tooltip = createTooltip({
      label: `${label}`,
      content: `${label} tooltip`,
      position: 'top',
      color,
    });
    wrapper.appendChild(tooltip);
  });

  return wrapper;
};
TooltipColorsShowcase.storyName = 'Color Variants';
TooltipColorsShowcase.parameters = {
  docs: {
    description: {
      story: [
        'Showcase of all available tooltip color variants.',
        '',
        '**Available Color Classes:**',
        '- `.tooltip__content--success` → success green background',
        '- `.tooltip__content--info` → info blue background',
        '- `.tooltip__content--warning` → warning yellow background',
        '- `.tooltip__content--error` → error red background',
        '',
        '```html',
        '<div class="tooltip tooltip--top">',
        '  <button>Hover me</button>',
        '  <div class="tooltip__content tooltip__content--success">Success tooltip</div>',
        '</div>',
        '<div class="tooltip tooltip--top">',
        '  <button>Hover me</button>',
        '  <div class="tooltip__content tooltip__content--info">Info tooltip</div>',
        '</div>',
        '<div class="tooltip tooltip--top">',
        '  <button>Hover me</button>',
        '  <div class="tooltip__content tooltip__content--warning">Warning tooltip</div>',
        '</div>',
        '<div class="tooltip tooltip--top">',
        '  <button>Hover me</button>',
        '  <div class="tooltip__content tooltip__content--error">Error tooltip</div>',
        '</div>',
        '```'
      ].join('\n'),
    },
  },
};
