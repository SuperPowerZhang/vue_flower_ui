<demo>
    一键创建的对话框
</demo>

<template>
    <div class="flower-button-container">
        <Button  @click="showDialog" >创建</Button>
    </div>
</template>


<script lang="ts">
    // 注意：使用时这里的路径需改为自己的路径
    import {openDialog} from "../lib/openDialog"
    import Button from "../lib/Button.vue";
    import Dialog from "../lib/Dialog.vue";
    export default {
        name: "Dialog3Demo",
        components:{
            Dialog,Button
        },
        setup(){
            const theme='text'
            const showDialog=()=>{
                openDialog({title:"参数里的标题",content:"参数里的内容"})
            }
            return {theme,showDialog}
        }
    }
</script>
