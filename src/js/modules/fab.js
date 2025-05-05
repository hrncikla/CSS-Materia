import '../../css/main.css';
import { createIcon } from '../../js/modules/icon';

export const createFab = ({
  icon = 'add',
  label = '',
  size = 'default',
  variant = 'secondary',
  disabled = false,
  onClick = () => { },
} = {}) => {
  const fab = document.createElement('button');
  fab.classList.add('fab');

  if (variant) fab.classList.add(`fab--${variant}`);
  if (size && size !== 'default') fab.classList.add(`fab--${size}`);
  if (disabled) fab.classList.add('fab--disabled');

  const iconEl = createIcon({
    symbol: icon,
    useMaterial: !icon.startsWith('⭐') && icon.length > 1,
    size: 'default',
    container: false,
  });
  iconEl.classList.add('fab__icon');
  fab.appendChild(iconEl);

  if (label) {
    const labelEl = document.createElement('span');
    labelEl.className = 'fab__label';
    labelEl.textContent = label;
    fab.appendChild(labelEl);
  }

  if (!disabled) {
    fab.addEventListener('click', onClick);
  }

  return fab;
};

