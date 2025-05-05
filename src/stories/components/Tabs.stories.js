import { fn } from '@storybook/test';
import { createTabs } from '../../js/modules/tabs';
import { createStoryWrapper } from '../helpers/storybook-helpers';

export default {
  title: 'Components/Tabs',
  tags: ['autodocs'],
  render: (args) => createTabs(args),
  parameters: {
    docs: {
      description: {
        component: [
          'Tabs allow users to quickly navigate between related views.',
          '',
          '## Available Classes:',
          '- `.tabs` → wrapper around tab buttons',
          '- `.tab` → base tab button',
          '- `.tab--active` → active tab (primary color + underline)',
          '- `.tab--disabled` → disabled state with reduced opacity',
          '- `.tab-icon` → icon inside the tab (optional)',
          '',
          '## Behavior:',
          '- Clicking a tab triggers `onChange(index)`.',
          '- Disabled tabs cannot be selected.',
          '',
          '## HTML Example:',
          '```html',
          '<div class="tabs">',
          '  <button class="tab tab--active">',
          '    <span class="material-symbols-outlined tab-icon">home</span>',
          '    Home',
          '  </button>',
          '  <button class="tab">',
          '    <span class="material-symbols-outlined tab-icon">settings</span>',
          '    Settings',
          '  </button>',
          '</div>',
          '```',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    tabs: {
      control: 'object',
      description: 'Array of tab objects',
    },
    activeIndex: {
      control: {
        type: 'select',
      },
      options: [0, 1],
      labels: {
        0: 'Tab 1',
        1: 'Tab 2',
      },
      description: 'Index of the currently active tab',
    },
    onChange: {
      action: 'tab changed',
      description: 'Fires when tab is changed',
    },
  }
  
};

export const LiveExample = (args = {}) => {
  const wrapper = createStoryWrapper('120px', '1rem');

  const defaultTabs = [
    { label: 'Domů' },
    { label: 'Profil' },
    { label: 'Nastavení', disabled: true },
  ];
  let currentActiveIndex = args.activeIndex ?? 0;
  const tabs = Array.isArray(args.tabs) ? args.tabs : defaultTabs;

  const renderTabs = () => {
    wrapper.innerHTML = '';

    const instance = createTabs({
      tabs,
      activeIndex: currentActiveIndex,
      onChange: (index) => {
        currentActiveIndex = index;
        renderTabs();
      },
    });
    wrapper.appendChild(instance);
  };
  renderTabs();
  return wrapper;
};

LiveExample.args = {
  activeIndex: 0,
  tabs: [
    { label: 'Domů' },
    { label: 'Profil' },
    { label: 'Nastavení', disabled: true },
  ],
};

export const Showcase = () => {
  const wrapper = createStoryWrapper('120px');

  const basic = createTabs({
    tabs: [
      { label: 'Domů' },
      { label: 'Zprávy' },
      { label: 'Nastavení' },
    ],
    activeIndex: 1,
  });

  const withIcons = createTabs({
    tabs: [
      { label: 'Hudba', icon: 'music_note' },
      { label: 'Video', icon: 'movie' },
      { label: 'Obrázky', icon: 'photo' },
    ],
    activeIndex: 0,
  });

  wrapper.appendChild(basic);
  wrapper.appendChild(withIcons);

  return wrapper;
};
Showcase.parameters = {
  docs: {
    description: {
      story: 'Examples of basic tabs and tabs with Material icons.',
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

export const SimpleTabs = {
  args: {
    tabs: [
      { label: 'Přehled' },
      { label: 'Detail' },
      { label: 'Nastavení' },
    ],
    activeIndex: 0,
  },
};
SimpleTabs.storyName = 'Simple Tabs';
SimpleTabs.parameters = {
  docs: {
    description: {
      story: [
        'Basic example of tabs without icons or disabled states.',
        '',
        '```html',
        '<div class="tabs">',
        '  <button class="tab tab--active">Přehled</button>',
        '  <button class="tab">Detail</button>',
        '  <button class="tab">Nastavení</button>',
        '</div>',
        '```',
      ].join('\n'),
    },
  },
};

export const WithIcons = {
  args: {
    tabs: [
      { label: 'Mapy', icon: 'map' },
      { label: 'Trasy', icon: 'directions_bike' },
      { label: 'Body', icon: 'place' },
    ],
    activeIndex: 2,
  },
};
WithIcons.parameters = {
  docs: {
    description: {
      story: [
        '**Tabs with icons** — display Material icons next to tab labels.',
        '',
        '```html',
        '<div class="tabs">',
        '  <button class="tab">',
        '    <span class="material-symbols-outlined tab-icon">map</span>',
        '    Mapy',
        '  </button>',
        '</div>',
        '```'
      ].join('\n'),
    },
  },
};

export const DisabledTab = {
  args: {
    tabs: [
      { label: 'Aktivní' },
      { label: 'Nepřístupné', disabled: true },
    ],
    activeIndex: 0,
  },
};
DisabledTab.parameters = {
  docs: {
    description: {
      story: [
        '**Disabled tabs** — tabs that cannot be selected, styled with `.tab--disabled`.',
        '',
        '```html',
        '<div class="tabs">',
        '  <button class="tab tab--disabled">Nepřístupné</button>',
        '</div>',
        '```'
      ].join('\n'),
    },
  },
};
