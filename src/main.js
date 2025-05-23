
import { createApp } from 'vue'
import './index.css'
import './style.css'
import router from './router'
import App from './App.vue'


createApp(App)
    .use(router)
    .mount('#app')
