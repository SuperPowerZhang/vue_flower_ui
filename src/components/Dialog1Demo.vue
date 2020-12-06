<demo>
    需手动关闭的对话框
</demo>

<template>
    <Button  @click="toggle" >展示</Button>
    <Dialog v-model:visible="visible" :WrapperClose="WrapperClose" :ok="ok" :title="title" :cancel="cancel">
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
            const visible=ref(false)
            const WrapperClose= true
            const toggle=()=>{
                visible.value=!visible.value
            }
            const ok=()=>{
                return true
            }
            const cancel=()=>{
                return true
            }
            const title="标题"
            return {title,theme,visible,WrapperClose,toggle,ok,cancel}
        }
    }
</script>
