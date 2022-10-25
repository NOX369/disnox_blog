/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  skill: [
    'skill/introduction',
    {
      label: 'Linux',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/linux',
        },
      ],
    },
    {
      label: 'C语言',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/c',
        },
      ],
    },
    {
      label: '硬件基础',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/hardware',
        },
      ],
    },
    {
      label: '杂项',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/other',
        },
      ],
    },
  ],
  tools: [
    'tools/introduction',
    'tools/everything-quick-search-local-files',
    'tools/windows-custom-right-click-menu',
    'tools/windows-terminal-beautify',
    'tools/vscode-config',
  ]
}

module.exports = sidebars
