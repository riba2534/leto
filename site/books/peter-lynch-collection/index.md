---
title: 彼得·林奇投资经典全集
author: 彼得·林奇 (Peter Lynch)
---

<script setup>
import { books } from '../../.vitepress/books'

const book = books.find(b => b.slug === 'peter-lynch-collection')
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

## 选择一本开始阅读

本合集收录彼得·林奇的三部经典著作，每本书各自成书、拥有独立目录，可任选一本单独阅读，不需要按顺序：

<div class="sub-book-list">
  <a v-for="sub in book.subBooks" :key="sub.slug" :href="`./${sub.slug}/`" class="sub-book-card">
    <div class="sub-book-card__title">{{ sub.title }}</div>
    <div class="sub-book-card__subtitle">{{ sub.subtitle }}</div>
    <p class="sub-book-card__intro">{{ sub.intro }}</p>
    <div class="sub-book-card__meta">{{ sub.author }} · {{ sub.year }}</div>
  </a>
</div>

---

*本合集纸版由机械工业出版社出版，电子版由华章分社制作与发行。*
