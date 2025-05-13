import { fn } from '@storybook/test';
import { createTextField } from '../../js/modules/text-field';

export default {
  title: 'Components/Text Field',
  tags: ['autodocs'],
  render: (args) => createTextField(args),
  parameters: {
    docs: {
      description: {
        component: [
          'Text Field is a Material Design 3 input component for entering and editing text.',
          '',
          '### Text Field Features',
          '- Filled and Outlined variants',
          '- Leading and trailing icons',
          '- Helper text and error message',
          '- Disabled state',
          '- Optional multiline textarea variant',
          '',
          '### Available Classes',
          '- `.text-field` – base wrapper',
          '- `.text-field--filled` / `.text-field--outlined` – style variants',
          '- `.text-field--error` – error state',
          '- `.text-field--disabled` – disabled state',
          '- `.text-field__label` – label element',
          '- `.text-field__input-wrapper` – contains input and icons',
          '- `.text-field__input` – input field',
          '- `.text-field__icon` – leading icon',
          '- `.text-field__trailing-icon` – trailing icon',
          '- `.text-field__helper` – helper or error message',
          '',
          '### HTML Example',
          '```html',
          '<div class="text-field text-field--outlined">',
          '  <label class="text-field__label">Name</label>',
          '  <div class="text-field__input-wrapper">',
          '    <span class="text-field__icon">',
          '      <span class="material-symbols-outlined icon">folder</span>',
          '    </span>',
          '    <input class="text-field__input" placeholder="Enter name" />',
          '    <span class="text-field__trailing-icon">',
          '      <span class="material-symbols-outlined icon icon--primary">search</span>',
          '    </span>',
          '  </div>',
          '  <div class="text-field__helper">Required field</div>',
          '</div>',
          '```'
        ].join('\n'),
      },
    },
  },
argTypes: {
  label: { control: 'text' },
  placeholder: { control: 'text' },
  value: { control: 'text' },
  variant: {
    control: { type: 'select' },
    options: ['filled', 'outlined'],
  },
  helper: { control: 'text' },
  disabled: { control: 'boolean' },
},
args: {
  label: 'Name',
  placeholder: 'Enter your name',
  value: '',
  variant: 'filled',
  helper: 'This is a helper message',
  disabled: false,

},


};

export const LiveExample = (args) => {
  return createTextField({
    ...args,
    icon: '',
    trailingIcon: '',
  });
};
LiveExample.storyName = 'Live Example';
LiveExample.parameters = {
  docs: {
    description: {
      story: 'Fully interactive text field. Use controls to change value, variant, icon, state, and more.',
    },
  },
};

export const Showcase = () => {
  const container = document.createElement('div');
  container.className = 'my-wrapper';
  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
  container.style.gap = '1.5rem';
  container.style.padding = '1.5rem';
  container.style.backgroundColor = '#F4F4F4';

  const examples = [
    {
      label: 'Filled',
      placeholder: 'Type something...',
      helper: 'This is a filled field',
    },
    {
      label: 'Outlined',
      variant: 'outlined',
      placeholder: 'Outlined input',
      helper: 'This uses an outline',
    },
    {
      label: 'With Icons',
      icon: '<span class="material-symbols-outlined icon">search</span>',
      trailingIcon: '<span class="material-symbols-outlined icon icon--primary">close</span>',
      placeholder: 'Search...',
    },
    {
      label: 'Error State',
      error: true,
      helper: 'This field is required',
      value: 'Wrong value',
    },
    {
      label: 'Disabled',
      disabled: true,
      value: 'Not editable',
      helper: 'Field is disabled',
    },
    {
      label: 'Multiline Textarea',
      multiline: true,
      placeholder: 'Enter multiple lines...',
      helper: 'Use shift+enter for new line',
    },
    {
      label: 'Label only',
    },
    {
      label: '',
      placeholder: 'No label',
      helper: 'Just placeholder and helper',
    },
  ];

  examples.forEach((args) => {
    const field = createTextField({
      ...args,
      onInput: fn(),
    });
    container.appendChild(field);
  });

  return container;
};
Showcase.parameters = {
  docs: {
    description: {
      story: 'Showcase of all text field variants: filled, outlined, with icons, error, disabled, and multiline.',
    },
  },
};

export const Filled = {
  args: {
    label: 'First Name',
    placeholder: 'Enter first name',
    variant: 'filled',
    helper: 'Example of filled variant',
  },
};
Filled.parameters = {
  docs: {
    description: {
      story: '**Filled text field** with subtle background and rounded edges.\n\n```html\n<div class="text-field text-field--filled">\n  <label class="text-field__label">First Name</label>\n  <div class="text-field__input-wrapper">\n    <input class="text-field__input" placeholder="Enter first name">\n  </div>\n  <div class="text-field__helper">Example of filled variant</div>\n</div>\n```',
    },
  },
};

export const Outlined = {
  args: {
    label: 'Last Name',
    variant: 'outlined',
    placeholder: 'Enter last name',
    helper: 'Example of outlined variant',
  },
};
Outlined.parameters = {
  docs: {
    description: {
      story: '**Outlined text field** with border instead of background.\n\n```html\n<div class="text-field text-field--outlined">\n  <label class="text-field__label">Last Name</label>\n  <div class="text-field__input-wrapper">\n    <input class="text-field__input" placeholder="Enter last name">\n  </div>\n  <div class="text-field__helper">Example of outlined variant</div>\n</div>\n```',
    },
  },
};

export const WithIcons = {
  args: {
    label: 'Search',
    icon: '<span class="material-symbols-outlined">search</span>',
    trailingIcon: '<span class="material-symbols-outlined icon--primary">star</span>',
    placeholder: 'Type to search...',
  },
};
WithIcons.parameters = {
  docs: {
    description: {
      story: '**Text field with both leading and trailing icons.**\n\n```html\n<div class="text-field text-field--filled">\n  <label class="text-field__label">Search</label>\n  <div class="text-field__input-wrapper">\n    <span class="text-field__icon">\n      <span class="material-symbols-outlined">star</span>\n    </span>\n    <input class="text-field__input" placeholder="Type to search...">\n    <span class="text-field__trailing-icon">\n      <span class="material-symbols-outlined">star</span>\n    </span>\n  </div>\n</div>\n```',
    },
  },
};


export const ErrorState = {
  args: {
    label: 'Email',
    error: true,
    helper: 'Invalid email address',
    value: 'invalid@',
  },
};
ErrorState.parameters = {
  docs: {
    description: {
      story: '**Error state** with red outline and helper message.\n\n```html\n<div class="text-field text-field--error">\n  <label class="text-field__label">Email</label>\n  <div class="text-field__input-wrapper">\n    <input class="text-field__input" placeholder="Enter your email" value="invalid@">\n  </div>\n  <div class="text-field__helper">Invalid email address</div>\n</div>\n```',
    },
  },
};

export const Disabled = {
  args: {
    label: 'Username',
    disabled: true,
    value: 'readonly_user',
    helper: 'This field is disabled',
  },
};
Disabled.parameters = {
  docs: {
    description: {
      story: '**Disabled text field** with muted styling and no interaction.\n\n```html\n<div class="text-field text-field--disabled">\n  <label class="text-field__label">Username</label>\n  <div class="text-field__input-wrapper">\n    <input class="text-field__input" placeholder="readonly_user" disabled>\n  </div>\n  <div class="text-field__helper">This field is disabled</div>\n</div>\n```',
    },
  },
};

export const WithTextarea = {
  args: {
    label: 'Message',
    placeholder: 'Write your message here...',
    multiline: true,
    helper: 'Use Enter for line break',
  },
};
WithTextarea.parameters = {
  docs: {
    description: {
      story: '**Multiline variant** using a `<textarea>` field instead of input.\n\n```html\n<div class="text-field text-field--filled">\n  <label class="text-field__label">Message</label>\n  <div class="text-field__input-wrapper">\n    <textarea class="text-field__input" placeholder="Write your message here..."></textarea>\n  </div>\n  <div class="text-field__helper">Use Enter for line break</div>\n</div>\n```',
    },
  },
};
