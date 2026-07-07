---
title: 生命周期投资法
author: 伊恩·艾尔斯、巴里·纳莱巴夫
---

<script setup>
import { books } from '../../.vitepress/books'

const book = books.find(b => b.slug === 'lifecycle-investing')
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

- [前言](01-前言)
- [第1章 改变投资理念](02-第1章-改变投资理念)
- [第2章 投资规划](03-第2章-投资规划)
- [第3章 历史表现](04-第3章-历史表现)
- [第4章 没有假如](05-第4章-没有假如)
- [第5章 开始投资和止损的时间](06-第5章-开始投资和止损的时间)
- [第6章 生命周期投资战略的使用禁忌](07-第6章-生命周期投资战略的使用禁忌)
- [第7章 萨缪尔森份额的确定](08-第7章-萨缪尔森份额的确定)
- [第8章 投资机制](09-第8章-投资机制)
- [第9章 看看其他人是怎么投资的](10-第9章-看看其他人是怎么投资的)
- [致谢](11-致谢)
- [注释](12-注释)

---

*共 12 章 · 254 页*
