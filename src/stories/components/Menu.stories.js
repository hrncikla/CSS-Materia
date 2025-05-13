import { createMenu } from '../../js/modules/menu';
import { createStoryWrapper } from '../helpers/storybook-helpers';
import { createIcon } from '../../js/modules/icon';

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
          '```'
        ].join('\n'),
      },
    },
  },
  argTypes: {
    items: { control: 'object' },
  },
  args: {
    items: [
      { icon: 'edit', label: 'Edit' },
      { icon: 'delete', label: 'Delete' },
      { divider: true },
      { icon: 'settings', label: 'Settings', shortcut: 'Ctrl+S' },
      { icon: 'logout', label: 'Logout', disabled: true },
    ],
  },
};

export const LiveExample = (args) => {
  const wrapper = createStoryWrapper();

  const trigger = document.createElement('button');
  trigger.textContent = 'Toggle Menu';
  trigger.style.padding = '0.5rem 1rem';

  const items = [
    { label: 'Basic Item 1' },
    { label: 'Basic Item 2' },
    { label: 'Basic Item 3' },
  ];

  if (args.icon) {
    items.forEach((item, index) => {
      items[index].icon = ['edit', 'folder', 'settings'][index % 3];
    });
  }

  if (args.divider) {
    items.splice(1, 0, { divider: true });
  }

  const menu = createMenu({ items });
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
LiveExample.argTypes = {
  icon: { control: 'boolean', defaultValue: false },
  divider: { control: 'boolean', defaultValue: false },
};
LiveExample.args = {
  icon: false,
  divider: false,
};
LiveExample.parameters = {
  docs: {
    description: {
      story: `
Interactive menu with toggle options for icons and dividers.
`,
    },
  },
};

export const Showcase = () => {
  const wrapper = createStoryWrapper();
  wrapper.style.display = 'grid';
  wrapper.style.gridTemplateColumns = 'repeat(auto-fit, minmax(240px, 1fr))';
  wrapper.style.gap = '1.5rem';
  wrapper.style.padding = '1.5rem';

  const examples = [
    {
      title: 'With Icons',
      items: [
        { icon: 'folder', label: 'File' },
        { icon: 'folder', label: 'Folder' },
        { icon: 'star', label: 'Favorite' },
      ],
    },
    {
      title: 'With Shortcuts',
      items: [
        { label: 'Undo', shortcut: 'Ctrl+Z' },
        { label: 'Redo', shortcut: 'Ctrl+Y' },
      ],
    },
    {
      title: 'With Disabled Items',
      items: [
        { label: 'Option A' },
        { label: 'Option B', disabled: true },
        { label: 'Option C' },
      ],
    },
  ];

  examples.forEach(({ title, items }) => {
    const section = document.createElement('div');
    const label = document.createElement('strong');
    label.textContent = title;
    label.style.display = 'block';
    label.style.marginBottom = '0.5rem';
    section.appendChild(label);

    const menu = createMenu({
      items: items.map(item => ({
        ...item,
        icon: item.icon ? createIcon({ symbol: item.icon, useMaterial: true }) : null,
      })),
    });

    section.appendChild(menu);
    wrapper.appendChild(section);
  });

  return wrapper;
};

Showcase.parameters = {
  docs: {
    description: {
      story: `
Showcase of various menu configurations, including icons, shortcuts, dividers, and disabled items.
\`\`\`
`,
    },
  },
};

export const WithDisabledItem = () => {
  const wrapper = createStoryWrapper();
  const menu = createMenu({
    items: [
      { label: 'Option A' },
      { label: 'Option B', disabled: true },
      { label: 'Option C' },
    ],
  });
  wrapper.appendChild(menu);
  return wrapper;
};
WithDisabledItem.parameters = {
  docs: {
    description: {
      story: `
A menu item with \`.menu__item--disabled\` is styled with reduced opacity and cannot be interacted with.

\`\`\`html
<div class="menu">
  <div class="menu__item">Option A</div>
  <div class="menu__item menu__item--disabled">Option B</div>
  <div class="menu__item">Option C</div>
</div>
\`\`\`
`,
    },
  },
};

export const WithShortcuts = () => {
  const wrapper = createStoryWrapper();
  const menu = createMenu({
    items: [
      { label: 'Undo', shortcut: 'Ctrl+Z' },
      { label: 'Redo', shortcut: 'Ctrl+Y' },
    ],
  });
  wrapper.appendChild(menu);
  return wrapper;
};
WithShortcuts.parameters = {
  docs: {
    description: {
      story: `
Shortcuts are displayed on the right using \`.menu__shortcut\`.

\`\`\`html
<div class="menu">
  <div class="menu__item">
    <span class="menu__label">Undo</span>
    <span class="menu__shortcut">Ctrl+Z</span>
  </div>
  <div class="menu__item">
    <span class="menu__label">Redo</span>
    <span class="menu__shortcut">Ctrl+Y</span>
  </div>
</div>
\`\`\`
`,
    },
  },
};

export const IconsOnly = () => {
  const wrapper = createStoryWrapper();
  const menu = createMenu({
    items: [
      { icon: 'folder', label: 'File' },
      { icon: 'folder', label: 'Folder' },
      { icon: 'star', label: 'Favorite' },
    ],
  });
  wrapper.appendChild(menu);
  return wrapper;
};
IconsOnly.parameters = {
  docs: {
    description: {
      story: `
Menu with leading icons using \`.menu__icon\`.

\`\`\`html
<div class="menu">
  <div class="menu__item">
    <span class="menu__icon material-symbols-outlined">star</span>
    <span class="menu__label">File</span>
  </div>
  <div class="menu__item">
    <span class="menu__icon material-symbols-outlined">star</span>
    <span class="menu__label">Folder</span>
  </div>
  <div class="menu__item">
    <span class="menu__icon material-symbols-outlined">star</span>
    <span class="menu__label">Favorite</span>
  </div>
</div>
\`\`\`
`,
    },
  },
};

export const DividerOnly = () => {
  const wrapper = createStoryWrapper();
  const menu = createMenu({
    items: [
      { label: 'Top' },
      { divider: true },
      { label: 'Bottom' },
    ],
  });
  wrapper.appendChild(menu);
  return wrapper;
};
DividerOnly.parameters = {
  docs: {
    description: {
      story: `
Divider creates a visual separation using \`.menu__divider\`.

\`\`\`html
<div class="menu">
  <div class="menu__item">Top</div>
  <div class="menu__divider"></div>
  <div class="menu__item">Bottom</div>
</div>
\`\`\`
`,
    },
  },
};

