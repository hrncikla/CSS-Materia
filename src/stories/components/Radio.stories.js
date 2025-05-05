import { fn } from '@storybook/test';
import { createRadio } from '../../js/modules/radio';

export default {
  title: 'Components/Radio',
  tags: ['autodocs'],
  render: (args) => createRadio(args),
  parameters: {
    docs: {
      description: {
        component: [
          'Radio buttons allow users to select a single option from a set.',
          '',
          '### Features',
          '- Label support',
          '- Grouping via `name` attribute',
          '- Controlled or uncontrolled `checked` state',
          '- Optional `disabled` mode with reduced opacity',
          '',
          '### Available Classes',
          '- `.radio` — main wrapper (label element)',
          '- `.radio__outer` — outer circle (visual border)',
          '- `.radio__inner` — inner dot (visible when selected)',
          '- `.radio--disabled` — disabled state (applies `opacity: 0.38`)',
          '',
          '### HTML Example',
          '```html',
          '<!-- Single radio button -->',
          '<label class="radio">',
          '  <input type="radio" name="group1" value="A">',
          '  <span class="radio__outer">',
          '    <span class="radio__inner"></span>',
          '  </span>',
          '  Option A',
          '</label>',
          '',
          '<!-- Disabled -->',
          '<label class="radio radio--disabled">',
          '  <input type="radio" name="group1" value="B" disabled>',
          '  <span class="radio__outer">',
          '    <span class="radio__inner"></span>',
          '  </span>',
          '  Option B',
          '</label>',
          '',
          '<!-- Group (dynamic selection in JS) -->',
          '<label class="radio">',
          '  <input type="radio" name="group-demo" value="C" checked>',
          '  <span class="radio__outer">',
          '    <span class="radio__inner"></span>',
          '  </span>',
          '  Option C',
          '</label>',
          '```'
        ].join('\n')
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Možnost A',
    checked: false,
    disabled: false,
  },
};

export const LiveExample = {};
LiveExample.storyName = 'Live Example';
LiveExample.parameters = {
  docs: {
    description: {
      story: [
        'An interactive radio button example. Use the Controls panel to change label, checked state, and group name.',
        '',
        '```html',
        '<label class="radio">',
        '  <input type="radio" name="example-group" value="A">',
        '  <span class="radio__outer">',
        '    <span class="radio__inner"></span>',
        '  </span>',
        '  Option A',
        '</label>',
        '```'
      ].join('\n'),
    },
  },
  options: { showPanel: false },
  story: { disable: true },
};

export const GroupExample = () => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '0.5rem';

  const options = ['A', 'B', 'C'];
  let selected = 'B';

  const renderGroup = () => {
    wrapper.innerHTML = '';
    options.forEach((opt) => {
      const radio = createRadio({
        label: `Option ${opt}`,
        name: 'group-demo',
        value: opt,
        checked: selected === opt,
        onChange: (val) => {
          selected = val;
          renderGroup();
        },
      });
      wrapper.appendChild(radio);
    });
  };

  renderGroup();
  return wrapper;
};
GroupExample.parameters = {
  docs: {
    description: {
      story: [
        'Example of a radio group where only one option can be selected at a time.',
        '',
        '```html',
        '<label class="radio">',
        '  <input type="radio" name="group-demo" value="A">',
        '  <span class="radio__outer">',
        '    <span class="radio__inner"></span>',
        '  </span>',
        '  Option A',
        '</label>',
        '',
        '<label class="radio">',
        '  <input type="radio" name="group-demo" value="B" checked>',
        '  <span class="radio__outer">',
        '    <span class="radio__inner"></span>',
        '  </span>',
        '  Option B',
        '</label>',
        '',
        '<label class="radio">',
        '  <input type="radio" name="group-demo" value="C">',
        '  <span class="radio__outer">',
        '    <span class="radio__inner"></span>',
        '  </span>',
        '  Option C',
        '</label>',
        '```'
      ].join('\n'),
    },
  },
};


export const Disabled = {
  args: {
    disabled: true,
    checked: false,
  },
};
Disabled.parameters = {
  docs: {
    description: {
      story: [
        'A disabled radio button — not interactive and rendered with reduced opacity.',
        '',
        '```html',
        '<label class="radio radio--disabled">',
        '  <input type="radio" name="example" value="A" disabled>',
        '  <span class="radio__outer">',
        '    <span class="radio__inner"></span>',
        '  </span>',
        '  Option A',
        '</label>',
        '```'
      ].join('\n'),
    },
  },
};
