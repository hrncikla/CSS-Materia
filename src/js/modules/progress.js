import '../../css/main.css';

export const createProgress = ({
  value = 0,
  indeterminate = false,
  status = '',
}) => {
  const container = document.createElement('div');
  container.classList.add('progress');

  if (indeterminate) {
    container.classList.add('progress--indeterminate');
  }
  if (status) {
    container.classList.add(`progress--${status}`);
  }

  const bar = document.createElement('div');
  bar.classList.add('progress__bar');

  if (!indeterminate) {
    bar.style.width = `${Math.min(Math.max(value, 0), 100)}%`;
  }

  container.appendChild(bar);
  return container;
};