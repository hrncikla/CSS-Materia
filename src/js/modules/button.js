import '../../css/main.css';

export const createButton = ({
  label = 'Button',
  variant = 'filled',
  size = 'medium',
  icon = false,
  disabled = false,
  onClick = () => { },
}) => {
  const button = document.createElement('button');
  button.classList.add('button', `button--${variant}`);

  if (size !== 'medium') {
    button.classList.add(`button--${size}`);
  }

  if (disabled) {
    button.classList.add('is-disabled');
    button.disabled = true;
  }

  if (variant === 'icon') {
    const iconEl = document.createElement('span');
    iconEl.classList.add('icon');
    iconEl.textContent = '★';
    button.appendChild(iconEl);
  } else {
    if (icon === true) {
      const leadingIcon = document.createElement('span');
      leadingIcon.classList.add('icon', 'icon--leading');
      leadingIcon.textContent = '★';
      button.appendChild(leadingIcon);
    }

    const labelNode = document.createTextNode(label);
    button.appendChild(labelNode);
  }

  button.addEventListener('click', (e) => {
    if (!disabled) {
      onClick(e);
    }
  });

  return button;
};
