import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)   // ← changed this line

  const toggleDark = () => {
    isDark.value = !isDark.value
  }

  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  applyTheme(isDark.value)

  watch(isDark, (val) => {
    applyTheme(val)
  })

  return { isDark, toggleDark }
})
