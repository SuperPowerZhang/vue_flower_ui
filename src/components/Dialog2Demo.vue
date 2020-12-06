<demo>
    自动关闭的对话框
</demo>

<template>
    <Button  @click="showDialogWhile" >展示</Button>
    <Dialog  v-model:visible="y"  :WrapperClose="WrapperClose" :buttonNeed="buttonNeed" :ok="ok" :cancel="cancel" :title="title" >
        <template v-slot:title>
            <span>标题替换提示</span>
        </template>
        <template v-slot:content>
            <p>内容替换提示</p>
            <p>内容替换提示</p>
        </template>
    </Dialog>
</template>


<script lang="ts">
    // 注意：使用时这里的路径需改为自己的路径
    import {ref} from "vue"
    import Button from "../lib/Button.vue";
    import Dialog from "../lib/Dialog.vue";
    export default {
        name: "Dialog1Demo",
        components:{
            Dialog,Button
        },
        setup(){
            const theme='text'
            const x=ref(false)
            const y=ref(false)
            const WrapperClose= true
            const toggle=()=>{
                x.value=!x.value
            }
            const ok=()=>{
                return true
            }
            const cancel=()=>{
                return true
            }
            const title="标题"
            const showDialogWhile=()=>{
                y.value =true
                setTimeout(()=>{
                    y.value=false
                },500)
            }
            return {title,theme,x,y,WrapperClose,toggle,ok,cancel,showDialogWhile}
        }
    }
</script>
