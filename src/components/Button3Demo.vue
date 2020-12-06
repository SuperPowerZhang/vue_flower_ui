<demo>
    其他示例
</demo>

<template>
    <Button disabled>不可点</Button>
    <Button :other="other[0]" :loading="loading">加载中</Button>
    <Button :other="other[1]">宽文本</Button>
</template>


<script lang="ts">
    // 注意：使用时这里的路径需改为自己的路径
    import Button from "../lib/Button.vue";
    import {ref} from 'vue';
    export default {
        name: "Button1Demo",
        components:{
            Button
        },
        setup(){
            const loading=ref('true')
            const other=['loading','wide']
            return {loading,other}
        }
    }
</script>
