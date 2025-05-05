/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',   // Loads all Storybook stories and MDX docs from the src folder
    '../src/**/*.mdx',                            // Explicitly includes standalone MDX documentation files like "Configure.mdx"
  ],

  addons: [
    "@storybook/addon-essentials",                // Includes controls, docs, viewport, actions, etc.
    "@chromatic-com/storybook",                   // Adds Chromatic integration for visual regression testing
    "@storybook/addon-actions",                   // Allows logging actions 
    "@storybook/addon-interactions",              // Enables interaction testing 
  ],

  framework: {
    name: "@storybook/html-vite",           
    options: {},
  },
};

export default config;
