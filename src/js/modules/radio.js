import '../../css/main.css';

export const createRadio = ({
  label = 'Možnost',
  name = 'radio-group',
  value = '',
  checked = false,
  disabled = false,
  onChange = () => {},
}) => {
  const wrapper = document.createElement('label');
  wrapper.className = 'radio';
  if (disabled) wrapper.classList.add('radio--disabled');

  const input = document.createElement('input');
  input.type = 'radio';
  input.name = name;
  input.value = value;
  input.checked = checked;
  input.disabled = disabled;

  const outer = document.createElement('span');
  outer.className = 'radio__outer';

  const inner = document.createElement('span');
  inner.className = 'radio__inner';

  outer.appendChild(inner);
  wrapper.appendChild(input);
  wrapper.appendChild(outer);
  wrapper.appendChild(document.createTextNode(label));

  input.addEventListener('change', (e) => {
    if (e.target.checked) onChange(value);
  });

  return wrapper;
};
