import '../../css/main.css';
import { createIcon } from '../../js/modules/icon';

export const createTextField = ({
  label = 'Textové pole',
  placeholder = 'Zadejte text',
  value = '',
  variant = 'filled',
  icon = '',
  trailingIcon = '',
  helper = '',
  error = false,
  disabled = false,
  onInput = () => { },
}) => {
  const wrapper = document.createElement('div');
  wrapper.className = `text-field text-field--${variant}`;
  if (error) wrapper.classList.add('text-field--error');
  if (disabled) wrapper.classList.add('text-field--disabled');

  const labelEl = document.createElement('label');
  labelEl.className = 'text-field__label';
  labelEl.textContent = label;
  wrapper.appendChild(labelEl);

  const inputWrapper = document.createElement('div');
  inputWrapper.className = 'text-field__input-wrapper';

  if (icon) {
    const iconEl = createIcon(icon);
    iconEl.classList.add('text-field__icon');
    inputWrapper.appendChild(iconEl);
  }

  const input = document.createElement('input');
  input.className = 'text-field__input';
  input.type = 'text';
  input.placeholder = placeholder;
  input.value = value;
  input.disabled = disabled;
  input.addEventListener('input', (e) => onInput(e.target.value));
  inputWrapper.appendChild(input);

  if (trailingIcon) {
    const trailing = createIcon(trailingIcon);
    trailing.classList.add('text-field__trailing-icon');
    inputWrapper.appendChild(trailing);
  }

  wrapper.appendChild(inputWrapper);

  if (helper) {
    const helperEl = document.createElement('div');
    helperEl.className = 'text-field__helper';
    helperEl.textContent = helper;
    wrapper.appendChild(helperEl);
  }

  return wrapper;
};
