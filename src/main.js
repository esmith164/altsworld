import { createApp } from 'vue'
import './assets/css/tailwind.css'
import './assets/css/main.scss'

import App from './App.vue'

createApp(App).mount('#app')

import AOS from 'aos'
import 'aos/dist/aos.css'
import VueScrollTo from 'vue-scrollto'
createApp(App).use(AOS.init({
  duration: 1000,
  once: true
})).use(VueScrollTo).mount('#app')