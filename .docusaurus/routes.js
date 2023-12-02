import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '4bf'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '392'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '462'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'c6e'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '118'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '39d'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'dd6'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'c39'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '467'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'dc4'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'c95'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'ab1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd36'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '6bb'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '547'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '51b'),
                exact: true,
                sidebar: "FAQ"
              },
              {
                path: '/docs/fakeplayer',
                component: ComponentCreator('/docs/fakeplayer', '747'),
                exact: true,
                sidebar: "FAQ"
              },
              {
                path: '/docs/getting-started/config',
                component: ComponentCreator('/docs/getting-started/config', 'c1b'),
                exact: true,
                sidebar: "FAQ"
              },
              {
                path: '/docs/getting-started/intro',
                component: ComponentCreator('/docs/getting-started/intro', 'e42'),
                exact: true,
                sidebar: "FAQ"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'aed'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
