import './index.scss'
import './lib/flower.scss'
import { createApp } from 'vue'
import App from './App.vue'
import './shims-vue.d.ts'
import {router} from './router'
import 'github-markdown-css'


const hello=createApp(App)
hello.use(router)
hello.mount('#app')


