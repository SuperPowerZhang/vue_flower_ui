<template>
    <Tips :asideVisible="asideVisible" />
    <FlowerContainer :component="Switch1Demo" />
    <FlowerContainer :component="Switch2Demo" />
    <FlowerContainer :component="Switch3Demo" />
</template>
<script lang="ts">
    import Switch1Demo from './Switch1Demo.vue'
    import Switch2Demo from './Switch2Demo.vue'
    import Switch3Demo from './Switch3Demo.vue'
    import FlowerContainer from "../lib/FlowerContainer.vue";
    import Tips from "../components/Tips.vue"

    export default {
        name: "SwitchDemo.vue",
        props:{
            asideVisible:{
                type:Boolean
            }
        },
        components:{
            FlowerContainer,Tips
        },
        setup(){
            return {Switch1Demo,Switch2Demo,Switch3Demo}
        },

    }
</script>


<style >

</style>