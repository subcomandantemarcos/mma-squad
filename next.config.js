const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  i18n
};

module.exports = nextConfig;
