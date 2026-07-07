---
layout: home

hero:
  name: 'Leto 投资书籍合集'
  tagline: 价值投资、资产配置、期权对冲、穿越周期——Leto 为普通投资者整理的认知地图。
  image:
    src: /covers/lifecycle-investing.jpg
    alt: Leto 投资书籍合集
  actions:
    - theme: brand
      text: 进入书架
      link: '#书架'

features:
  - icon: 💰
    title: 价值投资
    details: 业余投资者比专业投资者更有优势——用日常生活经验，在别人没注意到的地方挖掘十倍股。
  - icon: ⏳
    title: 持续买入
    details: 不用等待逢低买入，不用预测市场。长期、持续地投入，才是普通人最可靠的致富路径。
  - icon: 📊
    title: 资产配置
    details: 年轻时加杠杆，年老时去杠杆。用生命周期理论，在人生的不同阶段合理配置股票与债券。
  - icon: 🛡️
    title: 风险对冲
    details: 市场恐慌不是意外，而是常态。用期权对冲极端下跌风险，在别人恐惧时你依然从容。
---

<script setup>
import { books } from './.vitepress/books'
</script>

<h2 id="书架" class="home-section-title" style="border:none;">📖 书籍书架</h2>
<div class="home-section-title" style="margin-top:0;">
  <p>点击任意一本，即刻开始阅读</p>
</div>

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
    <div class="book-card__body">
      <div class="book-card__title">{{ book.title }}<span v-if="book.year" class="book-card__year">{{ book.year }}</span></div>
      <div v-if="book.subtitle" class="book-card__subtitle">{{ book.subtitle }}</div>
      <div class="book-card__author">{{ book.author }}</div>
      <div class="book-card__intro">{{ book.intro }}</div>
      <div class="book-card__cta">开始阅读</div>
    </div>
  </a>
</div>

<div style="max-width: 1152px; margin: 48px auto 24px; padding: 0 24px; text-align: center; color: var(--vp-c-text-2); font-size: 14px; line-height: 1.8;">
  <p>本站收录的书籍均来自 <a href="https://x.com/leto_bao" target="_blank">Leto</a>（<a href="https://x.com/leto_bao" target="_blank">@leto_bao</a>）的投资推荐书单。建议按「持续买入 → 生命周期投资法 → 彼得·林奇投资经典 → 期权投资策略 → The Second Leg Down」的顺序阅读，由浅入深构建投资框架。<br>本站内容仅供学习交流，版权归原作者所有。如有侵权，请联系删除。</p>
</div>
