import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FAQ WIKI',
  tagline: '关于FAQ/朝樱沐——都在这里',
  favicon: '📕',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'FAQ WIKI',
      logo: {
        alt: '关于FAQ/朝樱沐——都在这里',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'README',
          position: 'left',
          label: 'Docs',
        },
        
        {
          href: 'https://github.com/Destino233',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '文档',
              to: '/docs',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'QQ群（朝樱沐主群）',
              href: 'https://qm.qq.com/cgi-bin/qm/qr?k=pWlpFnfg0dY-XLJj2bvYjUXoJOjbMFbJ&jump_from=webapi&authKey=rLqI7AMJ+NGs+987ukQCAMDtslETJzP7Fh4vNQnzR34UABTUGpP/37PMrAJ1PmrW',
            },
            {
              label: 'QQ群（朝樱沐子服FAQ生电服）',
              href: 'https://qm.qq.com/cgi-bin/qm/qr?k=8FmqBMwJh5UH1n0P60sAUE0J7ZwjLZMo&jump_from=webapi&authKey=auDSuOH6OQZev+SFL+NIe6N0AGzsAuON6EFHNCzjEw1oG5L2dVOmU4yGRXQkKWb/',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: 'Docusaurus',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Destino, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
