<div align="center">

<img src="leto_avator.png" alt="Leto 投资书籍合集" width="160">

# Leto 投资书籍合集

[![在线阅读](https://img.shields.io/badge/在线阅读-leto.fate.red-b8863f?style=for-the-badge&logo=googlechrome&logoColor=white)](https://leto.fate.red)
[![Deploy](https://img.shields.io/github/actions/workflow/status/riba2534/leto/deploy.yml?branch=main&style=for-the-badge&label=Deploy&logo=cloudflarepages&logoColor=white)](https://github.com/riba2534/leto/actions/workflows/deploy.yml)

**价值投资 · 期权策略 · 资产配置 —— 一站读完 Leto 的投资推荐书单。**

</div>

## 📖 关于本站

[leto.fate.red](https://leto.fate.red) 收录 [Leto](https://x.com/leto_bao)（[@leto_bao](https://x.com/leto_bao)）在 X（原 Twitter）上推荐的投资经典，从基础投资理念到期权高级策略，覆盖价值投资、资产配置、市场对冲等核心领域，可在线阅读，支持全文搜索、深色模式与移动端适配。

> 本项目为个人学习研究用途，仅供学术交流与阅读便利，不用于任何商业目的。

## 📚 收录书目

| 书名 | 作者 | 简介 | 在线阅读 |
|------|------|------|:--------:|
| **持续买入** | 尼克·马吉奥利 (Nick Maggiulli) | 普通人投资致富的实证方法 | [阅读](https://leto.fate.red/books/just-keep-buying/) |
| **生命周期投资法** | 伊恩·艾尔斯、巴里·纳莱巴夫 | 让你退休无忧的理财智慧 | [阅读](https://leto.fate.red/books/lifecycle-investing/) |
| **彼得·林奇投资经典全集** | 彼得·林奇 (Peter Lynch) | 三部曲合集——战胜华尔街 · 彼得·林奇教你理财 · 彼得·林奇的成功投资，各自独立成书、可单独阅读 | [阅读](https://leto.fate.red/books/peter-lynch-collection/) |
| **期权投资策略**（原书第 5 版） | 劳伦斯·G·麦克米伦 (Lawrence G. McMillan) | 期权交易领域的权威百科全书 | [阅读](https://leto.fate.red/books/options-strategies/) |
| **The Second Leg Down**（第二轮下跌） | Hari P. Krishnan | 市场恐慌时期的交易与对冲策略，🌐 提供完整中文翻译 | [阅读](https://leto.fate.red/books/second-leg-down/) |

> 💡 建议阅读顺序：持续买入 → 生命周期投资法 → 彼得·林奇投资经典 → 期权投资策略 → The Second Leg Down。由浅入深，构建完整的投资认知框架。

## ✨ 站点功能

- 📖 全部书籍内容以 Markdown 在线呈现，支持**全文搜索**
- 🀄 自托管 **Noto Serif SC** 字体，接近纸质书阅读体验
- 🌓 深色 / 浅色模式自动适配，暖色调纸质排版风格
- 🔍 点击图片放大（medium-zoom）
- 📱 桌面端与移动端响应式布局
- 🌐 The Second Leg Down 支持一键切换中 / 英文版

## 🚀 本地运行

基于 [VitePress](https://vitepress.dev/) 构建，托管于 Cloudflare Pages。

```bash
git clone git@github.com:riba2534/leto.git
cd leto/site
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # 生产构建 → .vitepress/dist
pnpm preview    # 预览构建产物
```

推送到 `main` 分支后，GitHub Actions 自动构建并部署到 Cloudflare Pages。

## 🛠️ 技术栈

| 工具 | 用途 |
|------|------|
| [VitePress](https://vitepress.dev) | 静态站点生成 |
| [Vue 3](https://vuejs.org) | 交互组件 |
| [Cloudflare Pages](https://pages.cloudflare.com) | 托管与边缘网络 |
| Noto Serif SC | 自托管中文字体 |

内容源文件为 Markdown（`site/books/<slug>/`），通过 VitePress 构建为静态 HTML。

## ⚖️ 版权声明

本项目为个人学习研究用途，仅供学术交流与阅读便利，不用于任何商业目的。书籍版权归原作者及出版社所有。

如认为本项目侵犯了您的合法权益，请通过 [GitHub Issues](https://github.com/riba2534/leto/issues) 联系，将在确认后及时删除。

---

<div align="center">

<sub>仅供学习交流 · 著作权归原作者及出版社所有</sub>

</div>
