import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    brandTitle: 'My Materia',
    brandImage: 'my_materia_logo_no_bg.svg',
    brandTarget: '/?path=/docs/my-materia--docs', 
    base: 'light',

    appBg: '#e8f5e9',
    barBg: '#ede7f6',
    appBorderColor: '#d1c4e9',
    colorPrimary: '#7e57c2',
    colorSecondary: '#f06292',
  }),
});
