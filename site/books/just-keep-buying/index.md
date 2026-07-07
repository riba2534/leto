---
title: 持续买入
author: 尼克·马吉奥利 (Nick Maggiulli)
---

<script setup>
import { books } from '../../.vitepress/books'

const book = books.find(b => b.slug === 'just-keep-buying')
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

1. [版权信息](03-版权信息)
2. [如何使用这本书](04-如何使用这本书)
3. [前言](05-前言)
4. [绪章](06-绪章)
5. [第一章](08-第8章)
6. [第二章](09-第9章)
7. [第三章](10-第10章)
8. [第四章](11-第11章)
9. [第五章](12-第12章)
10. [第六章](13-第13章)
11. [第七章](14-第14章)
12. [第八章](15-第15章)
13. [第九章](17-第17章)
14. [第十章](18-第18章)
15. [第十一章](19-第19章)
16. [第十二章](20-第20章)
17. [第十三章](21-第21章)
18. [第十四章](22-第22章)
19. [第十五章](23-第23章)
20. [第十六章](24-第24章)
21. [第十七章](25-第25章)
22. [第十八章](26-第26章)
23. [第十九章](27-第27章)
24. [第二十章](28-第28章)
25. [结语](29-结语)
26. [致谢](30-致谢)
27. [注释](31-注释)

---

*共 27 章*
