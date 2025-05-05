import '../../css/main.css';

export const createSnackbar = ({
  text = 'Upozornění',
  actionLabel = '',
  duration = 3000,
  onAction = () => {},
  onClose = () => {},
}) => {
  const snackbar = document.createElement('div');
  snackbar.className = 'snackbar snackbar--open';

  const textEl = document.createElement('div');
  textEl.className = 'snackbar__text';
  textEl.textContent = text;
  snackbar.appendChild(textEl);

  if (actionLabel) {
    const actionBtn = document.createElement('button');
    actionBtn.className = 'snackbar__action';
    actionBtn.textContent = actionLabel;
    actionBtn.addEventListener('click', () => {
      onAction();
      snackbar.remove();
    });
    snackbar.appendChild(actionBtn);
  }

  document.body.appendChild(snackbar);

  setTimeout(() => {
    snackbar.remove();
    onClose();
  }, duration);

  return snackbar;
};
