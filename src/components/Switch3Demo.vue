<demo>
    禁止切换
</demo>

<template>
    <Switch v-model:value="value" disabled/>
</template>


<script lang="ts">
    // 注意：使用时这里的路径需改为自己的路径
    import Switch from '../lib/Switch.vue';
    import {ref} from "vue"
    export default {
        name: "Tab3Demo",
        components: {Switch},
        setup(){
            const value=ref(false)
            return {value}
        }
    }
</script>
