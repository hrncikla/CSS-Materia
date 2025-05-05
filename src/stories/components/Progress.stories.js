import { components } from 'storybook/internal/components';
import { createProgress } from '../../js/modules/progress';

export default {
  title: 'Components/Progress',
  tags: ['autodocs'],
  render: (args) => createProgress(args),
  parameters: {
    docs: {
      description: {
        component: [
          'The linear progress bar indicates activity or status of a process. )',
          '',
          '### Features',
          '- Visual representation of task progress from **0–100%**',
          '- **Indeterminate mode** with animated loop when progress is unknown',
          '- Support for **status colors**: success, warning, error',
          '',
          '### Available Classes',
          '- `.progress` — root container, full width',
          '- `.progress__bar` — inner bar showing progress',
          '- `.progress--indeterminate` — applies animated state (via `@keyframes`)',
          '- `.progress--success` — uses success color (`--md-sys-color-success`)',
          '- `.progress--error` — uses error color (`--md-sys-color-error`)',
          '',
          '### HTML Example',
          '```html',
          '<!-- Determinate progress -->',
          '<div class="progress">',
          '  <div class="progress__bar" style="width: 60%;"></div>',
          '</div>',
          '',
          '<!-- Indeterminate progress -->',
          '<div class="progress progress--indeterminate">',
          '  <div class="progress__bar"></div>',
          '</div>',
          '',
          '<!-- Success status -->',
          '<div class="progress progress--success">',
          '  <div class="progress__bar" style="width: 100%;"></div>',
          '</div>',
          '```',
        ].join('\n')
      },
    },
  },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    indeterminate: { control: 'boolean' },
    status: {
      control: { type: 'select' },
      options: ['', 'success', 'error'],
    },
  },
  args: {
    value: 50,
    indeterminate: false,
    status: '',
  },
};

export const LiveExample = {};
LiveExample.storyName = 'Live Example';
LiveExample.parameters = {
  docs: {
    description: {
      story: 'Interactive progress bar with the ability to change value, mode and status.',
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
  wrapper.style.width = '100%';
  wrapper.style.maxWidth = '400px';

  const progress1 = createProgress({ value: 20 });
  const progress2 = createProgress({ value: 70, status: 'success' });
  const progress3 = createProgress({ value: 90, status: 'error' });
  const progress4 = createProgress({ indeterminate: true });

  wrapper.append(progress1, progress2, progress3, progress4);
  return wrapper;
};
Showcase.parameters = {
  docs: {
    description: {
      story: 'Sample of all states: standard, success, error, indeterminate.',
    },
  },
};


export const Success = { args: { value: 100, status: 'success' } };
Success.parameters = {
  docs: {
    description: {
      story: [
        'Progress bar with "success" status – indication of completion or success.',
        '',
        '```html',
        '<div class="progress progress--success">',
        '  <div class="progress__bar" style="width: 100%;"></div>',
        '</div>',
        '```'
      ].join('\n'),
    },
  },
};


export const Error = { args: { value: 75, status: 'error' } };
Error.parameters = {
  docs: {
    description: {
      story: [
        'Progress bar with "error" status – indicates an error or failure.',
        '',
        '```html',
        '<div class="progress progress--error">',
        '  <div class="progress__bar" style="width: 75%;"></div>',
        '</div>',
        '```'
      ].join('\n'),
    },
  },
};

export const Indeterminate = { args: { indeterminate: true } };
Indeterminate.parameters = {
  docs: {
    description: {
      story: [
        '**Indeterminate** – used when the duration of the process cannot be determined.',
        'The animation is set using `@keyframes progress-indeterminate`.',
        '',
        '```html',
        '<div class="progress progress--indeterminate">',
        '  <div class="progress__bar"></div>',
        '</div>',
        '```'
      ].join('\n'),
    },
  },
};
