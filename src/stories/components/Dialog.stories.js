import { fn } from '@storybook/test';
import { createDialog } from '../../js/modules/dialog';
import { createStoryWrapper } from '../helpers/storybook-helpers';

export default {
  title: 'Components/Dialog',
  tags: ['autodocs'],
  render: (args) => createDialog(args),
  parameters: {
    docs: {
      description: {
        component: [
          'Dialogs communicate important information that requires user attention. They follow the Material Design 3 guidelines and come in multiple variants to reflect purpose and hierarchy.',
          '',
          '### Dialog Features',
          '- **Modal presentation** with dimmed overlay',
          '- **Optional close icon** in top right',
          '- **Title and body content support**',
          '- **Action buttons** for confirmation, cancellation or alternatives',
          '- **Variants**:',
          '  - **Standard** (default)',
          '  - **Alert** (emphasizes danger or error)',
          '  - **Info** (supportive messaging)',
          '  - **Fullscreen** (mobile-focused or large content)',
          '',
          '### Available Classes',
          '- `.dialog` — base dialog container',
          '- `.dialog--alert` — alert variant (uses `--md-sys-color-error-container`)',
          '- `.dialog--info` — info variant (uses `--md-sys-color-secondary-container`)',
          '- `.dialog--fullscreen` — full viewport coverage',
          '- `.dialog__title` — title section',
          '- `.dialog__content` — body content',
          '- `.dialog__actions` — actions container',
          '- `.dialog__close` — top-right close button',
          '- `.dialog-overlay` — background dimming with focus trap',
          '',
          '### HTML Example',
          '```html',
          '<div class="dialog-overlay dialog-overlay--open">',
          '  <div class="dialog dialog--alert">',
          '    <button class="dialog__close">&times;</button>',
          '    <div class="dialog__title">Error</div>',
          '    <div class="dialog__content">Something went wrong.</div>',
          '    <div class="dialog__actions">',
          '      <button class="button button--text">Cancel</button>',
          '      <button class="button button--text">Retry</button>',
          '    </div>',
          '  </div>',
          '</div>',
          '```',
        ].join('\n')
        ,
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['', 'alert', 'info'],
    },
    fullscreen: { control: 'boolean' },
    showClose: { control: 'boolean' },
    onClose: { action: 'closed' },
  },
  args: {
    title: 'Upozornění',
    content: 'Toto je obsah dialogu.',
    type: '',
    fullscreen: false,
    showClose: true,
    onClose: fn(),
  },
};

export const LiveExample = (args) => {
  const wrapper = createStoryWrapper();

  const renderDialog = () => {
    const dialog = createDialog({
      ...args,
      onClose: () => {
        showReloadButton();
      }
    });
    wrapper.appendChild(dialog);
  };

  const showReloadButton = () => {
    const btn = document.createElement('button');
    btn.className = 'button button--filled button--small';
    btn.textContent = 'Znovu zobrazit dialog';
    btn.style.alignSelf = 'center';
    btn.addEventListener('click', () => {
      btn.remove();
      renderDialog();
    });
    wrapper.appendChild(btn);
  };

  renderDialog();
  return wrapper;
};
LiveExample.storyName = 'Live Example';
LiveExample.args = {
  title: 'Upozornění',
  content: 'Toto je obsah dialogu.',
  type: '',
  fullscreen: false,
  showClose: true,
};

LiveExample.parameters = {
  docs: {
    description: {
      story: 'Interaktivní dialog s možností upravit režim, styl, obsah i akce.',
    },
  },
  options: { showPanel: false },
  story: { disable: true },
};

export const Showcase = () => {
  const wrapper = createStoryWrapper();

  const types = [
    { type: '', title: 'Standardní dialog', content: 'Běžný dialog.' },
    { type: 'alert', title: 'Chyba', content: 'Něco se pokazilo.' },
    { type: 'info', title: 'Informace', content: 'Toto je doplňující zpráva.' },
  ];

  let activeCount = 0;

  const renderDialogs = () => {
    wrapper.innerHTML = ''; // Resetuje wrapper
    activeCount = types.length;

    types.forEach((args) => {
      const dialog = createDialog({
        ...args,
        showClose: true,
        onClose: () => {
          activeCount--;
          if (activeCount === 0) {
            showReloadButton();
          }
        },
        actions: [
          { label: 'Zavřít' },
        ],
      });
      wrapper.appendChild(dialog);
      
    });
  };

  const showReloadButton = () => {
    const btn = document.createElement('button');
    btn.className = 'button button--filled button--small';
    btn.textContent = 'Znovu zobrazit dialogy';
    btn.style.alignSelf = 'center';
    btn.addEventListener('click', () => {
      btn.remove();
      renderDialogs();
    });
    wrapper.appendChild(btn);
  };

  renderDialogs();
  return wrapper;
};
Showcase.parameters = {
  docs: {
    description: {
      story: 'Ukázka základních typů dialogu: standard, alert a info.',
    },
  },
};

export const AlertDialog = () => {
  const wrapper = createStoryWrapper();

  const renderDialog = () => {
    const dialog = createDialog({
      type: 'alert',
      showClose: true,
      onClose: () => {
        showReloadButton();
      }
    });
    wrapper.appendChild(dialog);
  };

  const showReloadButton = () => {
    const btn = document.createElement('button');
    btn.className = 'button button--filled button--small';
    btn.textContent = 'Znovu zobrazit dialog';
    btn.style.alignSelf = 'center';
    btn.addEventListener('click', () => {
      btn.remove();
      renderDialog();
    });
    wrapper.appendChild(btn);
  };

  renderDialog();
  return wrapper;
};
AlertDialog.parameters = {
  docs: {
    description: {
      story: `
**Alert dialog** – emphasizes critical information such as errors or warnings. It uses the background \`--md-sys-color-error-container\` and text \`--md-sys-color-on-error-container\`.

**HTML Example:**

\`\`\`html
<div class="dialog-overlay dialog-overlay--open">
  <div class="dialog dialog--alert">
    <button class="dialog__close">&times;</button>
    <div class="dialog__title">Error</div>
    <div class="dialog__content">Something went wrong.</div>
    <div class="dialog__actions">
      <button class="button button--text">Cancel</button>
      <button class="button button--text">Retry</button>
    </div>
  </div>
</div>
\`\`\`--md-sys-color-error-container\` a text \`--md-sys-color-on-error-container\`. Používá se pro důležitá varování.
      `,
    },
  },
};

export const InfoDialog = () => {
  const wrapper = createStoryWrapper();

  const renderDialog = () => {
    const dialog = createDialog({
      type: 'info',
      showClose: true,
      onClose: () => {
        showReloadButton();
      }
    });
    wrapper.appendChild(dialog);
  };

  const showReloadButton = () => {
    const btn = document.createElement('button');
    btn.className = 'button button--filled button--small';
    btn.textContent = 'Znovu zobrazit dialog';
    btn.style.alignSelf = 'center';
    btn.addEventListener('click', () => {
      btn.remove();
      renderDialog();
    });
    wrapper.appendChild(btn);
  };

  renderDialog();
  return wrapper;
};
InfoDialog.parameters = {
  docs: {
    description: {
      story: `
**Info dialog** – provides non-critical information. It uses \`--md-sys-color-secondary-container\` and \`--md-sys-color-on-secondary-container\`.

**HTML Example:**

\`\`\`html
<div class="dialog-overlay dialog-overlay--open">
  <div class="dialog dialog--info">
    <button class="dialog__close">&times;</button>
    <div class="dialog__title">Information</div>
    <div class="dialog__content">This is an informational message.</div>
    <div class="dialog__actions">
      <button class="button button--text">Dismiss</button>
    </div>
  </div>
</div>
\`\`\`--md-sys-color-secondary-container\` a \`--md-sys-color-on-secondary-container\`.
      `,
    },
  },
};

export const FullscreenDialog = () => {
  const wrapper = createStoryWrapper();

  const renderDialog = () => {
    const dialog = createDialog({
      fullscreen: true,
      showClose: true,
      onClose: () => {
        showReloadButton();
      }
    });
    wrapper.appendChild(dialog);
  };

  const showReloadButton = () => {
    const btn = document.createElement('button');
    btn.className = 'button button--filled button--small';
    btn.textContent = 'Znovu zobrazit dialog';
    btn.style.alignSelf = 'center';
    btn.addEventListener('click', () => {
      btn.remove();
      renderDialog();
    });
    wrapper.appendChild(btn);
  };

  renderDialog();
  return wrapper;
};
FullscreenDialog.parameters = {
  docs: {
    description: {
      story: `
**Fullscreen dialog** – optimized for mobile views or large content. Takes up the entire screen using \`.dialog--fullscreen\`.

**HTML Example:**

\`\`\`html
<div class="dialog-overlay dialog-overlay--open">
  <div class="dialog dialog--fullscreen">
    <button class="dialog__close">&times;</button>
    <div class="dialog__title">Fullscreen Mode</div>
    <div class="dialog__content">This dialog covers the entire screen.</div>
    <div class="dialog__actions">
      <button class="button button--text">Close</button>
    </div>
  </div>
</div>
\`\`\`,
      `,
    },
  },
};