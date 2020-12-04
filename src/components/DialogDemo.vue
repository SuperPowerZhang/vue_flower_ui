<template>
    <div >
        <h3>需手动关闭的对话框</h3>
<!--   这个container回头也可以放出去，做成组件     -->
        <div class="flower-button-container">
            <Button :theme="theme" @click="toggle" >点击展示/关闭</Button>
            <Dialog v-model:visible="x" :WrapperClose="WrapperClose" :ok="ok" :title="title" >
                <template v-slot:title>
                    <span>标题替换提示</span>
                </template>
                <template v-slot:content>
                    <p>内容替换提示</p>
                    <p>内容替换提示</p>
                </template>

            </Dialog>
        </div>
    </div>
</template>

<script>
    import Button from "../lib/Button.vue";
    import Dialog from "../lib/Dialog.vue";
    import {ref} from 'vue';
    export default {
        name: "DialogDemo",
        components:{
            Dialog,
            Button
        },
        setup(){
            const theme='text'
            const x=ref(false)
            const WrapperClose= true
            const toggle=()=>{
                x.value=!x.value
            }
            const ok=()=>{
                return true
            }
            const title="标题"
            // const cancel=()=>{
            // }好像不需要这个函数
            return {title,theme,WrapperClose,x,toggle,ok}
        }
    }
</script>

<style >

</style>