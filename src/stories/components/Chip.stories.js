

import { fn } from '@storybook/test';
import { createChip } from '../../js/modules/chip';

export default {
  title: 'Components/Chip',
  tags: ['autodocs'],
  render: (args) => createChip(args),
  parameters: {
    docs: {
      description: {
        component: [
          'Chips are compact elements that represent an input, attribute, or action. They follow Material Design 3 guidelines and support optional icons, selection state, and dismissal.',
          '',
          '### Chip Features',
          '- **Label** text (required)',
          '- **Optional leading icon**',
          '- **Optional trailing icon** (e.g., for removal)',
          '- **Selectable** state (visually highlighted)',
          '- **Disabled** state (non-interactive)',
          '',
          '### Available Classes',
          '- `.chip` - base chip element',
          '- `.chip--selected` - selected state (uses `--md-sys-color-secondary-container`)',
          '- `.chip--disabled` - reduced opacity and no pointer events',
          '- `.chip__icon` - leading icon (left of label)',
          '- `.chip__trailing` - trailing icon, often used to remove the chip',
          '',
          '### HTML Example',
          '```html',
          '<!-- Selected Chip -->',
          '<div class="chip chip--selected">',
          '  <span class="chip__icon">✓</span>',
          '  Selected Chip',
          '  <span class="chip__trailing">×</span>',
          '</div>',
          '',
          '<!-- Disabled Chip -->',
          '<div class="chip chip--disabled">',
          '  Disabled Chip',
          '</div>',
          '',
          '<!-- Basic Chip -->',
          '<div class="chip">',
          '  Basic Chip',
          '</div>',
          '```',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    icon: { control: 'text' },
    trailingIcon: { control: 'text' },
    onClick: { action: 'clicked' },
    onRemove: { action: 'removed' },
  },
  args: {
    label: 'Chip',
    selected: false,
    disabled: false,
    icon: '',
    trailingIcon: '',
    onClick: fn(),
    onRemove: fn(),
  },
};

export const LiveExample = (args) => {
  const chip = createChip({
    ...args,
    onClick: () => {
      fn('Chip clicked')();
    },
    onRemove: () => {
      fn('Chip removed')();
    },
  });
  return chip;
};
LiveExample.storyName = 'Live Example';
LiveExample.args = {
  label: 'Example Chip',
  selected: false,
  disabled: false,
  icon: '',
  trailingIcon: '',
};
LiveExample.parameters = {
  docs: {
    description: {
      story: 'An interactive chip with editable label, state, and icons.',
    },
  },
};

export const Showcase = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexWrap = 'wrap';
  container.style.gap = '1rem';
  container.style.padding = '1rem';
  container.style.backgroundColor = '#F4F4F4';

  const chips = [
    { label: 'Základní chip' },
    { label: 'Vybraný chip', selected: true },
    { label: 'Zakázaný chip', disabled: true },
    { label: 'S ikonou', icon: '✓' },
    { label: 'S mazáním', trailingIcon: '×' },
    { label: 'Kompletní', icon: '★', trailingIcon: '×', selected: true },
  ];

  chips.forEach((args) => {
    const chip = createChip({
      ...args,
      onClick: () => fn('clicked')(),
      onRemove: () => fn('removed')(),
    });
    container.appendChild(chip);
  });

  return container;
};
Showcase.parameters = {
  docs: {
    description: {
      story: 'Ukázka různých kombinací chipů – základní, vybrané, zakázané, s ikonami, a s mazáním.',
    },
  },
};

export const Selected = () => {
  const chip = createChip({
    label: 'Selected',
    selected: true,
  });
  return chip;
};
Selected.parameters = {
  docs: {
    description: {
      story: [
        'A chip in a selected state using the class `.chip--selected`.',
        '',
        '**HTML Example:**',
        '```html',
        '<div class="chip chip--selected">Selected</div>',
        '```'
      ].join('\n'),
    },
  },
};

export const Disabled = () => {
  const chip = createChip({
    label: 'Disabled',
    disabled: true,
  });
  return chip;
};
Disabled.parameters = {
  docs: {
    description: {
      story: [
        'A non-interactive chip with reduced opacity using `.chip--disabled`.',
        '',
        '**HTML Example:**',
        '```html',
        '<div class="chip chip--disabled">Disabled</div>',
        '```'
      ].join('\n'),
    },
  },
};

export const WithIcons = () => {
  const chip = createChip({
    label: 'Iconic',
    icon: '★',
    trailingIcon: '×',
  });
  return chip;
};
WithIcons.parameters = {
  docs: {
    description: {
      story: [
        'A chip with both a leading and trailing icon, using `.chip__icon` and `.chip__trailing`.',
        '',
        '**HTML Example:**',
        '```html',
        '<div class="chip">',
        '  <span class="chip__icon">★</span>',
        '  Iconic',
        '  <span class="chip__trailing">×</span>',
        '</div>',
        '```'
      ].join('\n'),
    },
  },
};