import '../../css/main.css';

export const createDialog = ({
  title = 'Dialog Title',
  content = 'This is the content of the dialog.',
  type = '',
  fullscreen = false,
  showClose = true,
  onClose = () => { },
  actions = [],
}) => {
  const overlay = document.createElement('div');
  overlay.className = 'dialog-overlay dialog-overlay--open';

  const dialog = document.createElement('div');
  dialog.classList.add('dialog');
  if (fullscreen) dialog.classList.add('dialog--fullscreen');
  if (type) dialog.classList.add(`dialog--${type}`);

  if (showClose) {
    const closeBtn = document.createElement('button');
    closeBtn.className = 'dialog__close';
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', () => {
      onClose();
      overlay.remove();
    });
    dialog.appendChild(closeBtn);
  }

  if (title) {
    const titleEl = document.createElement('div');
    titleEl.className = 'dialog__title';
    titleEl.textContent = title;
    dialog.appendChild(titleEl);
  }

  if (content) {
    const contentEl = document.createElement('div');
    contentEl.className = 'dialog__content';
    contentEl.textContent = content;
    dialog.appendChild(contentEl);
  }

  if (actions.length > 0) {
    const actionsEl = document.createElement('div');
    actionsEl.className = 'dialog__actions';

    actions.forEach(({ label, onClick = () => { } }) => {
      const btn = document.createElement('button');
      btn.className = 'button button--text';
      btn.textContent = label;
      btn.addEventListener('click', () => {
        onClick();
        overlay.remove();
      });
      actionsEl.appendChild(btn);
    });

    dialog.appendChild(actionsEl);
  }

  overlay.appendChild(dialog);
  return overlay;
};
