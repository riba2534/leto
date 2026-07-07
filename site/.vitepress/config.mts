import { defineConfig } from 'vitepress'
import { books } from './books'
import { generateSidebar } from './sidebar'
import footnote from 'markdown-it-footnote'

export default defineConfig({
  title: 'Leto 投资书籍合集',
  description: 'Leto 推荐的投资经典书籍在线阅读',

  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: false,

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#b8863f' }],
    ['meta', { property: 'og:title', content: 'Leto 投资书籍合集' }],
    ['meta', { property: 'og:description', content: 'Leto 推荐的投资经典书籍在线阅读' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: '/covers/lifecycle-investing.jpg' }],
  ],

  themeConfig: {
    logo: '/favicon.png',

    nav: [
      { text: '首页', link: '/' },
      ...books.map(b => ({
        text: b.title,
        link: `/books/${b.slug}/`,
      })),
    ],

    sidebar: generateSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hepengcheng/leto' },
    ],

    search: {
      provider: 'local',
    },

    footer: {
      message: '仅供学习交流使用',
      copyright: '版权归原作者所有',
    },

    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    docFooter: {
      prev: '上一章',
      next: '下一章',
    },

    lastUpdatedText: '最后更新',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },

  markdown: {
    config(md) {
      md.use(footnote)
    },
  },

  sitemap: {
    hostname: 'https://leto.fate.red',
  },
})
