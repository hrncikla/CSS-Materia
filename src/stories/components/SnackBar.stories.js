import { createSnackbar } from '../../js/modules/snackbar';
import { createStoryWrapper } from '../helpers/storybook-helpers';

export default {
  title: 'Components/Snackbar',
  tags: ['autodocs'],
  render: (args) => createSnackbar(args),
  parameters: {
    docs: {
      description: {
        component: [
          'Snackbar provides brief messages about app processes at the bottom of the screen.',
          '',
          '## Structure and Classes',
          '- `.snackbar` – root container; `position: fixed`, styled for bottom alignment',
          '- `.snackbar--open` – triggers entry animation (`snackbar-fade-in`)',
          '- `.snackbar__text` – message content; uses `body-medium` typography (size 14px)',
          '- `.snackbar__action` – optional button with filled look and `label-large` text (size 14px)',
          '',
          '## Styles and Tokens Used',
          '- `--md-sys-color-inverse-surface` → background of snackbar',
          '- `--md-sys-color-inverse-on-surface` → color of message text',
          '- `--md-sys-color-primary` → action button text color',
          '- `--md-sys-shape-corner-large` → border-radius',
          '- `@include button-base` and `button-style()` for button styling',
          '',
          '## Behavior',
          '- Auto-dismiss after a set `duration` (default 3s)',
          '- Click on action triggers optional callback',
          '- Use `onClose()` if programmatically dismissed',
          '---',
          '',
          '## Example HTML',
          '```html',
          '<div class="snackbar snackbar--open">',
          '  <div class="snackbar__text">Změny byly uloženy.</div>',
          '  <button class="snackbar__action">Zpět</button>',
          '</div>',
          '```',
          '',
          '### ℹ️ Usage Notes',
          '',
          '> Snackbar should not interrupt the user, nor require confirmation. Use dialog for critical actions.',
          '',
          '---',
          '',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    text: { control: 'text' },
    actionLabel: { control: 'text' },
    duration: { control: { type: 'number', min: 1000, step: 500 } },
  },
  args: {
    text: 'Změny byly úspěšně uloženy.',
    actionLabel: 'Zpět',
    duration: 3000,
  },
};

export const LiveExample = (args) => {
  const wrapper = createStoryWrapper("120px");
  const btn = document.createElement('button');
  btn.className = 'button button--filled';
  btn.textContent = 'Zobrazit snackbar';
  btn.addEventListener('click', () => createSnackbar(args));
  wrapper.appendChild(btn);
  return wrapper;
};
LiveExample.storyName = 'Live Example';
LiveExample.parameters = {
  docs: {
    description: {
      story: 'Interactive snackbar with the ability to edit text, action and display duration.',
    },
  },
  options: { showPanel: false },
  story: { disable: true },
};

export const Showcase = () => {
  const wrapper = createStoryWrapper('120px');
  const examples = [
    { text: 'Saved', duration: 2500 },
    { text: 'Error while saving', actionLabel: 'Retry' },
    { text: 'Message sent', actionLabel: 'Undo' },
  ];
  examples.forEach((args) => {
    const btn = document.createElement('button');
    btn.className = 'button button--filled';
    btn.textContent = `Show: ${args.text}`;
    btn.addEventListener('click', () => createSnackbar(args));
    wrapper.appendChild(btn);
  });
  return wrapper;
};
Showcase.parameters = {
  docs: {
    description: {
      story: [
        'Example with interactive buttons that trigger various snackbar messages.',
        '',
        '```js',
        'createSnackbar({ text: "Saved", duration: 2500 });',
        'createSnackbar({ text: "Error while saving", actionLabel: "Retry" });',
        'createSnackbar({ text: "Message sent", actionLabel: "Undo" });',
        '```'
      ].join('\n'),
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

export const DefaultSnackbar = () => {
  const wrapper = createStoryWrapper('120px');
  wrapper.innerHTML = `
    <div class="snackbar snackbar--open">
      <div class="snackbar__text">Changes have been saved.</div>
      <button class="snackbar__action">Undo</button>
    </div>
  `;
  return wrapper;
};
DefaultSnackbar.parameters = {
  docs: {
    description: {
      story: [
        '**Default snackbar** — basic message and action structure.',
        '',
        '```html',
        '<div class="snackbar snackbar--open">',
        '  <div class="snackbar__text">Changes have been saved.</div>',
        '  <button class="snackbar__action">Undo</button>',
        '</div>',
        '```'
      ].join('\n'),
    },
  },
};

export const LongTextSnackbar = () => {
  const wrapper = createStoryWrapper('120px');
  wrapper.innerHTML = `
    <div class="snackbar snackbar--open">
      <div class="snackbar__text">Your changes were automatically saved. This message will disappear in a few seconds.</div>
    </div>
  `;
  return wrapper;
};
LongTextSnackbar.parameters = {
  docs: {
    description: {
      story: [
        '**Snackbar with long text** — displays an extended message with no action.',
        '',
        '```html',
        '<div class="snackbar snackbar--open">',
        '  <div class="snackbar__text">Your changes were automatically saved. This message will disappear in a few seconds.</div>',
        '</div>',
        '```'
      ].join('\n'),
    },
  },
};

export const WithoutActionSnackbar = () => {
  const wrapper = createStoryWrapper('120px');
  wrapper.innerHTML = `
    <div class="snackbar snackbar--open">
      <div class="snackbar__text">Automatic notification with no action</div>
    </div>
  `;
  return wrapper;
};
WithoutActionSnackbar.parameters = {
  docs: {
    description: {
      story: [
        '**Snackbar without action** — only displays a message, no buttons.',
        '',
        '```html',
        '<div class="snackbar snackbar--open">',
        '  <div class="snackbar__text">Automatic notification with no action</div>',
        '</div>',
        '```'
      ].join('\n'),
    },
  },
};
