---
title: 彼得·林奇教你理财
author: 彼得·林奇 (Peter Lynch)、约翰·罗瑟查尔德 (John Rothchild)
---

<script setup>
import { books } from '../../../.vitepress/books'

const book = books.find(b => b.slug === 'peter-lynch-collection')
const sub = book.subBooks.find(s => s.slug === 'learn-to-earn')
</script>

<div class="book-header">
  <div class="book-header__cover">
    <img :src="book.cover" :alt="sub.title" />
  </div>
  <div class="book-header__info">
    <h1 class="book-header__title">{{ sub.title }}</h1>
    <p v-if="sub.subtitle" class="book-header__subtitle">{{ sub.subtitle }}</p>
    <div class="book-header__meta">
      <p><strong>作者：</strong>{{ sub.author }}</p>
      <p v-if="sub.translator"><strong>译者：</strong>{{ sub.translator }}</p>
      <p v-if="sub.year"><strong>出版年份：</strong>{{ sub.year }}</p>
    </div>
    <p class="book-header__intro">{{ sub.intro }}</p>
    <div style="margin-top: 16px;">
      <a href="../" style="display: inline-block; padding: 6px 16px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 6px; text-decoration: none; color: var(--vp-c-text-1); font-size: 14px;">📚 返回彼得·林奇投资经典全集</a>
    </div>
  </div>
</div>

## 目录

1. [华章经典·金融投资](01-华章经典·金融投资)
2. [赞誉　一定要读的书](02-赞誉-一定要读的书)
3. [推荐序　美国股市启示录](03-推荐序-美国股市启示录)
4. [序言　补上投资这一课](04-序言-补上投资这一课)
5. [引言　开始留意身边的上市公司](05-引言-开始留意身边的上市公司)
6. [第1章　美国股市的前世今生](06-第1章-美国股市的前世今生)
7. [第2章　股市投资的基本原理](07-第2章-股市投资的基本原理)
8. [第3章　上市公司的生命周期](08-第3章-上市公司的生命周期)
9. [第4章　上市公司的成功秘诀](09-第4章-上市公司的成功秘诀)
10. [附录A　常用的选股工具](10-附录A-常用的选股工具)
11. [附录B　学会看财务报表](11-附录B-学会看财务报表)
12. [致谢](12-致谢)
13. [译者后记　我有一个梦想](13-译者后记-我有一个梦想)
14. [译者简介](14-译者简介)

---

*共 14 章*
