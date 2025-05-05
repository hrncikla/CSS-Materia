import '../../css/main.css';

export const createDivider = ({ dividerType = 'standard' }) => {
  const isVertical = dividerType === 'vertical';
  const isInset = dividerType === 'inset';

  const element = isVertical ? document.createElement('div') : document.createElement('hr');
  element.classList.add('divider');

  if (isVertical) element.classList.add('divider--vertical');
  if (isInset) element.classList.add('divider--inset');

  return element;
};
