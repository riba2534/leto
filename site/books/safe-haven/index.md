---
title: 避风港
author: 马克·斯皮茨纳格尔 (Mark Spitznagel)
---

<script setup>
import { books } from '../../.vitepress/books'

const book = books.find(b => b.slug === 'safe-haven')
</script>

<div class="book-header">
  <div class="book-header__cover">
    <img :src="book.cover" :alt="book.title" />
  </div>
  <div class="book-header__info">
    <h1 class="book-header__title">{{ book.title }}</h1>
    <p v-if="book.subtitle" class="book-header__subtitle">{{ book.subtitle }}</p>
    <div class="book-header__meta">
      <p><strong>作者：</strong>{{ book.author }}</p>
      <p v-if="book.translator"><strong>译者：</strong>{{ book.translator }}</p>
      <p v-if="book.year"><strong>出版年份：</strong>{{ book.year }}</p>
      <p v-if="book.pages"><strong>页数：</strong>{{ book.pages }} 页</p>
    </div>
    <p class="book-header__intro">{{ book.intro }}</p>
  </div>
</div>

## 目录

1. [版权信息](01-版权信息)
2. [题记](02-题记)
3. [前言　纳西姆·尼古拉斯·塔勒布](03-前言)
4. [第一部分　基本原理](04-第一部分-基本原理)
5. [第一章　与运气抗争](05-第一章-与运气抗争)
6. [第二章　自然的告诫](06-第二章-自然的告诫)
7. [第三章　永恒轮回](07-第三章-永恒轮回)
8. [第二部分　验证假设](08-第二部分-验证假设)
9. [第四章　分类法](09-第四章-分类法)
10. [第五章　整体论](10-第五章-整体论)
11. [第六章　大胆猜测](11-第六章-大胆猜测)
12. [后记　热爱你的命运](12-后记-热爱你的命运)
13. [致谢](13-致谢)

---

*共 13 章*
