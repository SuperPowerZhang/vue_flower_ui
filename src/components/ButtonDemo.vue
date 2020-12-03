<template>
  <div class="flower-button-container">
  <Button >默认样式</Button>
  <Button :theme="theme[0]">小padding</Button>
  <Button :theme="theme[1]">链接</Button>
  <Button :theme="theme[2]">文本</Button>
    <Button :theme="theme[5]">宽文本</Button>
    <Button :theme="theme[3]">不可点</Button>
    <Button :theme="theme[4]">加载中</Button>
  </div>
</template>

<script lang="ts">
    import Button from '../lib/Button.vue'
    export default {
        name: "ButtonDemo",
        components:{ Button },
        setup(){
          const theme=["small","link","text","disabled","loading","wide"]
          const size=100
          const testBool=true
            const OnClick=function(){
                console.log(1111)
            }
            const OnMouseOver=function () {
                console.log(222)
            }
            const OnFocus=function () {
                console.log(333)
            }
            return {theme,size,testBool,OnClick,OnMouseOver,OnFocus}
        }
    }
</script>

<style >
.flower-button-container{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 8px;
  padding-right: 8px;
}
</style>