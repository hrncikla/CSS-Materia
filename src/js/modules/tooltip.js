import '../../css/main.css';

export const createTooltip = ({
  label = 'Tooltip',
  position = 'top',
  content = 'Nápověda k tlačítku',
  color = '',
}) => {
  const wrapper = document.createElement('div');
  wrapper.className = `tooltip tooltip--${position}`;

  const trigger = document.createElement('button');
  trigger.textContent = label;
  trigger.style.padding = '0.5rem 1rem';

  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip__content';

  if (color) {
    tooltip.classList.add(`tooltip__content--${color}`);
  }

  tooltip.textContent = content;

  wrapper.appendChild(trigger);
  wrapper.appendChild(tooltip);

  return wrapper;
};
