import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Store from './stores/index'; 


const app = createApp(App)

app.use(router)

app.use(Store);


app.mount('#app')
