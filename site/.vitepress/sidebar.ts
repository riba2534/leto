import { readdirSync, readFileSync, existsSync } from 'fs'
import { resolve, join } from 'path'
import { books } from './books'

function scanDir(dir: string, slug: string, langPrefix: string) {
  if (!existsSync(dir)) return []

  const files = readdirSync(dir)
    .filter(f => f.endsWith('.md') && f !== 'index.md')
    .sort((a, b) => {
      const aNum = parseInt(a.match(/^(\d+)/)?.[1] || '0')
      const bNum = parseInt(b.match(/^(\d+)/)?.[1] || '0')
      return aNum - bNum
    })

  return files.map(f => {
    const filePath = join(dir, f)
    const content = readFileSync(filePath, 'utf-8')

    let title = f.replace(/^\d+-/, '').replace(/\.md$/, '')
    const h1Match = content.match(/^#\s+(.+)$/m)
    if (h1Match) {
      title = h1Match[1].trim()
    }

    const slugName = f.replace(/\.md$/, '')
    return {
      text: title.length > 30 ? title.slice(0, 30) + '…' : title,
      link: `/books/${slug}/${langPrefix}${slugName}`,
    }
  })
}

export function generateSidebar() {
  const sidebar: Record<string, any> = {}

  for (const book of books) {
    const bookDir = resolve(__dirname, `../books/${book.slug}`)

    if (!existsSync(bookDir)) continue

    // 合集书籍：多本各自独立的子书
    if (book.subBooks) {
      for (const sub of book.subBooks) {
        const subDir = join(bookDir, sub.slug)
        const items = scanDir(subDir, book.slug, `${sub.slug}/`)
        const collapsed = items.length > 30

        sidebar[`/books/${book.slug}/${sub.slug}/`] = [
          {
            text: sub.title,
            collapsed,
            items: [
              { text: '📖 书籍简介', link: `/books/${book.slug}/${sub.slug}/` },
              ...items,
            ],
          },
        ]
      }
      continue
    }

    // 双语书籍：en/ 和 zh/ 子目录
    if (book.bilingual) {
      const enDir = join(bookDir, 'en')
      const zhDir = join(bookDir, 'zh')

      const enItems = scanDir(enDir, book.slug, 'en/')
      const zhItems = scanDir(zhDir, book.slug, 'zh/')

      const collapsed = (enItems.length || zhItems.length) > 30

      // 英文 sidebar
      sidebar[`/books/${book.slug}/en/`] = [
        {
          text: `${book.title} (EN)`,
          collapsed,
          items: [
            { text: '📖 书籍简介', link: `/books/${book.slug}/` },
            ...enItems,
          ],
        },
      ]

      // 中文 sidebar
      sidebar[`/books/${book.slug}/zh/`] = [
        {
          text: `${book.zhTitle || book.title} (中文)`,
          collapsed,
          items: [
            { text: '📖 书籍简介', link: `/books/${book.slug}/` },
            ...zhItems,
          ],
        },
      ]
    } else {
      // 单语书籍：原逻辑
      const items = scanDir(bookDir, book.slug, '')
      const collapsed = items.length > 30

      sidebar[`/books/${book.slug}/`] = [
        {
          text: book.title,
          collapsed,
          items: [
            { text: '📖 书籍简介', link: `/books/${book.slug}/` },
            ...items,
          ],
        },
      ]
    }
  }

  return sidebar
}
