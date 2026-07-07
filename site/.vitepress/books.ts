export interface SubBookMeta {
  slug: string
  title: string
  subtitle?: string
  author?: string
  translator?: string
  intro: string
  year?: number
  pages?: number
}

export interface BookMeta {
  slug: string
  title: string
  subtitle?: string
  author: string
  translator?: string
  cover: string
  intro: string
  year?: number
  pages?: number
  zhTitle?: string
  bilingual?: boolean
  subBooks?: SubBookMeta[]
}

export const books: BookMeta[] = [
  {
    slug: 'lifecycle-investing',
    title: '生命周期投资法',
    subtitle: '让你退休无忧的理财智慧',
    author: '伊恩·艾尔斯、巴里·纳莱巴夫',
    translator: '陈丽芳 译',
    cover: '/covers/lifecycle-investing.jpg',
    intro: '基于生命周期理论的投资策略，教你如何在不同年龄段合理配置资产，实现退休无忧。',
    year: 2010,
    pages: 254,
  },
  {
    slug: 'just-keep-buying',
    title: '持续买入',
    subtitle: '普通人投资致富的实证方法',
    author: '尼克·马吉奥利 (Nick Maggiulli)',
    translator: '阿加嘉 译',
    cover: '/covers/just-keep-buying.jpg',
    intro: '用数据说话，证明持续买入并持有是普通人最可靠的投资致富路径。',
    year: 2025,
    pages: 256,
  },
  {
    slug: 'peter-lynch-collection',
    title: '彼得·林奇投资经典全集',
    subtitle: '彼得林奇的成功投资·战胜华尔街·彼得林奇教你理财',
    author: '彼得·林奇 (Peter Lynch)',
    translator: '宋三江、罗志芳、刘建位、徐晓杰 译',
    cover: '/covers/peter-lynch-collection.jpg',
    intro: '华尔街传奇基金经理彼得·林奇的三部经典著作合集，散户战胜机构的投资方法论。全集收录三本各自独立成书的经典著作，可任选一本单独阅读。',
    year: 2018,
    pages: 800,
    subBooks: [
      {
        slug: 'beating-the-street',
        title: '战胜华尔街',
        subtitle: 'Beating the Street（珍藏版）',
        author: '彼得·林奇 (Peter Lynch)、约翰·罗瑟查尔德 (John Rothchild)',
        translator: '刘建位、徐晓杰 等译',
        intro: '林奇复盘自己执掌麦哲伦基金13年间的选股实录，按早期、中期、晚期回顾具体持仓案例，并总结出著名的"25条股票投资黄金法则"。',
        year: 1993,
      },
      {
        slug: 'learn-to-earn',
        title: '彼得·林奇教你理财',
        subtitle: "Learn to Earn: A Beginner's Guide to the Basics of Investing and Business",
        author: '彼得·林奇 (Peter Lynch)、约翰·罗瑟查尔德 (John Rothchild)',
        translator: '宋三江、罗志芳 译',
        intro: '面向投资入门者的通识读本，从美国股市两百年历史讲起，系统讲解股票、基金与公司生命周期的基本原理。',
        year: 1995,
      },
      {
        slug: 'one-up-on-wall-street',
        title: '彼得·林奇的成功投资',
        subtitle: '珍藏版 · One Up on Wall Street',
        author: '彼得·林奇 (Peter Lynch)、约翰·罗瑟查尔德 (John Rothchild)',
        translator: '刘建位、徐晓杰 译',
        intro: '彼得·林奇的成名代表作，提出"业余投资者比专业投资者更有优势"的核心理念，教你如何用日常生活经验挖掘十倍股。',
        year: 1989,
      },
    ],
  },
  {
    slug: 'options-strategies',
    title: '期权投资策略',
    subtitle: '原书第5版',
    author: '劳伦斯·G·麦克米伦 (Lawrence G. McMillan)',
    translator: '王琦 译',
    cover: '/covers/options-strategies.jpg',
    intro: '期权交易领域的权威百科全书，全面涵盖股票期权、指数期权、期货期权的策略与应用。',
    year: 2015,
    pages: 800,
  },
  {
    slug: 'second-leg-down',
    title: 'The Second Leg Down',
    subtitle: 'Trading and Hedging During Financial Market Panics',
    author: 'Hari P. Krishnan',
    cover: '/covers/second-leg-down.jpg',
    intro: '深入解析市场恐慌时期的交易与对冲策略，教你在极端行情中保护资产并捕捉机会。',
    year: 2017,
    pages: 320,
    zhTitle: '第二轮下跌',
    bilingual: true,
  },
]
