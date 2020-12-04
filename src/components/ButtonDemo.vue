<template>
  <div >
    <FlowerContainer>
      <template v-slot:description>类型示例</template>
      <template v-slot:lib>
        <Button >默认</Button>
        <Button :theme="theme[0]">链接</Button>
        <Button :theme="theme[1]">文本</Button>
      </template>
    </FlowerContainer>
    <FlowerContainer>
      <template v-slot:description>尺寸示例</template>
      <template v-slot:lib>
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
    </FlowerContainer>
    <FlowerContainer>
      <template v-slot:description>其他示例</template>
      <template v-slot:lib>
        <Button disabled>不可点</Button>
        <Button loading>加载中</Button>
        <Button :theme="theme[2]">宽文本</Button>
      </template>
    </FlowerContainer>
  </div>
</template>

<script lang="ts">
    import Button from '../lib/Button.vue'
    import FlowerContainer from "../lib/FlowerContainer.vue";
    export default {
        name: "ButtonDemo",
        components:{ Button, FlowerContainer },
        setup(){
          const theme=["link","text","wide"]
          const size=["small","big"]
          //level写样式
          const level=["main","danger"]
          const OnClick=function(){
                console.log(1111)
            }
            const OnMouseOver=function () {
                console.log(222)
            }
            const OnFocus=function () {
                console.log(333)
            }
            return {theme,size,level,OnClick,OnMouseOver,OnFocus}
        }
    }
</script>

<style >

</style>