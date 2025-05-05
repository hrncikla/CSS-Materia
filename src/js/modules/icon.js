import '../../css/main.css';

export const createIcon = ({
  symbol = 'star',
  size = 'default',
  color = '',
  useMaterial = true,
  container = false,
}) => {
  let iconEl;

  if (useMaterial) {
    iconEl = document.createElement('span');
    iconEl.className = 'material-symbols-outlined icon';
    iconEl.textContent = symbol;
  } else {
    iconEl = document.createElement('span');
    iconEl.className = 'icon';
    iconEl.textContent = symbol;
  }

  if (size && size !== 'default') iconEl.classList.add(`icon--${size}`);
  if (color) iconEl.classList.add(`icon--${color}`);

  if (container) {
    const wrapper = document.createElement('div');
    wrapper.className = 'icon-container';
    wrapper.appendChild(iconEl);
    return wrapper;
  }

  return iconEl;
};

