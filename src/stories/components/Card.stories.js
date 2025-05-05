import { fn } from '@storybook/test';
import { createCard } from '../../js/modules/card';
import { createButton } from '../../js/modules/button';
import { createStoryWrapper } from '../helpers/storybook-helpers';

export default {
  title: 'Components/Card',
  tags: ['autodocs'],
  render: (args) => createCard(args),
  parameters: {
    docs: {
      description: {
        component: [
          'Cards are surfaces that display content and actions on a single topic. They follow Material Design 3 guidelines and come in several layout variants.',
          '',
          '### Card Features',
          '- **Header section** with title, subtitle and optional icon/avatar',
          '- **Media support** (image, video, etc.)',
          '- **Main content** block',
          '- **Action buttons** for interaction',
          '- **Variants**: filled, outlined, default (elevated)',
          '',
          'The `icon` field uses the custom `createIcon` function to render Material Symbols in the card header.',
          '',
          '### Available Classes',
          '- `.card` – base card component',
          '- `.card--filled` – filled variant with surface-variant background',
          '- `.card--outlined` – border-only card with no shadow',
          '- `.card__media` – image/media block',
          '- `.card__header` – container for icon and title/subtitle',
          '- `.card__icon` – circular icon/avatar',
          '- `.card__header-title` – primary heading',
          '- `.card__header-subtitle` – secondary text',
          '- `.card__content` – body text area',
          '- `.card__actions` – container for action buttons',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['', 'filled', 'outlined'],
    },
    mediaSrc: { control: 'text' },
    icon: {
      control: { type: 'select' },
      options: ['', 'shopping_bag', 'image', 'favorite', 'person'],
    },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    content: { control: 'text' },
  },
  args: {
    variant: '',
    mediaSrc: '',
    icon: '',
    title: 'Card title',
    subtitle: '',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
      story: 'An interactive card with editable content, media, icon, and actions.',
    },
  },
};

export const Showcase = () => {
  const wrapper = createStoryWrapper();
  wrapper.style.display = 'flex';
  wrapper.style.flexWrap = 'wrap';
  wrapper.style.gap = '1.5rem';
  wrapper.style.backgroundColor = '#F4F4F4';
  wrapper.style.padding = '1rem';

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
      mediaSrc: 'https://via.placeholder.com/400x160',
      title: 'Card with Media',
      content: 'A card featuring a top image.',
    },
    {
      icon: 'shopping_bag',
      title: 'Card with Icon',
      subtitle: 'Visual identity with `.card__icon`',
      content: 'Icons help represent the card\'s purpose.',
    },
    {
      title: 'Card with Actions',
      content: 'This card uses your framework buttons.',
      actions: [
        { label: 'OK', onClick: fn() },
        { label: 'Cancel', onClick: fn() },
      ],
    },
    {
      mediaSrc: 'https://via.placeholder.com/400x160',
      variant: 'outlined',
      icon: 'image',
      title: 'All Features',
      subtitle: 'Full header + media + actions',
      content: 'This card demonstrates all features together.',
      actions: [
        { label: 'OK', onClick: fn() },
        { label: 'Cancel', onClick: fn() },
      ],
    },
  ];

  examples.forEach((args) => {
    const card = createCard({
      ...args,
      actions: args.actions?.map(({ label, onClick }) => createButton({
        label,
        variant: 'text',
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
      story: 'Showcase of multiple card configurations combining media, headers, icons, and actions.',
    },
  },
};





export const Filled = () => {
  const wrapper = createStoryWrapper();
  const card = createCard({
    variant: 'filled',
    title: 'Filled Card',
    subtitle: 'Surface-variant background',
    content: 'This card uses the `.card--filled` class and primary container color.',
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
        '**HTML Example:**',
        '```html',
        '<div class="card card--filled">',
        '  <div class="card__header">',
        '    <div class="card__header-text">',
        '      <div class="card__header-title">Filled Card</div>',
        '      <div class="card__header-subtitle">Surface-variant background</div>',
        '    </div>',
        '  </div>',
        '  <div class="card__content">',
        '    This card uses the `.card--filled` class and primary container color.',
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
    content: 'This card uses the `.card--outlined` class for a low emphasis layout.',
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
        '**HTML Example:**',
        '```html',
        '<div class="card card--outlined">',
        '  <div class="card__header">',
        '    <div class="card__header-text">',
        '      <div class="card__header-title">Outlined Card</div>',
        '      <div class="card__header-subtitle">No shadow, just border</div>',
        '    </div>',
        '  </div>',
        '  <div class="card__content">',
        '    This card uses the `.card--outlined` class for a low emphasis layout.',
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
    mediaSrc: 'https://via.placeholder.com/400x200',
    title: 'Card with Media',
    subtitle: 'Media above content',
    content: 'A card that includes a media section using the `.card__media` class.',
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
        '**HTML Example:**',
        '```html',
        '<div class="card">',
        '  <img src="..." class="card__media" alt="">',
        '  <div class="card__header">',
        '    <div class="card__header-text">',
        '      <div class="card__header-title">Card with Media</div>',
        '      <div class="card__header-subtitle">Media above content</div>',
        '    </div>',
        '  </div>',
        '  <div class="card__content">',
        '    A card that includes a media section using the `.card__media` class.',
        '  </div>',
        '</div>',
        '```'
      ].join('\n'),
    },
  },
};
