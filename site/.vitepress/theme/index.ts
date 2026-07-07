import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h, onMounted, nextTick } from 'vue'
import LanguageSwitch from './LanguageSwitch.vue'
import './custom.css'
import './fonts.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('LanguageSwitch', LanguageSwitch)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(LanguageSwitch),
    })
  },
  setup() {
    onMounted(() => {
      nextTick(() => {
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
