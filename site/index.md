---
layout: home
---

<script setup>
import { books } from './.vitepress/books'
</script>

<div class="hero-section">
  <div class="hero-eyebrow"><span class="hero-eyebrow__rule"></span>投资经典 · 在线阅读</div>
  <h1 class="hero-title">Leto 投资书籍合集</h1>
  <p class="hero-subtitle">精选投资经典，系统化你的投资认知</p>
  <p class="hero-desc">收录 Leto 推荐的五本投资经典书籍，涵盖价值投资、期权策略、资产配置等核心领域，助你建立完整的投资知识体系。</p>
</div>

<div class="section-head">
  <div class="section-head__label">Bookshelf</div>
  <h2 class="section-head__title">书籍书架</h2>
</div>

<div class="bookshelf">
  <a
    v-for="(book, i) in books"
    :key="book.slug"
    :href="`/books/${book.slug}/`"
    class="book-card"
    :style="{ animationDelay: `${i * 70}ms` }"
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

<div class="about-band">

<div class="section-head">
  <div class="section-head__label">About</div>
  <h2 class="section-head__title">关于本站</h2>
</div>

本站收录的书籍均来自 **Leto**（[@leto_bao](https://x.com/leto_bao)）的投资推荐书单。Leto 因在 X（原 Twitter）上分享投资见解而广受关注，他推荐的这些书籍涵盖了从基础投资理念到期权高级策略的完整知识体系。

<div class="pull-quote">
  <p class="pull-quote__label">阅读建议</p>
  <p class="pull-quote__text">持续买入 → 生命周期投资法 → 彼得·林奇投资经典 → 期权投资策略 → The Second Leg Down</p>
  <p class="pull-quote__caption">由浅入深，构建完整的投资框架</p>
</div>

</div>
