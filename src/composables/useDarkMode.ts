import { ref } from 'vue'

const isDark = ref(typeof document !== 'undefined' && document.documentElement.classList.contains('dark'))

const applyTheme = (value: boolean) => {
  document.documentElement.classList.toggle('dark', value)
  localStorage.setItem('theme', value ? 'dark' : 'light')
}

export const useDarkMode = () => {
  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
  }

  return { isDark, toggleDarkMode }
}
