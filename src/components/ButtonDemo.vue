<template>
  <Button >hello</Button>
  <Button :theme="theme[0]">hello</Button>
  <Button :theme="theme[1]">hello</Button>
  <Button :theme="theme[2]">hello</Button>
  <Button :theme="theme[3]">hello</Button>
  <Button :theme="theme[4]">hello</Button>
</template>

<script lang="ts">
    import Button from '../lib/Button.vue'
    export default {
        name: "ButtonDemo",
        components:{ Button },
        setup(){
          const theme=["button","link","text","disabled","loading"]
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

</style>