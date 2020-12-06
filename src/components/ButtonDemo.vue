<template>
    <FlowerContainer :component="Button1Demo" />
    <FlowerContainer :component="Button2Demo" />
  <FlowerContainer :component="Button3Demo" />
</template>

<script lang="ts">
  import Button1Demo from "./Button1Demo.vue";
  import Button2Demo from "./Button2Demo.vue";
  import Button3Demo from "./Button3Demo.vue";
  import FlowerContainer from "../lib/FlowerContainer.vue";
    export default {
        name: "ButtonDemo",
        components:{  FlowerContainer },
        setup(){
            return {Button1Demo,Button2Demo,Button3Demo}
        }
    }
</script>

<style >

</style>