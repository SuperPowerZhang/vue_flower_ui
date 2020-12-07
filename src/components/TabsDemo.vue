<template>
    <Tips />
    <FlowerContainer  :component="Tab1Demo" />
    <FlowerContainer  :component="Tab2Demo" />
    <FlowerContainer  :component="Tab3Demo" />
    <FlowerContainer  :component="Tab4Demo" />
</template>

<script lang="ts">
    import FlowerContainer from "../lib/FlowerContainer.vue"
    import Tips from "../components/Tips.vue"
    import Tab1Demo from "./Tab1Demo.vue";
    import Tab2Demo from "./Tab2Demo.vue";
    import Tab3Demo from './Tab3Demo.vue';
    import Tab4Demo from './Tab4Demo.vue';

    export default {
        name: "TabsDemo",
        components: {FlowerContainer,Tips},
        setup(){
            return {Tab1Demo,Tab2Demo,Tab3Demo,Tab4Demo}
        }
    }
</script>

<style >

</style>