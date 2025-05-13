import { fn } from '@storybook/test';
import { createCard } from '../../js/modules/card';
import { createStoryWrapper } from '../helpers/storybook-helpers';

export default {
  title: 'Components/Card',
  tags: ['autodocs'],
  render: (args) => createCard(args),
  parameters: {
    docs: {
      description: {
        component: [
          'Cards are flexible containers for content and actions, following Material Design 3 guidelines.',
          '',
          '**Key Features:**',
          '- Headers with title, subtitle, and optional icons',
          '- Media support (images, videos)',
          '- Action buttons',
          '- Filled, outlined, and elevated variants',
          '',
          '**Available Classes:**',
          '- `.card` – base card component',
          '- `.card--filled` – filled variant with primary container background',
          '- `.card--outlined` – border-only card without shadow',
          '- `.card__media` – image or media block',
          '- `.card__header` – container for icons, titles, and subtitles',
          '- `.card__icon` – circular icon or avatar',
          '- `.card__header-title` – primary heading',
          '- `.card__header-subtitle` – secondary text',
          '- `.card__content` – main body text area',
          '- `.card__actions` – container for action buttons',
          '',
          '**HTML Example:**',
          '',
          '```html',
          '<div class="card card--filled">',
          '  <div class="card__header">',
          '    <div class="card__icon">',
          '      <span class="material-symbols-outlined">folder</span>',
          '    </div>',
          '    <div class="card__header-text">',
          '      <div class="card__header-title">Card Title</div>',
          '      <div class="card__header-subtitle">Card Subtitle</div>',
          '    </div>',
          '  </div>',
          '  <div class="card__content">',
          '    Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          '  </div>',
          '  <div class="card__actions">',
          '    <button class="button button--text">Action</button>',
          '  </div>',
          '</div>',
          '```'
        ].join('\n'),
      },
    },
  },
argTypes: {
  variant: {
    control: { type: 'select' },
    options: ['', 'filled', 'outlined'],
  },
  icon: {
    control: { type: 'select' },
    options: ['', 'shopping_bag', 'image', 'favorite', 'person', 'folder'],
  },
  title: { control: 'text' },
  subtitle: { control: 'text' },
  content: { control: 'text' },
  media: { control: 'boolean' },
},
args: {
  variant: '',
  icon: '',
  title: 'Card Title',
  subtitle: 'Card Subtitle',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  media: false,
},

};

export const LiveExample = (args) => {
  const wrapper = createStoryWrapper();
  const card = createCard(args);
  wrapper.appendChild(card);
  return wrapper;
};
LiveExample.storyName = 'Live Example';
LiveExample.parameters = {
  docs: {
    description: {
      story: '**Interactive card** with live controls for title, subtitle, icon, and more.\n\n```html\n<div class="card card--filled">\n  <div class="card__header">\n    <div class="card__icon">\n      <span class="material-symbols-outlined">folder</span>\n    </div>\n    <div class="card__header-text">\n      <div class="card__header-title">Card Title</div>\n      <div class="card__header-subtitle">Card Subtitle</div>\n    </div>\n  </div>\n  <div class="card__content">Lorem ipsum dolor sit amet.</div>\n</div>\n```',
    },
  },
};

export const Showcase = () => {
  const wrapper = createStoryWrapper();
  wrapper.style.display = 'grid';
  wrapper.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
  wrapper.style.gap = '1.5rem';
  wrapper.style.padding = '1.5rem';

  const examples = [
    {
      title: 'Basic Card',
      content: 'This is a default elevated card with title and content only.',
    },
    {
      variant: 'outlined',
      title: 'Outlined Card',
      subtitle: 'No shadow, just a border',
      content: 'Outlined cards emphasize structure.',
    },
    {
      variant: 'filled',
      title: 'Filled Card',
      subtitle: 'Surface-variant background',
      content: 'Filled cards offer more color contrast.',
    },
    {
      mediaSrc: 'https://via.placeholder.com/400x200',
      title: 'Card with Media',
      content: 'A card featuring a top image.',
    },
    {
      icon: 'folder',
      title: 'Card with Icon',
      subtitle: 'Visual identity with `.card__icon`',
      content: 'Icons help represent the card\'s purpose.',
    },

  ];

  examples.forEach((args) => {
    const card = createCard({
      ...args,
      actions: args.actions?.map(({ label, onClick }) => ({
        label,
        onClick,
      })) || [],
    });
    wrapper.appendChild(card);
  });

  return wrapper;
};
Showcase.parameters = {
  docs: {
    description: {
      story: '**Showcase of multiple card configurations**: filled, outlined, with media, icons, and actions.\n',
    },
  },
};

export const Filled = () => {
  const wrapper = createStoryWrapper();
  const card = createCard({
    variant: 'filled',
    title: 'Filled Card',
    subtitle: 'Surface-variant background',
    content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  });
  wrapper.appendChild(card);
  return wrapper;
};
Filled.parameters = {
  docs: {
    description: {
      story: [
        'A card styled with the `filled` variant using `.card--filled`, providing a surface-variant background.',
        '',
        '```html',
        '<div class="card card--filled">',
        '  <div class="card__header">',
        '    <div class="card__header-text">',
        '      <div class="card__header-title">Filled Card</div>',
        '      <div class="card__header-subtitle">Surface-variant background</div>',
        '    </div>',
        '  </div>',
        '  <div class="card__content">',
        '     Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        '  </div>',
        '</div>',
        '```'
      ].join('\n'),
    },
  },
};

export const Outlined = () => {
  const wrapper = createStoryWrapper();
  const card = createCard({
    variant: 'outlined',
    title: 'Outlined Card',
    subtitle: 'No shadow, just border',
    content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  });
  wrapper.appendChild(card);
  return wrapper;
};
Outlined.parameters = {
  docs: {
    description: {
      story: [
        'A card using the `outlined` variant with `.card--outlined` class to show a border and no elevation.',
        '',
        '```html',
        '<div class="card card--outlined">',
        '  <div class="card__header">',
        '    <div class="card__header-text">',
        '      <div class="card__header-title">Outlined Card</div>',
        '      <div class="card__header-subtitle">No shadow, just border</div>',
        '    </div>',
        '  </div>',
        '  <div class="card__content">',
        '     Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        '  </div>',
        '</div>',
        '```'
      ].join('\n'),
    },
  },
};
export const WithMedia = () => {
  const wrapper = createStoryWrapper();
  const card = createCard({
    media: true,
    title: 'Card with Media',
    subtitle: 'Media above content',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  });
  wrapper.appendChild(card);
  return wrapper;
};
WithMedia.parameters = {
  docs: {
    description: {
      story: [
        'A card that includes a media section using the `.card__media` class.',
        '',
        '```html',
        '<div class="card">',
        '  <div class="card__media">Media</div>',
        '  <div class="card__header">',
        '    <div class="card__header-text">',
        '      <div class="card__header-title">Card with Media</div>',
        '      <div class="card__header-subtitle">Media above content</div>',
        '    </div>',
        '  </div>',
        '  <div class="card__content">',
        '    Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        '  </div>',
        '</div>',
        '```'
      ].join('\n'),
    },
  },
};
