<demo>
    类型示例
</demo>

<template>
    <Button >默认</Button>
    <Button :theme="theme[0]">链接</Button>
    <Button :theme="theme[1]">文本</Button>
</template>


<script lang="ts">
    // 注意：使用时这里的路径需改为自己的路径
    import Button from "../lib/Button.vue";
    export default {
        name: "Button1Demo",
        components:{
            Button
        },
        setup(){
            const theme=["link","text","wide"]

            return {theme}
        }
    }
</script>
