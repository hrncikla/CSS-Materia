import { fn } from '@storybook/test';

import { createMenu } from '../../js/modules/menu';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Menu',
  tags: ['autodocs'],
  render: (args) => createMenu(args),
  parameters: {
    docs: {
      description: {
        component: [
          'Menu is a contextual overlay displaying a list of choices. Built using Material Design 3 principles.',
          '',
          '### Menu Features',
          '- Icons using custom icon component',
          '- Optional shortcut display',
          '- Divider support',
          '- Disabled state',
          '',
          '### Available Classes',
          '- `.menu` – base menu container',
          '- `.menu__item` – interactive menu item',
          '- `.menu__item--disabled` – visually disabled item',
          '- `.menu__icon` – leading icon (e.g. using Material Symbols)',
          '- `.menu__shortcut` – right-aligned shortcut label',
          '- `.menu__divider` – separator between groups of items',
          '',
          '### HTML Example',
          '```html',
          '<div class="my-wrapper">',
          '  <div class="menu">',
          '    <div class="menu__item">',
          '      <span class="menu__icon">',
          '        <span class="material-symbols-outlined icon">settings</span>',
          '      </span>',
          '      <span>Settings</span>',
          '      <span class="menu__shortcut">Ctrl+S</span>',
          '    </div>',
          '    <div class="menu__divider"></div>',
          '    <div class="menu__item menu__item--disabled">',
          '      <span class="menu__icon">',
          '        <span class="material-symbols-outlined icon">logout</span>',
          '      </span>',
          '      <span>Logout</span>',
          '    </div>',
          '  </div>',
          '</div>',
          '```'
        ].join('\n'),
      },
    },
  },
  argTypes: {
    items: { control: 'object' },
    onSelect: { action: 'selected' },
  },
  args: {
    items: [
      { icon: '<span class="material-symbols-outlined icon">edit</span>', label: 'Edit' },
      { icon: '<span class="material-symbols-outlined icon">delete</span>', label: 'Delete' },
      { divider: true },
      { icon: '<span class="material-symbols-outlined icon">settings</span>', label: 'Settings', shortcut: 'Ctrl+S' },
      { icon: '<span class="material-symbols-outlined icon">logout</span>', label: 'Logout', disabled: true },
    ],
    onSelect: fn(),
  },
};

export const LiveExample = (args) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'my-wrapper';
  wrapper.style.padding = '2rem';
  wrapper.style.position = 'relative';

  const trigger = document.createElement('button');
  trigger.textContent = 'Toggle Menu';
  trigger.style.padding = '0.5rem 1rem';

  const menu = createMenu(args);
  menu.style.position = 'absolute';
  menu.style.top = '3rem';
  menu.style.left = '0';
  menu.style.display = 'none';

  trigger.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
  });

  wrapper.appendChild(trigger);
  wrapper.appendChild(menu);
  return wrapper;
};
LiveExample.storyName = 'Live Example';
LiveExample.parameters = {
  docs: {
    description: {
      story: 'Interactive menu rendered on button click. Items can include icons, shortcuts, dividers and disabled states.',
    },
  },
  options: { showPanel: false },
  story: { disable: true },
};

export const Showcase = () => {
  const container = document.createElement('div');
  container.className = 'my-wrapper';
  container.style.padding = '2rem';
  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(240px, 1fr))';
  container.style.gap = '1.5rem';
  container.style.backgroundColor = '#F4F4F4';

  const examples = [
    {
      title: 'Basic Menu',
      items: [
        { label: 'New file' },
        { label: 'Open...' },
        { label: 'Save' },
      ],
    },
    {
      title: 'With Icons',
      items: [
        { icon: '<span class="material-symbols-outlined icon">description</span>', label: 'Document' },
        { icon: '<span class="material-symbols-outlined icon">folder</span>', label: 'Folder' },
        { icon: '<span class="material-symbols-outlined icon">settings</span>', label: 'Settings' },
      ],
    },
    {
      title: 'With Shortcuts',
      items: [
        { label: 'Copy', shortcut: 'Ctrl+C' },
        { label: 'Paste', shortcut: 'Ctrl+V' },
        { label: 'Cut', shortcut: 'Ctrl+X' },
      ],
    },
    {
      title: 'With Disabled',
      items: [
        { label: 'Item 1' },
        { label: 'Item 2', disabled: true },
        { label: 'Item 3' },
      ],
    },
    {
      title: 'With Divider',
      items: [
        { label: 'Profile' },
        { label: 'Account' },
        { divider: true },
        { label: 'Logout' },
      ],
    },
    {
      title: 'All Features',
      items: [
        { icon: '<span class="material-symbols-outlined icon">edit</span>', label: 'Edit', shortcut: 'E' },
        { icon: '<span class="material-symbols-outlined icon">sync</span>', label: 'Sync', shortcut: 'S' },
        { divider: true },
        { icon: '<span class="material-symbols-outlined icon">delete</span>', label: 'Delete', disabled: true },
      ],
    },
  ];

  examples.forEach(({ title, items }) => {
    const section = document.createElement('div');
    const label = document.createElement('strong');
    label.textContent = title;
    label.style.display = 'block';
    label.style.marginBottom = '0.5rem';

    const menu = createMenu({
      items,
      onSelect: action('menu item selected'),
    });

    section.appendChild(label);
    section.appendChild(menu);
    container.appendChild(section);
  });

  return container;
};

Showcase.parameters = {
  docs: {
    description: {
      story: 'Showcase of all available menu configurations: icons, shortcuts, dividers, disabled and more.',
    },
  },
};



export const WithDisabledItem = {
  args: {
    items: [
      { label: 'Option A' },
      { label: 'Option B', disabled: true },
      { label: 'Option C' },
    ],
  },
};
WithDisabledItem.parameters = {
  docs: {
    description: {
      story: 'A menu item with `.menu__item--disabled` is styled with reduced opacity and cannot be interacted with.',
    },
  },
};

export const WithShortcuts = {
  args: {
    items: [
      { label: 'Undo', shortcut: 'Ctrl+Z' },
      { label: 'Redo', shortcut: 'Ctrl+Y' },
    ],
  },
};
WithShortcuts.parameters = {
  docs: {
    description: {
      story: 'Shortcuts are displayed on the right using `.menu__shortcut`.',
    },
  },
};

export const IconsOnly = {
  args: {
    items: [
      { icon: '📄', label: 'File' },
      { icon: '📁', label: 'Folder' },
      { icon: '⭐', label: 'Favorite' },
    ],
  },
};
IconsOnly.parameters = {
  docs: {
    description: {
      story: 'Menu with leading icons using `.menu__icon`.',
    },
  },
};

export const DividerOnly = {
  args: {
    items: [
      { label: 'Top' },
      { divider: true },
      { label: 'Bottom' },
    ],
  },
};
DividerOnly.parameters = {
  docs: {
    description: {
      story: 'Divider creates a visual separation using `.menu__divider`.',
    },
  },
};

export const AllFeatures = {
  args: {
    items: [
      { icon: '✏️', label: 'Rename', shortcut: 'F2' },
      { icon: '🗑️', label: 'Delete', disabled: true },
      { divider: true },
      { icon: '⚙️', label: 'Settings', shortcut: 'Ctrl+S' },
    ],
  },
};
AllFeatures.parameters = {
  docs: {
    description: {
      story: 'Combined menu with icon, shortcut, disabled item, and divider.',
    },
  },
};
