import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$apiUrl = process.env.NODE_ENV === 'production'
  ? 'https://cafe-luan-db.onrender.com'
  : 'http://localhost:3000'

app.use(router)
app.mount('#app')