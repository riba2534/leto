import { readdirSync, readFileSync, existsSync } from 'fs'
import { resolve, join } from 'path'
import { books } from './books'

export function generateSidebar() {
  const sidebar: Record<string, any> = {}

  for (const book of books) {
    const bookDir = resolve(__dirname, `../books/${book.slug}`)

    if (!existsSync(bookDir)) continue

    const files = readdirSync(bookDir)
      .filter(f => f.endsWith('.md') && f !== 'index.md')
      .sort((a, b) => {
        // 按数字前缀排序
        const aNum = parseInt(a.match(/^(\d+)/)?.[1] || '0')
        const bNum = parseInt(b.match(/^(\d+)/)?.[1] || '0')
        return aNum - bNum
      })

    const items = files.map(f => {
      const filePath = join(bookDir, f)
      const content = readFileSync(filePath, 'utf-8')

      // 尝试从第一个 H1 提取标题
      let title = f.replace(/^\d+-/, '').replace(/\.md$/, '')
      const h1Match = content.match(/^#\s+(.+)$/m)
      if (h1Match) {
        title = h1Match[1].trim()
      }

      return {
        text: title.length > 30 ? title.slice(0, 30) + '…' : title,
        link: `/books/${book.slug}/${f.replace(/\.md$/, '')}`,
      }
    })

    sidebar[`/books/${book.slug}/`] = [
      {
        text: book.title,
        items: [
          { text: '📖 书籍简介', link: `/books/${book.slug}/` },
          ...items,
        ],
      },
    ]
  }

  return sidebar
}
