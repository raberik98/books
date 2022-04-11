import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import './assets/css/style.css'

createApp(App).use(router).use(PrimeVue).mount('#app')
