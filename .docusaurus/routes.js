import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'd8a'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '3ac'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '072'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '2a9'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '496'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '0c9'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '016'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '2b0'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '076'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '527'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '1f4'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'a9c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '13b'),
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
    component: ComponentCreator('/', '3bd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
