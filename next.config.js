/* eslint-disable */

const { withFrameWorkConfig } = require('./src/framework/shared/config');

module.exports = withFrameWorkConfig({
  reactStrictMode: true,
  framework: {
    name: "shopify"
  },
  i18n: {
    locales: ['en-US', 'pt-br', 'es'],
    defaultLocale: 'pt-br',
  },
});

