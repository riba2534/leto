---
layout: home
---

<script setup>
import { books } from './.vitepress/books'
</script>

<div class="hero-section">
  <span class="hero-badge">📚 投资经典 · 在线阅读</span>
  <h1 class="hero-title">Leto 投资书籍合集</h1>
  <p class="hero-subtitle">精选投资经典，系统化你的投资认知</p>
  <p class="hero-desc">收录 Leto 推荐的五本投资经典书籍，涵盖价值投资、期权策略、资产配置等核心领域，助你建立完整的投资知识体系。</p>
</div>

## 📖 书籍书架

<div class="bookshelf">
  <a
    v-for="book in books"
    :key="book.slug"
    :href="`/books/${book.slug}/`"
    class="book-card"
  >
    <div class="book-card__cover">
      <img :src="book.cover" :alt="book.title" loading="lazy" />
    </div>
    <div class="book-card__info">
      <h3 class="book-card__title">{{ book.title }}</h3>
      <p v-if="book.subtitle" class="book-card__subtitle">{{ book.subtitle }}</p>
      <p class="book-card__author">{{ book.author }}</p>
      <p class="book-card__intro">{{ book.intro }}</p>
    </div>
  </a>
</div>

## 🎯 关于本站

本站收录的书籍均来自 **Leto**（[@leto_bao](https://x.com/leto_bao)）的投资推荐书单。Leto 因在 X（原 Twitter）上分享投资见解而广受关注，他推荐的这些书籍涵盖了从基础投资理念到期权高级策略的完整知识体系。

> 💡 **阅读建议**：建议按「持续买入 → 生命周期投资法 → 彼得·林奇投资经典 → 期权投资策略 → The Second Leg Down」的顺序阅读，由浅入深构建投资框架。

---

*本站内容仅供学习交流，版权归原作者所有。如有侵权，请联系删除。*
