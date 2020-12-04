import Dialog from "./Dialog.vue";
import {createApp,h} from 'vue'
type DialogOptions={
    title:String,
    content:String,
}
const ok=()=>{
    return true
}
const cancel=()=>{
    return true
}
const WrapperClose=false

export const openDialog=(options:DialogOptions)=>{
    const {title,content}=options
    const div=document.createElement('div')
    document.body.append(div)
    const app=createApp({
        render(){
            return h(Dialog,{
                visible:true,'onUpdate:visible':(newVisible:Boolean)=>{
                    if(!newVisible){
                        app.unmount(div)
                        div.remove()
                    }
                },ok,cancel,WrapperClose
            },{
                title,content
            })
        }
    })
    app.mount(div)
}