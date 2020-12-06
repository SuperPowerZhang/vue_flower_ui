import './index.scss'
import './lib/flower.scss'
import { createApp } from 'vue'
import App from './App.vue'
import './shims-vue.d.ts'
import {router} from './router'
import 'github-markdown-css'
import Markdown from './components/Markdown.vue'


const hello=createApp(App)
hello.use(router)
hello.mount('#app')
hello.component("Markdown",Markdown)


