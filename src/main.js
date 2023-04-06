// General:
import { createApp } from 'vue'
import App from './App.vue'

// Router:
import router from './router'

// Languages:
import i18n from './i18n/i18n'

// Style:
import './assets/main.css'

const app = createApp(App)

app.use(i18n)
app.use(router)

app.mount('#app')

