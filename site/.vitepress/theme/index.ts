import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { onMounted, nextTick } from 'vue'
import './custom.css'
import './fonts.css'

export default {
  extends: DefaultTheme,
  enhanceApp() {
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
