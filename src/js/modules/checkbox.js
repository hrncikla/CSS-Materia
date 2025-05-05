import '../../css/main.css';
import { createIcon } from '../../js/modules/icon';

export const createCheckbox = ({
  label = 'Souhlasím',
  checked = false,
  disabled = false,
  onChange = () => { },
}) => {
  const wrapper = document.createElement('label');
  wrapper.className = 'checkbox';
  if (disabled) wrapper.classList.add('checkbox--disabled');

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.checked = checked;
  input.disabled = disabled;

  const box = document.createElement('span');
  box.className = 'checkbox__box';

  const check = createIcon({
    symbol: 'check',
    size: 'small',
    useMaterial: true,
    color: 'on-primary',
  });
  check.classList.add('checkbox__check');

  box.appendChild(check);
  wrapper.appendChild(input);
  wrapper.appendChild(box);
  wrapper.appendChild(document.createTextNode(label));

  input.addEventListener('change', (e) => {
    onChange(e.target.checked);
  });

  return wrapper;
};
