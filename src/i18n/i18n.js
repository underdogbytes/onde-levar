import { createI18n } from 'vue-i18n'
import store from '@/store/Store'

import { en } from './en'
import { br } from './br'

const i18n = createI18n(
    {
        // set locale:
        locale: store.getters.language,
        fallbackLocale: store.getters.language,
        legacy: false,
        globalInjection: true,
        // set messages:
        messages: {
            br: br,
            en: en
        }
    }
)

export default i18n