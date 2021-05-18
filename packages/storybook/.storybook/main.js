const { webpack: lernaAliases } = require('lerna-alias');

module.exports = {
  stories: ['../../../components/*/src/**/stories.js', '../../../packages/hoc/src/**/stories.js', '../../../packages/icons/src/**/stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs', '@storybook/addon-docs'],
  webpackFinal: async config => {
    config.resolve.alias = lernaAliases();
    return config;
  },
};