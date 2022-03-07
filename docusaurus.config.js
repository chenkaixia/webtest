// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'idata',
  favicon: '/img/favicon.ico',
  url: 'https://chenkaixia.github.io',
  tagline:  'IData是一个现代化的大数据开发管理平台，提供完整的大数据开发流程，关注并聚焦于数据的全链路生命周期，便捷高效的满足大数据开发需求。',
  baseUrl: '/webtest/',
  projectName: 'webtest',
  organizationName: 'chenkaixia',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch:"deployment",
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'IData Pro',
        logo: {
          alt: 'IDATA',
          src: 'img/logo.svg'
        },
        items: [],
      },  prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
