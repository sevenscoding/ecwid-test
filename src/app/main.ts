import { createApp } from 'vue'
import '@app/styles/index.scss'
import App from '@app/App.vue'
import { router } from '@app/router'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).use(router).mount('#app')
