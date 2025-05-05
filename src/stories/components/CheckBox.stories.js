import { createCheckbox } from '../../js/modules/checkbox';

export default {
  title: 'Components/Checkbox',
  tags: ['autodocs'],
  render: (args) => createCheckbox(args),
  parameters: {
    docs: {
      description: {
        component: [
          'Checkbox allows users to select one or multiple items from a set.',
          '',
          '### Features',
          '- **Checked** and **Unchecked** states',
          '- **Disabled** state',
          '- **Label support**',
          '- **Animated checkmark** using Material Symbols',
          '',
          '### CSS classes overview:',
          '- `.checkbox` — Wrapper around the checkbox',
          '- `.checkbox__box` — Square container for visual checkbox',
          '- `.checkbox__check` — Icon rendered inside checkbox',
          '- `.checkbox--disabled` — Grays out and disables pointer events',
          '',
          '### Example Markup',
          '```html',
          '<label class="checkbox">',
          '  <input type="checkbox" />',
          '  <span class="checkbox__box">',
          '    <span class="material-symbols-outlined checkbox__check">check</span>',
          '  </span>',
          '  Agree to terms',
          '</label>',
          '```',
          '',
          '> The checkmark is a real Material Symbol (`check`) automatically created using the `createIcon` function!',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'I agree with terms',
    checked: false,
    disabled: false,
  },
};
export const LiveExample = (args) => {
  return createCheckbox(args);
};
LiveExample.storyName = 'Live Example';
LiveExample.parameters = {
  docs: {
    description: {
      story: 'Fully interactive Checkbox — toggle label, checked state, and disabled mode.',
    },
  },
  options: { showPanel: false },
  story: { disable: true },
};

export const Showcase = () => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '1rem';

  const examples = [
    { label: 'Unchecked', checked: false, disabled: false },
    { label: 'Checked', checked: true, disabled: false },
    { label: 'Disabled unchecked', checked: false, disabled: true },
    { label: 'Disabled checked', checked: true, disabled: true },
  ];

  examples.forEach((props) => {
    const checkbox = createCheckbox(props);
    wrapper.appendChild(checkbox);
  });

  return wrapper;
};
Showcase.parameters = {
  docs: {
    description: {
      story: 'Various checkbox states: checked, unchecked, disabled.',
    },
  },
};

export const Checked = { args: { checked: true } };
Checked.parameters = {
  docs: {
    description: {
      story: [
        '**Checked State** — Checkbox is initially selected.',
        '',
        '```html',
        '<label class="checkbox">',
        '  <input type="checkbox" checked>',
        '  <span class="checkbox__box">',
        '    <span class="material-symbols-outlined checkbox__check">check</span>',
        '  </span>',
        '  Agree',
        '</label>',
        '```',
      ].join('\n'),
    },
  },
};

export const Disabled = { args: { disabled: true } };
Disabled.parameters = {
  docs: {
    description: {
      story: [
        '**Disabled State** — Checkbox is disabled and unclickable.',
        '',
        'Use class `.checkbox--disabled` to style it.',
        '',
        '```html',
        '<label class="checkbox checkbox--disabled">',
        '  <input type="checkbox" disabled>',
        '  <span class="checkbox__box">',
        '    <span class="material-symbols-outlined checkbox__check">check</span>',
        '  </span>',
        '  Disabled Option',
        '</label>',
        '```',
      ].join('\n'),
    },
  },
};
