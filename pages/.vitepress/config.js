import { defineConfig } from "vitepress"

export default defineConfig({
  title: "Fext",
  description: "Fext is a modern, small, fast, Go powered package manager for Python",
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/about" },
      {
        text: "v0.4.1",
        items: [
          { text: "Changelog", link: "https://github.com/fextpkg/cli/releases"},
        ]
      }
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "About", link: "/about" },
          { text: "Installation", link: "/install" },
          { text: "Differences", link: "/differences" },
          { text: "Getting started", link: "/getting-started" },
        ]
      },
      {
        text: "Commands",
        collapsed: false,
        items: [
          { text: "fext install", link: "/cli/install" },
          { text: "fext uninstall", link: "/cli/uninstall" },
          { text: "fext freeze", link: "/cli/freeze" },
          { text: "fext show", link: "/cli/show" },
          { text: "fext check", link: "/cli/check" },
          { text: "fext debug", link: "/cli/debug" },
        ],
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/fextpkg/cli" },
    ],
    footer: {
      message: "The project is still in development and does not have a stable version.",
      copyright: "Released under the MIT License.",
    }
  }
})
