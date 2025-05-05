import '../../css/main.css';
import { createIcon } from '../../js/modules/icon';

export const createMenu = ({
  items = [],
  onSelect = () => { },
}) => {
  const menu = document.createElement('div');
  menu.className = 'menu';

  items.forEach((item, index) => {
    if (item.divider) {
      const divider = document.createElement('div');
      divider.className = 'menu__divider';
      menu.appendChild(divider);
      return;
    }

    const itemEl = document.createElement('div');
    itemEl.classList.add('menu__item');
    if (item.disabled) itemEl.classList.add('menu__item--disabled');

    if (item.icon) {
      const iconEl = createIcon(item.icon);
      iconEl.classList.add('menu__icon');
      itemEl.appendChild(iconEl);
    }

    const label = document.createElement('span');
    label.textContent = item.label;
    itemEl.appendChild(label);

    if (item.shortcut) {
      const shortcut = document.createElement('span');
      shortcut.className = 'menu__shortcut';
      shortcut.textContent = item.shortcut;
      itemEl.appendChild(shortcut);
    }

    if (!item.disabled) {
      itemEl.addEventListener('click', () => onSelect(index));
    }

    menu.appendChild(itemEl);
  });

  return menu;
};
