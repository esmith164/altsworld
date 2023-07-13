import { createApp } from 'vue'
import './assets/css/tailwind.css'
import './assets/css/main.scss'

import App from './App.vue'
import { createPinia } from 'pinia'
import VueIframe from 'vue-iframes'

import AOS from 'aos'
import 'aos/dist/aos.css'
import VueScrollTo from 'vue-scrollto'
import router from './router'
const app = createApp(App);
app.use(router);
app.use(VueScrollTo);
app.use(createPinia());
app.use(AOS.init({
  duration: 1000,
  once: true
}))
app.mount('#app')