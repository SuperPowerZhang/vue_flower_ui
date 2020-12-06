<template>

        <FlowerContainer :component="Dialog1Demo" />
        <FlowerContainer :component="Dialog2Demo" />
        <FlowerContainer :component="Dialog3Demo" />
</template>

<script>

    import Dialog1Demo from './Dialog1Demo.vue'
    import Dialog2Demo from './Dialog2Demo.vue'
    import Dialog3Demo from './Dialog3Demo.vue'
    import FlowerContainer from "../lib/FlowerContainer.vue"
    export default {
        name: "DialogDemo",
        components:{
            FlowerContainer,
        },
        setup(){
            return {Dialog1Demo,Dialog2Demo,Dialog3Demo}
        }
    }
</script>

<style >

</style>