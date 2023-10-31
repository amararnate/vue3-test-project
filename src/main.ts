import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { defineCustomElements } from '@telekom/scale-components/loader';
import '@telekom/scale-components/dist/scale-components/scale-components.css';

const app = createApp(App)
defineCustomElements();
app.use(router)

app.mount('#app')
