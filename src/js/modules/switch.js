import '../../css/main.css';

export const createSwitch = ({
  checked = false,
  disabled = false,
  onChange = () => {},
}) => {
  const wrapper = document.createElement('label');
  wrapper.className = 'switch';
  if (disabled) wrapper.classList.add('switch--disabled');

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.checked = checked;
  input.disabled = disabled;

  const track = document.createElement('span');
  track.className = 'switch__track';

  const thumb = document.createElement('span');
  thumb.className = 'switch__thumb';

  input.addEventListener('change', (e) => {
    onChange(e.target.checked);
  });

  wrapper.appendChild(input);
  wrapper.appendChild(track);
  wrapper.appendChild(thumb);

  return wrapper;
};
