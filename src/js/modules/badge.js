import '../../css/main.css';

export const createBadge = ({
  content = '',
  variant = 'error',
  dot = false,
} = {}) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'badge-wrapper';

  const badge = document.createElement('div');
  badge.classList.add('badge', `badge--${variant}`);

  if (dot) {
    badge.classList.add('badge--dot');
    badge.textContent = '';
  } else {
    badge.textContent = content;
  }

  wrapper.appendChild(badge);
  return wrapper;
};

export const createBadgeWrapper = ({ child, content = '', variant = 'error', dot = false }) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'badge-wrapper';
  wrapper.style.position = 'relative';
  wrapper.style.display = 'inline-block';

  wrapper.appendChild(child);

  const badge = createBadge({ content, variant, dot });
  wrapper.appendChild(badge.querySelector('.badge'));

  return wrapper;
};