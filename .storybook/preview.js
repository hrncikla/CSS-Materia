import "../build/css/materia.min.css";

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,           // Enables color pickers for props like `background` or `color`
        date: /Date$/i,                          // Enables date pickers for props like `createdDate`
      },
    },
  },
};

export default preview;



