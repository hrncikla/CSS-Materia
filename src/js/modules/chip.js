import '../../css/main.css';

export const createChip = ({
  label = 'Chip',
  selected = false,
  disabled = false,
  icon = '',
  trailingIcon = '',
  onClick = () => { },
  onRemove = () => { },
}) => {
  const chip = document.createElement('div');
  chip.classList.add('chip');
  if (selected) chip.classList.add('chip--selected');
  if (disabled) chip.classList.add('chip--disabled');

  if (icon) {
    const iconEl = document.createElement('span');
    iconEl.className = 'chip__icon';
    iconEl.textContent = icon;
    chip.appendChild(iconEl);
  }

  const textNode = document.createTextNode(label);
  chip.appendChild(textNode);

  if (trailingIcon) {
    const trailing = document.createElement('span');
    trailing.className = 'chip__trailing';
    trailing.textContent = trailingIcon;
    trailing.addEventListener('click', (e) => {
      e.stopPropagation();
      onRemove();
    });
    chip.appendChild(trailing);
  }

  chip.addEventListener('click', () => {
    if (!disabled) onClick();
  });

  return chip;
};
