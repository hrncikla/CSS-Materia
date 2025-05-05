import '../../css/main.css';
import { createIcon } from '../../js/modules/icon';

export const createList = ({
  items = [],
  onSelect = () => { },
}) => {
  const list = document.createElement('div');
  list.className = 'list';

  items.forEach((item, index) => {
    const listItem = document.createElement('div');
    listItem.className = 'list__item';
    if (item.selected) listItem.classList.add('list__item--selected');
    if (item.disabled) listItem.classList.add('list__item--disabled');

    if (item.icon) {
      const icon = createIcon({
        symbol: item.icon,
        useMaterial: true,
        size: 'default',
      });
      icon.classList.add('list__icon');
      listItem.appendChild(icon);
    }

    const textWrapper = document.createElement('div');
    textWrapper.className = 'list__text';

    const mainText = document.createElement('div');
    mainText.className = 'list__text-main';
    mainText.textContent = item.text;
    textWrapper.appendChild(mainText);

    if (item.supportingText) {
      const supporting = document.createElement('div');
      supporting.className = 'list__text-supporting';
      supporting.textContent = item.supportingText;
      textWrapper.appendChild(supporting);
    }

    listItem.appendChild(textWrapper);

    if (item.meta) {
      const meta = document.createElement('div');
      meta.className = 'list__meta';
      meta.textContent = item.meta;
      listItem.appendChild(meta);
    }

    if (!item.disabled) {
      listItem.addEventListener('click', () => {
        onSelect(index);
      });
    }

    list.appendChild(listItem);
  });

  return list;
};
