import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './know'
import Flower from './components/Flower.vue'
import {createWebHashHistory,createRouter} from 'vue-router'
import Grass from './components/Grass.vue'

const history=createWebHashHistory()
const router=createRouter({
    history:history,
    routes:[{
        path:'/',
        component:Flower
    },
        {
            path:'/2',
            component:Grass
        }
        ]
})


const hello=createApp(App)
hello.use(router)
hello.mount('#app')
