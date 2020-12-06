<demo>
    简明切换
</demo>

<template>
    <Switch v-model:value="value" :theme="theme"/>
</template>


<script lang="ts">
    // 注意：使用时这里的路径需改为自己的路径
    import Switch from '../lib/Switch.vue';
    import {ref} from "vue"
    export default {
        name: "Tab2Demo",
        components: {Switch},
        setup(){
            const value=ref(true)
            const theme="simple"
            return {value,theme}
        }
    }
</script>
