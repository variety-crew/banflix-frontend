import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia'
import ToastService from 'primevue/toastservice';
import router from '@/router/routes';
import Noir from './assets/PrimeVueNoirPreset';

import "@/assets/main.css"
import 'primeicons/primeicons.css'

const pinia = createPinia();
const app = createApp(App);

// use()
app.use(pinia);
app.use(PrimeVue, {
    // Default theme configuration
    theme: {
        preset: Noir
    }
});
app.use(ToastService);
app.use(router);

app.mount("#app");
