// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'webtest',
  tagline: 'webtest are cool',
  url: 'https://chenkaixia.github.io',
  baseUrl: '/',
  projectName: 'webtest',
  organizationName: 'chenkaixia',
  deploymentBranch:"main",
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

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
          src: 'https://sitecdn.zcycdn.com/f2e-assets/b609cee4-c7d7-45bf-86da-3f5263fb8fa1.svg'
        },
        items: [],
      },  prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
