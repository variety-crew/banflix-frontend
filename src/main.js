import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia'
import ToastService from 'primevue/toastservice';
import router from '@/router/routes';
import Toast from 'primevue/toast';
import Noir from './assets/PrimeVueNoirPreset';

import "@/assets/main.css"
import 'primeicons/primeicons.css'

const pinia = createPinia();
const app = createApp(App);

// PrimeVue의 전역 컴포넌트 설정
app.component('Toast', Toast);

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
