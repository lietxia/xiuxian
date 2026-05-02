import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

// 中文分词器 - 使用 Intl.Segmenter（Node 16+ / 现代浏览器原生支持）
function chineseTokenizer(text: string): string[] {
  return Array.from(
    new Intl.Segmenter('zh-CN', { granularity: 'word' }).segment(text)
  ).filter(s => s.isWordLike).map(s => s.segment)
}

const vitePressConfig = defineConfig({
  title: '修仙设定Wiki',
  description: '完整的修仙世界设定知识库',
  lang: 'zh-CN',
  
  // 构建优化
  cleanUrls: true,
  ignoreDeadLinks: false, // 用户明确要求false

  // SEO - 部署后替换为实际域名
  sitemap: {
    hostname: 'https://xiuxian.pages.dev',
  },
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#6366f1' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh-CN' }],
  ],

  themeConfig: {
    siteTitle: '修仙设定Wiki',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '世界观', link: '/worldbuilding/' },
      { text: '修炼体系', link: '/cultivation/' },
      { text: '功法法术', link: '/techniques/' },
      { text: '资源物品', link: '/resources/' },
      { text: '势力组织', link: '/factions/' },
      { text: '世界地理', link: '/geography/' },
      { text: '神兽妖兽', link: '/creatures/' },
      { text: '人物设定', link: '/characters/' },
      { text: '写作参考', link: '/writing-guide/' },
    ],

    // 搜索：中文分词 + 正确的翻译位置
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '清除查询条件',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有找到相关结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        },
        miniSearch: {
          options: {
            tokenize: chineseTokenizer,
            processTerm: (term: string) => term.toLowerCase()
          },
          searchOptions: {
            fuzzy: 0.3,  // 中文需要更宽松的模糊匹配
            prefix: true,
            boost: { title: 4, text: 2, titles: 1 }
          }
        }
      }
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short'
      }
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    returnToTopLabel: '返回顶部',

    editLink: {
      pattern: 'https://github.com/xiuxian-wiki/xiuxian/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiuxian-wiki/xiuxian' }
    ],

    footer: {
      message: '修仙设定Wiki - 完整的修仙世界设定知识库',
      copyright: '© 2024 修仙设定Wiki'
    },
  },

  vite: {
    build: {
      chunkSizeWarningLimit: 1000,
    }
  }
})

// 自动侧边栏配置
export default withSidebar(vitePressConfig, {
  documentRootPath: '/docs',
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  collapsed: true,
  collapseDepth: 2,
  excludeFilesByFrontmatterFieldName: 'exclude',
  rootGroupText: '修仙设定Wiki',
  hyphenToSpace: true,
  underscoreToSpace: true,
})
