---
title: 战胜华尔街
author: 彼得·林奇 (Peter Lynch)、约翰·罗瑟查尔德 (John Rothchild)
---

<script setup>
import { books } from '../../../.vitepress/books'

const book = books.find(b => b.slug === 'peter-lynch-collection')
const sub = book.subBooks.find(s => s.slug === 'beating-the-street')
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

1. [华章经典·金融投资](05-第5章)
2. [推荐序一（张志雄）](07-第7章)
3. [推荐序二（张荣亮）](08-第8章)
4. [译者序](09-第9章)
5. [序言](10-第10章)
6. [平装本序言](11-第11章)
7. [引言　想多赚钱就买股票吧](12-第12章)
8. [第1章　业余投资者比专业投资者业绩更好](13-第13章)
9. [第2章　周末焦虑症](14-第14章)
10. [第3章　基金选择之道](15-第15章)
11. [第4章　麦哲伦基金选股回忆录：初期](16-第16章)
12. [第5章　麦哲伦基金选股回忆录：中期](17-第17章)
13. [第6章　麦哲伦基金选股回忆录：晚期](18-第18章)
14. [第7章　艺术、科学与调研](19-第19章)
15. [第8章　零售业选股之道：边逛街边选股](20-第20章)
16. [第9章　房地产业选股之道：从利空消息中寻宝](21-第21章)
17. [第10章　超级剪理发记](22-第22章)
18. [第11章　沙漠之花：低迷行业中的卓越公司](23-第23章)
19. [第12章　储蓄贷款协会选股之道](24-第24章)
20. [第13章　近观储蓄贷款协会](25-第25章)
21. [第14章　业主有限合伙公司：做有收益的交易](26-第26章)
22. [第15章　周期性公司：冬天到了，春天还会远吗](27-第27章)
23. [第16章　困境中的核电站：CMS能源公司](28-第28章)
24. [第17章　山姆大叔的旧货出售：联合资本II公司](29-第29章)
25. [第18章　我的房利美公司纪事](30-第30章)
26. [第19章　后院宝藏：共同基金之康联集团](31-第31章)
27. [第20章　餐饮股：把你的资金投入到你的嘴巴所到之处](32-第32章)
28. [第21章　6个月的定期检查](33-第33章)
29. [25条股票投资黄金法则](34-第34章)
30. [后记](35-第35章)

---

*共 30 章*
