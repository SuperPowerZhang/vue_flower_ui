<template>
    <Switch v-model:value="y"/>
</template>

<script lang="ts">
    import Switch from '../lib/Switch.vue';
    import {ref,provide} from 'vue';

    export default {
        name: "SwitchDemo.vue",
        components:{
            Switch
        },setup(){
            const y=ref(true)
            return {y}
        }
    }
</script>

<style scoped>

</style>