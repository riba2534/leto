<p align="center">
  <img src="leto_avator.png" alt="Leto" width="160" height="160" />
</p>

<h1 align="center">Leto 投资书籍合集</h1>

<p align="center">
  <a href="https://leto.fate.red"><img src="https://img.shields.io/badge/网站-leto.fate.red-b8863f?style=flat-square" alt="Site" /></a>
  <a href="https://github.com/riba2534/leto/actions/workflows/deploy.yml"><img src="https://img.shields.io/github/actions/workflow/status/riba2534/leto/deploy.yml?branch=main&style=flat-square" alt="Deploy" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-CC%20BY--NC--ND%204.0-lightgrey?style=flat-square" alt="License" /></a>
  <a href="https://vitepress.dev"><img src="https://img.shields.io/badge/built%20with-VitePress-5C73E7?style=flat-square" alt="VitePress" /></a>
  <img src="https://img.shields.io/badge/books-5-goldenrod?style=flat-square" alt="Books" />
</p>

---

收录 [Leto](https://x.com/leto_bao) 推荐的五本投资经典。从基础理念到期权高级策略，覆盖价值投资、资产配置、市场对冲等核心领域——一个站，读完该读的。

在线地址：**[leto.fate.red](https://leto.fate.red)**

## 收录书籍

| # | 书名 | 作者 | 
|---|------|------|
| 1 | **持续买入** — 普通人投资致富的实证方法 | 尼克·马吉奥利 (Nick Maggiulli) |
| 2 | **生命周期投资法** — 让你退休无忧的理财智慧 | 伊恩·艾尔斯、巴里·纳莱巴夫 |
| 3 | **彼得·林奇投资经典全集** — 三合一珍藏版 | 彼得·林奇 (Peter Lynch) |
| 4 | **期权投资策略（原书第5版）** — 期权交易百科全书 | 劳伦斯·G·麦克米伦 (Lawrence G. McMillan) |
| 5 | **The Second Leg Down**（第二轮下跌）🌐 中英双语 | Hari P. Krishnan |

> 💡 建议阅读顺序：持续买入 → 生命周期投资法 → 彼得·林奇投资经典 → 期权投资策略 → The Second Leg Down。由浅入深，构建完整的投资认知框架。

## 站点功能

- 📖 全部书籍内容以 Markdown 在线呈现，支持**全文搜索**
- 🀄 自托管 **Noto Serif SC** 字体，接近纸质书阅读体验
- 🌓 深色 / 浅色模式自动适配
- 🔍 点击图片放大（medium-zoom）
- 📱 桌面端与移动端响应式布局
- 🌐 The Second Leg Down 提供**完整中文翻译**，支持一键切换中 / ENG

## 本地开发

```bash
git clone git@github.com:riba2534/leto.git
cd leto/site
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # 生产构建 → .vitepress/dist
pnpm preview    # 预览构建产物
```

## 部署

推送到 `main` 分支，GitHub Actions 自动构建并部署到 Cloudflare Pages。

[![Deploy to Cloudflare Pages](https://github.com/riba2534/leto/actions/workflows/deploy.yml/badge.svg)](https://github.com/riba2534/leto/actions/workflows/deploy.yml)

## 技术栈

| 工具 | 用途 |
|------|------|
| [VitePress](https://vitepress.dev) | 静态站点生成 |
| [Vue 3](https://vuejs.org) | 交互组件 |
| [Cloudflare Pages](https://pages.cloudflare.com) | 托管与边缘网络 |
| Noto Serif SC | 自托管中文字体 |

内容源文件为 Markdown（`site/books/<slug>/`），通过 VitePress 构建为静态 HTML。

## 许可

书籍版权归原作者所有。本站仅供学习交流使用，如有侵权请联系删除。

---

*发现问题或有改进建议？欢迎提 [Issue](https://github.com/riba2534/leto/issues) 或 PR。*
