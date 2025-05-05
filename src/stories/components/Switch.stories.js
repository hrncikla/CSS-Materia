import { fn } from '@storybook/test';
import { createSwitch } from '../../js/modules/switch';

export default {
  title: 'Components/Switch',
  tags: ['autodocs'],
  render: (args) => createSwitch(args),
  parameters: {
    docs: {
      description: {
        component: [
          'Switch toggles the state of a single setting.',
          '',
          'Supports `checked` / `unchecked` state and optional `disabled` mode.',
          '',
          '## Available Classes',
          '- `.switch` | Root wrapper element with relative positioning |',
          '- `.switch__track` | The horizontal background (track) |',
          '- `.switch__thumb` | The circular toggle element |',
          '- `.switch--disabled` | Reduces opacity and disables interaction |',
          '',
          '## HTML Structure',
          '',
          '```html',
          '<label class="switch">',
          '  <input type="checkbox" />',
          '  <div class="switch__track"></div>',
          '  <div class="switch__thumb"></div>',
          '</label>',
          '```',
          '',
        ].join('\n')        
      },
    },
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    checked: false,
    disabled: false,
  },
};

export const LiveExample = {};
LiveExample.storyName = 'Live Example';
LiveExample.parameters = {
  docs: {
    description: {
      story: 'Interactive switch – you can turn on/off and disable.',
    },
  },
  options: { showPanel: false },
  story: { disable: true },
};

export const Showcase = () => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.gap = '2rem';
  wrapper.style.alignItems = 'center';

  const states = [
    { checked: false, disabled: false },
    { checked: true, disabled: false },
    { checked: false, disabled: true },
    { checked: true, disabled: true },
  ];

  states.forEach((args) => {
    const el = createSwitch({ ...args });
    wrapper.appendChild(el);
  });

  return wrapper;
};
Showcase.parameters = {
  docs: {
    description: {
      story: 'Demonstration of all switch states: on, off, enabled, and disabled.',
    },
  },
};

export const Checked = { args: { checked: true } };
Checked.parameters = {
  docs: {
    description: {
      story: [
        'The switch is turned on by default using the `checked` property.',
        '',
        '```html',
        '<label class="switch">',
        '  <input type="checkbox" checked />',
        '  <div class="switch__track"></div>',
        '  <div class="switch__thumb"></div>',
        '</label>',
        '```'
      ].join('\n')
    }
  }
};

export const Disabled = { args: { disabled: true } };
Disabled.parameters = {
  docs: {
    description: {
      story: [
        'The switch is disabled — it does not respond to user interaction and has reduced opacity.',
        '',
        '```html',
        '<label class="switch switch--disabled">',
        '  <input type="checkbox" disabled />',
        '  <div class="switch__track"></div>',
        '  <div class="switch__thumb"></div>',
        '</label>',
        '```'
      ].join('\n')
    }
  }
};