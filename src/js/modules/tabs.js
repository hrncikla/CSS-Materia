import '../../css/main.css';
import { createIcon } from './icon';

export const createTabs = ({
  tabs = [],
  activeIndex = 0,
  onChange = () => { },
}) => {
  const container = document.createElement('div');
  container.className = 'tabs';

  tabs.forEach((tab, index) => {
    const btn = document.createElement('button');
    btn.className = 'tab';
    if (index === activeIndex) btn.classList.add('tab--active');
    if (tab.disabled) btn.classList.add('tab--disabled');

    if (tab.icon) {
      const icon = createIcon({
        symbol: tab.icon,
        size: 'small',
        useMaterial: true,
      });
      icon.classList.add('tab-icon');
      btn.appendChild(icon);
    }

    btn.appendChild(document.createTextNode(tab.label));

    if (!tab.disabled) {
      btn.addEventListener('click', () => {
        onChange(index);
      });
    }

    container.appendChild(btn);
  });

  return container;
};
