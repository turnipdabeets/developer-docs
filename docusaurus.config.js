// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Beyond Identity Developer Docs',
  tagline:
    'The easiest way to implement passwordless secure authentication with passkeys on Web, iOS, Android, React Native and Flutter',
  url: 'https://developer.beyondidentity.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'gobeyondidentity', // Usually your GitHub org/user name.
  projectName: 'developer-docs', // Usually your repo name.
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid', '@markprompt/docusaurus-theme-search'],

  presets: [
    [
      'docusaurus-preset-classic',
      {
        gtag: {
          trackingID: 'GTM-K3TCQSV',
          anonymizeIP: false,
        },
        docs: {
          id: 'first', // force ignore docs generated by v0, we want docs to live on the plugin
          path: 'nodocs',
          routeBasePath: 'nodocs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    
    [
      'redocusaurus',
      {
        id: 'apiv1',
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'static/api/v1/openapi.yaml',
            url: 'api/v1/openapi.yaml',
            route: 'api/v1',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#5077c5',
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'default', // these are the default docs, any versioning will happen here
        path: 'docs',
        routeBasePath: 'docs',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/gobeyondidentity/developer-docs/blob/v1',
        lastVersion: 'current',
        versions: {
          current: {
            label: 'v1',
            path: 'v1',
          },
        },
        remarkPlugins: [
          [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          [
            require('docusaurus-remark-plugin-tab-blocks'),
            {
              sync: true,
              labels: [
                ['win', 'Windows'],
                ['mac', 'macOS'],
              ],
            },
          ],
        ],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides', // these are the default docs, any versioning will happen here
        path: 'guides',
        routeBasePath: 'guides',
        sidebarPath: require.resolve('./sidebarsGuides.js'),
        remarkPlugins: [
          [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          [
            require('docusaurus-remark-plugin-tab-blocks'),
            {
              sync: true,
              labels: [
                ['win', 'Windows'],
                ['mac', 'macOS'],
              ],
            },
          ],
        ],
      },
    ],
  ],
  scripts: [
    {
      src: 'https://cdn.optimizely.com/js/22297341556.js',
      async: false,
    },
    {
      src: '/js/loadtags.js',
      async: true,
    },
  ],
  themeConfig: {
    // /** @type {import('@markprompt/docusaurus-theme-search').ThemeConfig} */
    markprompt: {
      projectKey: 'Your Markprompt key',
      trigger: { floating: true },
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    metadata: [
      {
        property: 'og:description',
        content: 'Developer Docs for passwordless authentication',
      },
      {
        property: 'og:image',
        content:
          'https://www.beyondidentity.com/sites/default/files/2023-02/zero-trust-announce.png',
      },
      { name: 'twitter:card', content: 'Beyond Identity Developer Docs' },
    ],
    navbar: {
      title: 'Developer Docs',
      logo: {
        alt: 'Beyond Identity',
        src: 'img/logo.svg',
        width: 60,
        height: 55,
      },
      items: [
        // { // remove this and see if anybody complains
        //   type: 'docsVersionDropdown',
        //   position: 'left',
        //   dropdownActiveClassDisabled: false,
        // },
        {
          type: 'doc',
          docId: 'introduction',
          position: 'left',
          label: 'Documentation',
        },
        { to: '/guides', label: 'Guides', position: 'left' },
        { to: '/api/v1', label: 'REST API', position: 'left' },
        {
          type: 'dropdown',
          label: 'Use Cases',
          items: [
            {
              href: 'https://www.beyondidentity.com/developers/industries/cryptocurrency',
              label: 'Cryptocurrency',
            },
            {
              href: 'https://www.beyondidentity.com/developers/industries/fintech',
              label: 'Fintech',
            },
            {
              href: 'https://www.beyondidentity.com/developers/industries/travel-hospitality',
              label: 'Travel-Hospitality',
            },
            {
              href: 'https://www.beyondidentity.com/developers/industries/media',
              label: 'Media',
            },
            {
              href: 'https://www.beyondidentity.com/developers/industries/e-commerce',
              label: 'E-Commerce',
            },
          ],
        },
        {
          href: 'https://www.beyondidentity.com/developers/signup',
          label: 'Signup',
          position: 'right',
        },
        {
          type: 'dropdown',
          label: 'Login',
          position: 'right',
          items: [
            {
              href: 'https://console-us.beyondidentity.com/login',
              label: 'Login-US',
            },
            {
              href: 'https://console-eu.beyondidentity.com/login',
              label: 'Login-EU',
            },
          ],
        },
        {
          href: 'https://join.slack.com/t/byndid/shared_invite/zt-1anns8n83-NQX4JvW7coi9dksADxgeBQ',
          label: 'Join Slack',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              href: 'https://github.com/gobeyondidentity',
              label: 'GitHub',
              position: 'right',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/beyondidentity',
            },
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/byndid/shared_invite/zt-1anns8n83-NQX4JvW7coi9dksADxgeBQ',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/BI_Developers',
            },
            {
              label: 'DevTo',
              href: 'https://dev.to/beyondidentity',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://www.beyondidentity.com/developers/blog',
            },
            
          ],
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['dart', 'kotlin', 'swift'],
    },
    hubspot: {
      accountId: '7364297',
    },
    announcementBar: {
      id: 'hello_world',
      content:
        'Hello world! <a target="_blank" rel="noopener noreferrer" href="https://www.beyondidentity.com/developers/blog/hello-world-presenting-beyond-identity-universal-passkey-sdks-and-apis-developers">Presenting Beyond Identity Universal Passkey SDKs and APIs for Developers.</a>',
      backgroundColor: '#5077c5',
      textColor: '#ffffff',
      isCloseable: true,
    },
  },
};

module.exports = config;
