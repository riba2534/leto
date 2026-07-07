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
    translator: '宁三江、罗志芳、刘建位、徐晓杰 译',
    cover: '/covers/peter-lynch-collection.jpg',
    intro: '华尔街传奇基金经理彼得·林奇的三部经典著作合集，散户战胜机构的投资方法论。',
    year: 2018,
    pages: 800,
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
  },
]
