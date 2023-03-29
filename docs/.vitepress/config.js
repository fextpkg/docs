import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Fext",
  description: "Fext is a modern, small, fast, Go powered package manager for Python",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/about' },
      {
        text: 'v0.1.0',
        items: [
          { text: 'v0.1.0 (current)', link: '/about'}
        ]
      }
    ],

    sidebar: [
      {
        text: 'Main',
        items: [
          { text: 'About', link: '/about' },
          { text: 'Installation', link: '/install' },
          { text: 'Basic usage', link: '/basic-usage' }
        ]
      },
      {
        text: 'Commands',
        items: [
          { text: 'User commands', link: '/commands' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fextpkg/cli' }
    ]
  }
})
