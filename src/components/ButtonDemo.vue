<template>
  <div >
    <h3>类型示例</h3>
    <div class="flower-button-container">
  <Button >默认</Button>
  <Button :theme="theme[0]">链接</Button>
  <Button :theme="theme[1]">文本</Button>
  </div>
    <h3>尺寸示例</h3>
    <div class="flower-button-container">
      <Button :size="size[0]">小小小</Button>
      <Button >中中中</Button>
      <Button :size="size[1]">大大大</Button>
      <Button :size="size[0]" :theme="theme[0]">小链接</Button>
      <Button :theme="theme[0]">中链接</Button>
      <Button :size="size[1]" :theme="theme[0]">大链接</Button>
      <Button :size="size[0]" :theme="theme[1]">小文本</Button>
      <Button :theme="theme[1]">中文本</Button>
      <Button :size="size[1]" :theme="theme[1]">小文本</Button>
    </div>
    <h3>有趣示例</h3>
    <div class="flower-button-container">
      <Button disabled>不可点</Button>
      <Button loading>加载中</Button>
      <Button :theme="theme[2]">宽文本</Button>
    </div>
  </div>
</template>

<script lang="ts">
    import Button from '../lib/Button.vue'
    export default {
        name: "ButtonDemo",
        components:{ Button },
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
  h3{
    font-size: 20px;
    color: rgb(36, 41, 46);
    border-bottom:1px solid rgb(234, 236, 239);
    padding-bottom: 16px;
  }
  @media (max-width: 500px) {
    h3{
      margin-top: 8px;
      font-size: 18px;
      padding-bottom: 8px;
    }
  }
.flower-button-container{
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 16px;
}
  @media (max-width: 500px) {
    .flower-button-container{
      padding: 8px;
    }
  }
</style>