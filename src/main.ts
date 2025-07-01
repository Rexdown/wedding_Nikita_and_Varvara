import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

AOS.init({
    duration: 600, // Длительность анимации
    offset: 100,   // Срабатывает за 100px до элемента
    easing: 'ease-out', // Плавное замедление
});

app.use(createPinia())
app.use(router)

app.mount('#app')
