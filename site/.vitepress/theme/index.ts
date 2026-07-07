import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h, defineComponent, onMounted, onUnmounted, nextTick, ref } from 'vue'
import { useData } from 'vitepress'
import LanguageSwitch from './LanguageSwitch.vue'
import './custom.css'
import './fonts.css'

// 顶部阅读进度条（首页不显示）
const ReadingProgress = defineComponent({
  setup() {
    const { frontmatter } = useData()
    const pct = ref(0)
    let raf = 0
    const update = () => {
      raf = 0
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      pct.value = max > 0 ? Math.min(100, (el.scrollTop / max) * 100) : 0
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    onMounted(() => {
      update()
      window.addEventListener('scroll', schedule, { passive: true })
      window.addEventListener('resize', schedule, { passive: true })
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (raf) cancelAnimationFrame(raf)
    })
    return () =>
      frontmatter.value.layout === 'home'
        ? null
        : h(
            'div',
            { class: 'reading-progress', 'aria-hidden': 'true' },
            h('div', { class: 'reading-progress__bar', style: { width: pct.value + '%' } })
          )
  },
})

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('LanguageSwitch', LanguageSwitch)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(LanguageSwitch),
      'layout-top': () => h(ReadingProgress),
    })
  },
  setup() {
    onMounted(() => {
      nextTick(() => {
        document
          .querySelectorAll<HTMLElement>('.VPSidebarItem .VPLink .text')
          .forEach((el) => el.setAttribute('title', el.textContent?.trim() ?? ''))
        import('medium-zoom').then(({ default: mediumZoom }) => {
          mediumZoom('.main img', {
            margin: 24,
            background: 'rgba(0, 0, 0, 0.85)',
          })
        })
      })
    })
  },
} satisfies Theme
