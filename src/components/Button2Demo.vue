<demo>
    尺寸示例
</demo>

<template>
    <Button :size="size[0]">小小小</Button>
    <Button >中中中</Button>
    <Button :size="size[1]">大大大</Button>
    <Button :size="size[0]" :theme="theme[0]">小链接</Button>
    <Button :theme="theme[0]">中链接</Button>
    <Button :size="size[1]" :theme="theme[0]">大链接</Button>
    <Button :size="size[0]" :theme="theme[1]">小文本</Button>
    <Button :theme="theme[1]">中文本</Button>
    <Button :size="size[1]" :theme="theme[1]">大文本</Button>
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
            const size=["small","big"]
            const theme=["link","text"]
            return {theme,size}
        }
    }
</script>
