<demo>
    默认导航栏
</demo>

<template>
    <Tabs v-model:selected="x" >
        <Tab title="导航1" >导航1内容</Tab>
        <Tab title="导航2">导航2内容</Tab>
        <Tab >导航3内容</Tab>
    </Tabs>
</template>


<script lang="ts">
    // 注意：使用时这里的路径需改为自己的路径
    import Tabs from "../lib/Tabs.vue";
    import Tab from "../lib/Tab.vue"
    import {ref} from "vue"
    export default {
        name: "Tab1Demo",
        components: {Tab,Tabs},
        setup(){
            const x=ref('导航1')
            return {x}
        }
    }
</script>
