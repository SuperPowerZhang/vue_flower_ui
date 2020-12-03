<template>
  <Button :size="size" :testBool="testBool" :testNone disabled @click="OnClick" @mouseover="OnMouseOver" @focus="OnFocus">hello</Button>

</template>

<script lang="ts">
    import Button from '../lib/Button.vue'
    export default {
        name: "ButtonDemo",
        components:{ Button },
        setup(){
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
            return {size,testBool,OnClick,OnMouseOver,OnFocus}
        }
    }
</script>

<style scoped>

</style>