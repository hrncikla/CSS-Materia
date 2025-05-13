import '../../css/main.css';
import { createIcon } from '../../js/modules/icon';

export const createList = ({
  items = [],
  onSelect = () => {},
}) => {
  const list = document.createElement('div');
  list.className = 'list';

  items.forEach((item, index) => {
    const listItem = document.createElement('div');
    listItem.className = 'list__item';
    if (item.selected) listItem.classList.add('list__item--selected');
    if (item.disabled) listItem.classList.add('list__item--disabled');

    // Add icon using your createIcon function
    if (item.icon) {
      const iconEl = createIcon({
        symbol: item.icon,
        useMaterial: true,
        size: 'default',
      });
      iconEl.classList.add('list__icon');
      listItem.appendChild(iconEl);
    }

    // Add main text
    const textWrapper = document.createElement('div');
    textWrapper.className = 'list__text';
    const mainText = document.createElement('div');
    mainText.className = 'list__text-main';
    mainText.textContent = item.text || item.label || 'Item';
    textWrapper.appendChild(mainText);

    // Add supporting text if present
    if (item.supportingText) {
      const supporting = document.createElement('div');
      supporting.className = 'list__text-supporting';
      supporting.textContent = item.supportingText;
      textWrapper.appendChild(supporting);
    }

    listItem.appendChild(textWrapper);

    // Add meta text if present
    if (item.meta) {
      const meta = document.createElement('div');
      meta.className = 'list__meta';
      meta.textContent = item.meta;
      listItem.appendChild(meta);
    }

    // Add click handler if not disabled
    if (!item.disabled) {
      listItem.addEventListener('click', () => onSelect(index));
    }

    list.appendChild(listItem);
  });

  return list;
};
