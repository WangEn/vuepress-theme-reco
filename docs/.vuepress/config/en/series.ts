export const series = {
  // todo README.md 无法展示，没有对 '' 进行处理
  '/en/docs/guide/': [
    'introduce',
    'getting-started',
    'style',
    'icon',
    'folder-specification',
    'contribute',
  ],
  '/en/docs/theme/': [
    {
      text: 'Frontmatter',
      children: ['frontmatter-page', 'frontmatter-home'],
    },
    {
      text: 'Theme Configuration',
      children: [
        'series',
        'navbar',
        'comments',
        'auto-set-category',
        'bulletin-popover',
        'register-components',
        'password',
        'appearance',
        'custom-catalog-title',
        'custom-primary-color',
      ],
    },
    {
      text: 'Markdown Extension',
      children: [
        'custom-container',
        'markdown-task',
        'markdown-vue-preview',
        'markdown-file-parse',
      ],
    },
    {
      text: 'Other',
      children: ['custom-style'],
    },
  ],
  '/en/docs/plugins/': ['page', 'comments', 'vue-previews', 'bulletin-popover'],
}
