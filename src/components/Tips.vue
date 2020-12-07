<template>
    <div class="flower-tips-container" v-if="!asideVisible">
        <Button :other="other" @click="toggleAside">点击查看文档/其他组件示例</Button>
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
            return {asideVisible,other,toggleAside}
        }
    }
</script>

<style lang="scss">
    .flower-tips-container{
        display: flex;
        justify-content: center;
    }
</style>