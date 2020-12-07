<template>
    <div class="flower-tips-container">
        <Button :other="other" @click="toggleAside">点击查看其他文档/组件示例</Button>
    </div>
</template>

<script lang="ts">
    import {Button} from "../lib/index"
    import {inject, Ref} from "vue";
    export default {
        name: "Tip",
        props:{
            asideVisible:{
                type:Boolean
            }
        },
        components:{Button},
        setup(){
            const other="wide"
            const asideVisible= inject < Ref < boolean >> ("asideVisible")
            const toggleAside=()=>{
                asideVisible.value=true
            }
            return {other,toggleAside}
        }
    }
</script>

<style lang="scss">
    .flower-tips-container{
        display: flex;
        justify-content: center;
    }
</style>