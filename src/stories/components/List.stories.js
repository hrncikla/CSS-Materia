import { createList } from '../../js/modules/list';

export default {
  title: 'Components/List',
  tags: ['autodocs'],
  render: (args) => createList(args),
  parameters: {
    docs: {
      description: {
        component: [
          'The List component displays related content in a structured form.',
          '',
          '## Structure',
          '- Optional leading icon (`.list__icon`)',
          '- Main text (`.list__text-main`)',
          '- Optional supporting text (`.list__text-supporting`)',
          '- Optional meta text on right (`.list__meta`)',
          '',
          '## State classes',
          '- `.list__item--selected` — highlights the selected item.',
          '- `.list__item--disabled` — non-interactive, reduced opacity.',
          '',
          '## HTML Example',
          '```html',
          '<div class="list">',
          '  <div class="list__item">',
          '    <span class="material-symbols-outlined list__icon">folder</span>',
          '    <div class="list__text">',
          '      <div class="list__text-main">Documents</div>',
          '      <div class="list__text-supporting">1 GB free</div>',
          '    </div>',
          '    <div class="list__meta">Yesterday</div>',
          '  </div>',
          '</div>',
          '```'
        ].join('\n'),
      },
    },
  },

};

export const LiveExample = (args) => {
  return createList({
    items: [
      {
        icon: args.iconEnabled ? 'folder' : '',
        text: args.text || 'Documents',
        supportingText: args.supportingText || '1 GB free',
        meta: args.meta || 'Yesterday',
        selected: args.selected,
        disabled: args.disabled,
      },
    ],
  });
};

LiveExample.storyName = 'Live Example';
LiveExample.argTypes = {
  iconEnabled: { control: 'boolean', defaultValue: true, description: 'Toggle leading icon' },
  text: { control: 'text', defaultValue: 'Documents', description: 'Main text content' },
  supportingText: { control: 'text', defaultValue: '1 GB free', description: 'Supporting text (optional)' },
  meta: { control: 'text', defaultValue: 'Yesterday', description: 'Meta info (right aligned)' },
  selected: { control: 'boolean', defaultValue: false, description: 'Mark as selected' },
  disabled: { control: 'boolean', defaultValue: false, description: 'Mark as disabled' },
};
LiveExample.args = {
  iconEnabled: true,
  text: 'Documents',
  supportingText: '1 GB free',
  meta: 'Yesterday',
  selected: false,
  disabled: false,
};
LiveExample.parameters = {
  docs: {
    description: {
      story: 'Interactive list item example with editable icon visibility, main text, supporting text, meta, selected and disabled states. Default values are prefilled for convenience.',
    },
  },
  options: { showPanel: false },
  story: { disable: true },
};


export const Showcase = () => {
  const list = createList({
    items: [
      { icon: 'mail', text: 'Zprávy', supportingText: '5 nových', meta: '12:00' },
      { icon: 'call', text: 'Hovory', supportingText: 'Nepřijatý', meta: 'včera' },
      { icon: 'event', text: 'Kalendář', meta: 'zítra' },
      { icon: 'lock', text: 'Uzamčeno', disabled: true },
    ],
  });
  return list;
};
Showcase.parameters = {
  docs: {
    description: {
      story: 'Examples of different list item types — icons, supporting text, meta, disabled.',
    },
  },
};

export const BasicItem = {
  args: {
    items: [{ text: 'Basic text only' }],
  },
};
BasicItem.parameters = {
  docs: {
    description: {
      story: '```html\n<div class="list__item">Basic text only</div>\n```',
    },
  },
};

export const ItemWithSupportingText = {
  args: {
    items: [{ text: 'Main text', supportingText: 'Supporting info' }],
  },
};
ItemWithSupportingText.parameters = {
  docs: {
    description: {
      story: '```html\n<div class="list__item">\n  <div class="list__text">\n    <div class="list__text-main">Main text</div>\n    <div class="list__text-supporting">Supporting info</div>\n  </div>\n</div>\n```',
    },
  },
};

export const ItemWithMeta = {
  args: {
    items: [{ text: 'Item text', meta: 'Today' }],
  },
};
ItemWithMeta.parameters = {
  docs: {
    description: {
      story: '```html\n<div class="list__item">\n  <div class="list__text-main">Item text</div>\n  <div class="list__meta">Today</div>\n</div>\n```',
    },
  },
};

export const FullItem = {
  args: {
    items: [{ icon: 'folder', text: 'Full item', supportingText: 'Supporting', meta: 'Yesterday' }],
  },
};
FullItem.parameters = {
  docs: {
    description: {
      story: '```html\n<div class="list__item">\n  <span class="material-symbols-outlined list__icon">folder</span>\n  <div class="list__text">\n    <div class="list__text-main">Full item</div>\n    <div class="list__text-supporting">Supporting</div>\n  </div>\n  <div class="list__meta">Yesterday</div>\n</div>\n```',
    },
  },
};

export const IconOnly = {
  args: {
    items: [{ icon: 'star' }],
  },
};
IconOnly.parameters = {
  docs: {
    description: {
      story: '```html\n<div class="list__item">\n  <span class="material-symbols-outlined list__icon">star</span>\n</div>\n```',
    },
  },
};

export const WithSelection = {
  args: {
    items: [
      { text: 'Default' },
      { text: 'Selected', selected: true },
      { text: 'Another' },
    ],
  },
};
WithSelection.parameters = {
  docs: {
    description: {
      story: '```html\n<div class="list__item list__item--selected">Selected</div>\n```',
    },
  },
};

export const DisabledItems = {
  args: {
    items: [
      { text: 'Active' },
      { text: 'Disabled', disabled: true },
    ],
  },
};
DisabledItems.parameters = {
  docs: {
    description: {
      story: '```html\n<div class="list__item list__item--disabled">Disabled</div>\n```',
    },
  },
};
