import '../../css/main.css';

import { createIcon } from './icon';
import { createButton } from './button';

export const createCard = ({
  variant = '',
  mediaSrc = '',
  icon = '',
  title = 'Card title',
  subtitle = '',
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  actions = [],
}) => {
  const card = document.createElement('div');
  card.classList.add('card');
  if (variant) card.classList.add(`card--${variant}`);

  if (mediaSrc) {
    const media = document.createElement('img');
    media.src = mediaSrc;
    media.alt = '';
    media.className = 'card__media';
    card.appendChild(media);
  }

  if (icon || title || subtitle) {
    const header = document.createElement('div');
    header.className = 'card__header';

    if (icon) {
      const iconEl = createIcon({
        symbol: icon,
        useMaterial: true,
        size: 'default',
      });
      iconEl.classList.add('card__icon');
      header.appendChild(iconEl);
    }

    const headerText = document.createElement('div');
    headerText.className = 'card__header-text';

    if (title) {
      const titleEl = document.createElement('div');
      titleEl.className = 'card__header-title';
      titleEl.textContent = title;
      headerText.appendChild(titleEl);
    }

    if (subtitle) {
      const subtitleEl = document.createElement('div');
      subtitleEl.className = 'card__header-subtitle';
      subtitleEl.textContent = subtitle;
      headerText.appendChild(subtitleEl);
    }

    header.appendChild(headerText);
    card.appendChild(header);
  }

  if (content) {
    const contentEl = document.createElement('div');
    contentEl.className = 'card__content';
    contentEl.textContent = content;
    card.appendChild(contentEl);
  }

  if (actions.length > 0) {
    const actionsEl = document.createElement('div');
    actionsEl.className = 'card__actions';

    actions.forEach(({ label, onClick = () => { } }) => {
      const btn = createButton({
        label,
        variant: 'text',
        onClick,
      });
      actionsEl.appendChild(btn);
    });

    card.appendChild(actionsEl);
  }

  return card;
};
