<demo>
    默认切换
</demo>

<template>
    <Switch v-model:value="value"/>
</template>


<script lang="ts">
    // 注意：使用时这里的路径需改为自己的路径
    import Switch from '../lib/Switch.vue';
    import {ref} from "vue"

    export default {
        name: "Tab1Demo",
        components: {Switch},
        setup(){
            const value=ref(true)
            return {value}
        },

    }
</script>
