<template>
    <FlowerContainer>
        <template v-slot:description>默认切换</template>
        <template v-slot:lib>
            <Switch v-model:value="x"/>
        </template>
    </FlowerContainer>
    <FlowerContainer>
        <template v-slot:description >禁止切换</template>
        <template v-slot:lib>
            <Switch v-model:value="y" disabled />
        </template>
    </FlowerContainer>
    <FlowerContainer>
        <template v-slot:description>简明切换</template>
        <template v-slot:lib>
            <Switch v-model:value="z" :theme="theme[0]" />
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
            const x=ref(true)
            const y=ref(false)
            const z=ref(true)
            const theme=['simple']
            return {x,y,z,theme}
        }
    }
</script>


<style >

</style>