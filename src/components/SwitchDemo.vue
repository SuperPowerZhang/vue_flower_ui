<template>
    <FlowerContainer>
        <template v-slot:description>Switch1</template>
        <template v-slot:lib>
            <Switch v-model:value="y"/>
        </template>
    </FlowerContainer>
</template>

<script lang="ts">
    import Switch from '../lib/Switch.vue';
    import {ref,provide} from 'vue';
    import FlowerContainer from "../lib/FlowerContainer.vue";

    export default {
        name: "SwitchDemo.vue",
        components:{
            FlowerContainer,
            Switch
        },setup(){
            const y=ref(true)
            return {y}
        }
    }
</script>

<style scoped>

</style>