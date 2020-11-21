import { createApp } from 'vue'
import App from './App.vue'
import './know'
import './index.scss'
import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

const history=createWebHashHistory()
const router=createRouter({
    history:history,
    routes:[{
        path:'/',
        component:Home
    },
        {
            path:'/doc',
            component:Doc
        }
        ]
})


const hello=createApp(App)
hello.use(router)
hello.mount('#app')
