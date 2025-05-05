import { createDivider } from '../../js/modules/divider';
import { createLabel, createSection, createSpacer } from '../helpers/storybook-helpers';

export default {
  title: 'Components/Divider',
  tags: ['autodocs'],
  render: (args) => createDivider(args),
  parameters: {
    docs: {
      description: {
        component: `
Dividers are visual cues that help organize content by separating elements into distinct sections. According to Material Design guidelines, dividers should be used to group related content or indicate a shift between sections, while maintaining clarity and consistency.

Dividers can be horizontal or vertical, depending on layout needs. They provide subtle separation without introducing strong visual weight. In complex layouts, dividers improve scannability, enhance hierarchy, and help maintain rhythm between elements.

### Divider Types

- **Standard** – A full-width horizontal divider.
  - **Usage:** Between sections in cards, dialogs, or standalone separators.
  - **Class:** \`.divider\`

- **Inset** – A horizontal divider with left indentation.
  - **Usage:** In lists, typically between list items where an icon or avatar aligns left.
  - **Class:** \`.divider .divider--inset\`

- **Vertical** – A vertical line between items.
  - **Usage:** Between columns, buttons or layout areas.
  - **Class:** \`.divider .divider--vertical\`

Always place dividers in appropriate containers to maintain consistent alignment.
        `,
      },
    },
  },
  argTypes: {
    dividerType: {
      control: { type: 'select' },
      options: ['standard', 'inset', 'vertical'],
      description: 'Type of divider to render'
    },
  },
  args: {
    dividerType: 'standard',
  },
};

export const LiveExample = (args) => {
  const container = document.createElement('div');
  container.style.padding = '1rem';
  container.style.border = '1px dashed var(--md-sys-color-outline-variant)';
  container.style.backgroundColor = 'var(--md-sys-color-surface)';
  container.style.gap = '1rem';
  container.style.alignItems = 'center';

  const before = document.createElement('div');
  before.className = 'body-medium';
  const after = document.createElement('div');
  after.className = 'body-medium';

  let divider;

  switch (args.dividerType) {
    case 'inset':
      container.style.display = 'block';
      before.textContent = 'List item A';
      after.textContent = 'List item B';
      divider = createDivider({ dividerType: 'inset' });
      break;
    case 'vertical':
      container.style.display = 'flex';
      container.style.flexDirection = 'row';
      container.style.height = '3rem';
      before.textContent = 'Left';
      after.textContent = 'Right';
      divider = createDivider({ dividerType: 'vertical' });
      break;
    case 'standard':
    default:
      container.style.display = 'block';
      before.textContent = 'Above';
      after.textContent = 'Below';
      divider = createDivider({ dividerType: 'standard' });
      break;
  }

  container.appendChild(before);
  container.appendChild(divider);
  container.appendChild(after);

  return container;
};

LiveExample.storyName = 'Live Example';
LiveExample.parameters = {
  docs: {
    description: {
      story: 'Interactive example with horizontal, vertical, and inset dividers.',
    },
  },
};


export const Showcase = () => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '2rem';
  wrapper.style.padding = '1rem';

  const sectionStandard = createSection();
  sectionStandard.appendChild(createLabel('Divider (standard):', 'body-large'));

  const container = document.createElement('div');
  container.style.padding = '1rem';
  container.style.background = 'var(--md-sys-color-surface)';
  container.style.borderRadius = '0.5rem';

  const before = document.createElement('div');
  before.className = 'body-medium';
  before.textContent = 'Content above the divider';

  const divider = createDivider({ dividerType: 'standard' });

  const after = document.createElement('div');
  after.className = 'body-medium';
  after.textContent = 'Content below the divider';

  container.appendChild(before);
  container.appendChild(divider);
  container.appendChild(after);

  sectionStandard.appendChild(container);

  const sectionInset = createSection();
  const labelInset = createLabel('Inset Divider (in list context):', 'body-large');
  labelInset.style.color = 'var(--md-sys-color-primary)';
  sectionInset.appendChild(labelInset);

  const listInsetExample = document.createElement('div');
  listInsetExample.className = 'list';
  listInsetExample.innerHTML = `
    <div class="list__item">
      <div class="list__text">
        <div class="list__text-main body-medium">Item A</div>
        <div class="list__text-supporting body-small">Created yesterday</div>
      </div>
      <div class="list__meta label-small">2 MB</div>
    </div>
    <hr class="divider divider--inset" />
    <div class="list__item">
      <div class="list__text">
        <div class="list__text-main body-medium">Item B</div>
        <div class="list__text-supporting body-small">Added today</div>
      </div>
      <div class="list__meta label-small">1.4 MB</div>
    </div>
    <hr class="divider divider--inset" />
    <div class="list__item">
      <div class="list__text">
        <div class="list__text-main body-medium">Item C</div>
        <div class="list__text-supporting body-small">Archived</div>
      </div>
      <div class="list__meta label-small">950 KB</div>
    </div>
  `;
  sectionInset.appendChild(listInsetExample);

  const sectionVertical = createSection();
  const labelVertical = createLabel('Vertical Divider (within layout):', 'body-large');
  labelVertical.style.color = 'var(--md-sys-color-primary)';
  sectionVertical.appendChild(labelVertical);

  const verticalWrapper = document.createElement('div');
  verticalWrapper.style.display = 'flex';
  verticalWrapper.style.gap = '1rem';
  verticalWrapper.style.alignItems = 'center';
  verticalWrapper.style.height = '3rem';
  verticalWrapper.style.border = '1px dashed var(--md-sys-color-outline-variant)';
  verticalWrapper.style.padding = '0.5rem';

  const left = document.createElement('span');
  left.textContent = 'Item A';
  left.className = 'body-medium';
  const dividerVertical = createDivider({ dividerType: 'vertical' });
  const right = document.createElement('span');
  right.textContent = 'Item B';
  right.className = 'body-medium';

  verticalWrapper.appendChild(left);
  verticalWrapper.appendChild(dividerVertical);
  verticalWrapper.appendChild(right);

  sectionVertical.appendChild(verticalWrapper);

  wrapper.appendChild(sectionStandard);
  wrapper.appendChild(sectionInset);
  wrapper.appendChild(sectionVertical);

  return wrapper;
};

Showcase.parameters = {
  docs: {
    description: {
      story: 'Visual examples of divider types: standard (full), inset (indented), and vertical.',
    },
  },
  backgrounds: {
    default: 'soft neutral',
    values: [
      { name: 'soft neutral', value: '#EDEDED' },
      { name: 'light surface', value: '#F4F4F4' },
      { name: 'dark gray', value: '#2E2E2E' },
    ],
  },
};



export const Divider = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'body-medium';
  wrapper.innerHTML = `Above content<hr class="divider" />Below content`;
  return wrapper;
};
Divider.storyName = 'Standard';
Divider.parameters = {
  docs: {
    description: {
      story: `
**Standard divider** – a full-width horizontal rule to separate sections.

**Class to use:** \`.divider\`

**Example:**

\`\`\`html
<hr class="divider" />
\`\`\`
      `,
    },
  },
};

export const Inset = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'body-medium';
  wrapper.innerHTML = `List item A<hr class="divider divider--inset" />List item B`;
  return wrapper;
};
Inset.parameters = {
  docs: {
    description: {
      story: `
**Inset divider** – used within lists to separate items while aligning visually with list content.

**Class to use:** \`.divider .divider--inset\`

**Example:**

\`\`\`html
<hr class="divider divider--inset" />
\`\`\`
      `,
    },
  },
};

export const Vertical = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.alignItems = 'center';
  container.style.gap = '1rem';
  container.style.height = '3rem';

  const left = document.createElement('span');
  left.className = 'body-medium';
  left.textContent = 'Item A';

  const divider = createDivider({ dividerType: 'vertical' });

  const right = document.createElement('span');
  right.className = 'body-medium';
  right.textContent = 'Item B';

  container.appendChild(left);
  container.appendChild(divider);
  container.appendChild(right);

  return container;
};

Vertical.parameters = {
  docs: {
    description: {
      story: `
**Vertical divider** – used to separate elements horizontally, such as between buttons or columns.

**Class to use:** \`.divider .divider--vertical\`

**Example:**

\`\`\`html
<div class="divider divider--vertical"></div>
\`\`\`
      `,
    },
  },
};