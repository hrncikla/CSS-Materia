// storybook-helpers.js

/**
 * Creates a styled text label with typography and spacing.
 * @param {string} text - The text content.
 * @param {string} type - The typography style (e.g. "body-medium", "label-large").
 * @returns {HTMLDivElement}
 */
export const createLabel = (text, type = 'body-large') => {
  const label = document.createElement('div');
  label.textContent = text;
  label.classList.add(type);
  label.style.marginBottom = '0.25rem';
  label.style.color = 'var(--md-sys-color-primary)';

  return label;
};

/**
 * Creates a section wrapper with spacing and consistent layout.
 * @returns {HTMLDivElement}
 */
export const createSection = () => {
  const section = document.createElement('div');
  section.style.marginBottom = '2rem';
  section.style.display = 'flex';
  section.style.flexDirection = 'column';
  section.style.gap = '0.5rem';
  return section;
};

/**
 * Adds a vertical space between blocks.
 * @param {string} height - The height of the space (e.g. "1rem").
 * @returns {HTMLDivElement}
 */
export const createSpacer = (height = '0.5rem') => {
  const spacer = document.createElement('div');
  spacer.style.height = height;
  return spacer;
};


/**
 * Creates a consistent wrapper for story examples that need larger preview area.
 * Useful for dialog, overlays, modals, and floating components.
 *
 * @param {string} minHeight - Optional custom min-height (e.g. '500px', '80vh'). Defaults to '300px'.
 * @param {string} offsetX - Optional horizontal offset (e.g. '4rem', '100px'). Defaults to '0'.
 * @returns {HTMLDivElement} A styled wrapper div element.
 */
export const createStoryWrapper = (minHeight = '300px', offsetX = '0') => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '2rem';
  wrapper.style.padding = '2rem';
  wrapper.style.minHeight = minHeight;
  wrapper.style.marginLeft = offsetX;
  wrapper.style.alignItems = 'flex-start';
  return wrapper;
};



/**
 * Creates a colored box (e.g. for tokens or color previews)
 * @param {string} backgroundColor - Background color of the box
 * @param {string} label - Text inside the box
 * @param {string} textColor - Optional custom text color
 * @returns {HTMLDivElement}
 */
export const createColorBox = (backgroundColor, label = '', textColor = '#000') => {
  const box = document.createElement('div');
  box.className = 'token-box';
  box.style.backgroundColor = backgroundColor;
  box.style.color = textColor;
  box.style.display = 'flex';
  box.style.alignItems = 'center';
  box.style.justifyContent = 'center';
  box.style.height = '100px';
  box.style.width = '100%';
  box.style.borderRadius = '6px';
  box.style.border = '1px solid rgba(0, 0, 0, 0.1)';
  box.style.fontSize = '14px';
  box.style.fontWeight = 'bold';
  box.style.padding = '10px';
  box.style.lineHeight = '1.2';
  box.style.textAlign = 'center';
  box.style.wordBreak = 'break-word';
  box.textContent = label;
  return box;
};
