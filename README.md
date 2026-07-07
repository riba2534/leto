# Leto 投资书籍合集

<p align="center">
  <img src="leto_avator.png" alt="Leto Logo" width="128" height="128" />
</p>

> 收录 [Leto](https://x.com/leto_bao) 推荐的五本投资经典，涵盖价值投资、期权策略、资产配置等核心领域，助你建立完整的投资知识体系。

在线地址：**[leto.fate.red](https://leto.fate.red)**

## 收录书籍

1. **持续买入** — 尼克·马吉奥利 (Nick Maggiulli)
   *用数据说话，证明持续买入并持有是普通人最可靠的投资致富路径。*

2. **生命周期投资法** — 伊恩·艾尔斯、巴里·纳莱巴夫
   *基于生命周期理论的资产配置策略，教你用时间分散风险，实现退休无忧。*

3. **彼得·林奇投资经典全集** — 彼得·林奇 (Peter Lynch)
   *《彼得林奇的成功投资》《战胜华尔街》《彼得林奇教你理财》三合一。华尔街传奇基金经理的方法论全集。*

4. **期权投资策略（原书第5版）** — 劳伦斯·G·麦克米伦 (Lawrence G. McMillan)
   *期权交易领域的权威百科全书，全面涵盖股票期权、指数期权、期货期权的策略与应用。*

5. **The Second Leg Down**（第二轮下跌）— Hari P. Krishnan
   *深入解析市场恐慌时期的交易与对冲策略。支持中/英文双语切换阅读。*

## 站点功能

- 全部书籍内容以 Markdown 格式在线呈现，支持全文搜索
- 自托管 Noto Serif SC 字体，阅读体验接近纸质书
- 深色/浅色模式自动适配
- 图片点击放大（medium-zoom）
- 响应式布局，桌面端与移动端均可流畅阅读
- The Second Leg Down 提供完整的中文翻译版，支持一键切换语言

## 技术

- [VitePress](https://vitepress.dev/) — Vue 驱动的静态站点生成器
- [Vue 3](https://vuejs.org/) — 渐进式 JavaScript 框架
- [Cloudflare Pages](https://pages.cloudflare.com/) — 边缘网络部署
- 自托管字体子集（Noto Serif SC Latin）

内容源文件为 Markdown（`.md`），存放于 `site/books/<slug>/`，通过 VitePress 构建为静态 HTML。

## 本地开发

```bash
cd site
pnpm install
pnpm dev        # 开发模式，热更新，默认 http://localhost:5173
pnpm build      # 生产构建，输出到 .vitepress/dist
pnpm preview    # 预览构建产物
```

## 部署

推送到 `main` 分支自动触发 Cloudflare Pages 部署。构建命令 `pnpm build`，输出目录 `site/.vitepress/dist`。

## 许可

书籍版权归原作者所有，本站仅供学习交流使用。如有版权问题请联系删除。

---

*如果你发现了问题或有改进建议，欢迎提 Issue 或 PR。*
