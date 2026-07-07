---
title: The Second Leg Down
author: Hari P. Krishnan
---

<script setup>
import { books } from '../../.vitepress/books'

const book = books.find(b => b.slug === 'second-leg-down')
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
      <p v-if="book.zhTitle"><strong>中文译名：</strong>{{ book.zhTitle }}</p>
      <p v-if="book.year"><strong>出版年份：</strong>{{ book.year }}</p>
      <p v-if="book.pages"><strong>页数：</strong>{{ book.pages }} 页</p>
    </div>
    <p class="book-header__intro">{{ book.intro }}</p>
  </div>
</div>

## 🌐 选择阅读语言 / Select Language

<div style="display: flex; gap: 24px; margin: 32px 0;">

<div style="flex: 1; padding: 32px; background: var(--vp-c-bg-soft); border-radius: 12px; text-align: center;">
  <h2 style="margin-top: 0;">🇨🇳 简体中文</h2>
  <p style="color: var(--vp-c-text-2); margin-bottom: 20px;">完整的中文翻译版，包含目录和全部章节</p>
  <a href="./zh/" style="display: inline-block; padding: 10px 28px; background: var(--vp-c-brand-1); color: #fff; border-radius: 8px; text-decoration: none; font-weight: 600;">阅读中文版 →</a>
</div>

<div style="flex: 1; padding: 32px; background: var(--vp-c-bg-soft); border-radius: 12px; text-align: center;">
  <h2 style="margin-top: 0;">🇬🇧 English (Original)</h2>
  <p style="color: var(--vp-c-text-2); margin-bottom: 20px;">The original English edition with all chapters</p>
  <a href="./en/" style="display: inline-block; padding: 10px 28px; background: var(--vp-c-brand-1); color: #fff; border-radius: 8px; text-decoration: none; font-weight: 600;">Read in English →</a>
</div>

</div>

---

*共 8 章 · 320 页 · 双语版本*
