<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

const isEn = computed(() => route.path.includes('/en/'))
const isZh = computed(() => route.path.includes('/zh/'))
const showSwitch = computed(() => isEn.value || isZh.value)

function switchLang() {
  const path = route.path
  if (isEn.value) {
    // Switch to ZH
    const newPath = path.replace('/en/', '/zh/')
    window.location.href = newPath
  } else if (isZh.value) {
    // Switch to EN
    const newPath = path.replace('/zh/', '/en/')
    window.location.href = newPath
  }
}
</script>

<template>
  <div v-if="showSwitch" class="lang-switch">
    <button class="lang-switch__btn" @click="switchLang">
      <span v-if="isZh">🇬🇧 EN</span>
      <span v-else>🇨🇳 中文</span>
    </button>
  </div>
</template>

<style scoped>
.lang-switch {
  display: inline-flex;
  align-items: center;
  margin-left: 8px;
}

.lang-switch__btn {
  padding: 4px 12px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.lang-switch__btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
</style>
