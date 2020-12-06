<template>
    <FlowerContainer :component="Switch1Demo" />
    <FlowerContainer :component="Switch2Demo" />
    <FlowerContainer :component="Switch3Demo" />
<!--    <FlowerContainer>-->
<!--        <template v-slot:description >禁止切换</template>-->
<!--        <template v-slot:lib>-->
<!--            <Switch v-model:value="y" disabled />-->
<!--        </template>-->
<!--    </FlowerContainer>-->
<!--    <FlowerContainer>-->
<!--        <template v-slot:description>简明切换</template>-->
<!--        <template v-slot:lib>-->
<!--            <Switch v-model:value="z" :theme="theme[0]" />-->
<!--        </template>-->
<!--    </FlowerContainer>-->
</template>
<script lang="ts">
    import Switch1Demo from './Switch1Demo.vue'
    import Switch2Demo from './Switch2Demo.vue'
    import Switch3Demo from './Switch3Demo.vue'
    import FlowerContainer from "../lib/FlowerContainer.vue";

    export default {
        name: "SwitchDemo.vue",
        components:{
            FlowerContainer
        },
        setup(){
            return {Switch1Demo,Switch2Demo,Switch3Demo}
        }
    }
</script>


<style >

</style>