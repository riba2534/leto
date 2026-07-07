---
title: 第二轮下跌 - 中文版
author: Hari P. Krishnan
---

<script setup>
import { books } from '../../../.vitepress/books'

const book = books.find(b => b.slug === 'second-leg-down')
</script>

<div class="book-header">
  <div class="book-header__cover">
    <img :src="book.cover" :alt="book.zhTitle || book.title" />
  </div>
  <div class="book-header__info">
    <h1 class="book-header__title">{{ book.zhTitle || book.title }}</h1>
    <p v-if="book.subtitle" class="book-header__subtitle">市场恐慌时期的交易与对冲策略</p>
    <div class="book-header__meta">
      <p><strong>作者：</strong>{{ book.author }}</p>
      <p><strong>出版年份：</strong>{{ book.year }}</p>
      <p><strong>页数：</strong>{{ book.pages }} 页</p>
    </div>
    <p class="book-header__intro">{{ book.intro }}</p>
    <div style="margin-top: 16px;">
      <a href="../en/" style="display: inline-block; padding: 6px 16px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 6px; text-decoration: none; color: var(--vp-c-text-1); font-size: 14px;">🇬🇧 切换到英文版</a>
    </div>
  </div>
</div>

## 目录

1. [目录](02-目录)
2. [前言](07-前言)
3. [致谢](08-致谢)
4. [作者简介](09-作者简介)
5. [第1章：引言](10-第1章-引言)
6. [第2章：避险资产与第二轮下跌](11-第2章-避险资产与第二轮下跌)
7. [第3章：期权策略概览](12-第3章-期权策略概览)
8. [第4章：对冲两翼](13-第4章-对冲两翼)
9. [第5章：多空之道](14-第5章-多空之道)
10. [第6章：趋势跟踪作为投资组合保护策略](15-第6章-趋势跟踪作为投资组合保护策略)
11. [第7章：利用市场下跌的策略](16-第7章-利用市场下跌的策略)
12. [第8章：闪崩、危机与预测的局限](17-第8章-闪崩危机与预测的局限)
13. [术语表](18-术语表)

---

*共 8 章 · 320 页 · 完整中文翻译版*
