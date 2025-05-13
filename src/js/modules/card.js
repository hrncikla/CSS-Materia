import { createIcon } from './icon';
import { createButton } from './button';

export const createCard = ({
  variant = '',
  media = false,
  icon = '',
  title = 'Card title',
  subtitle = '',
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  actions = [],
}) => {
  const card = document.createElement('div');
  card.classList.add('card');
  if (variant) card.classList.add(`card--${variant}`);

  // === Media Section ===
  if (media) {
    const mediaEl = document.createElement('div');
    mediaEl.className = 'card__media';
    mediaEl.style.backgroundColor = 'var(--md-sys-color-primary-container)';
    mediaEl.style.height = '200px';
    mediaEl.style.display = 'flex';
    mediaEl.style.alignItems = 'center';
    mediaEl.style.justifyContent = 'center';
    mediaEl.style.color = 'var(--md-sys-color-on-primary-container)';
    mediaEl.textContent = 'Media';
    card.appendChild(mediaEl);
  }

  // === Header Section ===
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

  // === Content Section ===
  if (content) {
    const contentEl = document.createElement('div');
    contentEl.className = 'card__content';
    contentEl.textContent = content;
    card.appendChild(contentEl);
  }

  // === Actions Section ===
  if (actions.length > 0) {
    const actionsEl = document.createElement('div');
    actionsEl.className = 'card__actions';

    actions.forEach(({ label, onClick = () => {} }) => {
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
