import { createI18n } from 'vue-i18n'

import en from '../languages/en'
import ptBR from '../languages/pt_BR'

export default defineNuxtPlugin(({ vueApp }) => {
  const cookieLang = useCookie('lang')

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: cookieLang.value || 'pt_BR',
    messages: {
      en,
      pt_BR: ptBR
    }
  })

  vueApp.use(i18n)
})
