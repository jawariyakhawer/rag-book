// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import {themes as prismThemes} from 'prism-react-renderer';

const book = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'book.config.json'), 'utf8'));

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `${book.bookTitle} | ${book.ownerFirstName}`,
  tagline: book.tagline,
  favicon: 'img/favicon.svg',

  future: {v4: true},

  url: book.siteUrl,
  baseUrl: '/',

  onBrokenLinks: 'throw',

  i18n: {defaultLocale: 'en', locales: ['en']},

  // Passed to the browser (chat widget reads these)
  customFields: {
    book,
    // On Vercel the API lives on the same domain. For local testing with `vercel dev`
    // the same relative URL works too. Override with CHAT_API_URL if the API is elsewhere.
    chatApiUrl: process.env.CHAT_API_URL || '/api/chat',
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {defaultMode: 'light', respectPrefersColorScheme: true},
      navbar: {
        title: `${book.bookTitle}`,
        logo: {alt: `${book.bookTitle} logo`, src: 'img/logo.svg'},
        items: [
          {type: 'docSidebar', sidebarId: 'bookSidebar', position: 'left', label: 'Read the Book'},
          {to: '/docs/module-08-generative-ai-llms', label: 'RAG & GenAI', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Book',
            items: [
              {label: 'Start reading', to: '/docs/'},
              {label: 'Syllabus overview', to: '/docs/module-01-python-foundations'},
            ],
          },
        ],
        copyright: `${book.edition} &middot; Based on the SMIT AI and Data Science syllabus by Javeria`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['python', 'bash', 'docker', 'yaml'],
      },
    }),
};

export default config;
