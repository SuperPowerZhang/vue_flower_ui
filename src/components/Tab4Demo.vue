<demo>
    纵向导航栏
</demo>
<template>
    <Tabs v-model:selected="selected" :theme="theme" >
        <Tab title="导航1" >导航1内容</Tab>
        <Tab title="导航2">导航2内容</Tab>
        <Tab title="导航3">导航3内容</Tab>
    </Tabs>
</template>


<script lang="ts">
// 注意：使用时这里的路径需改为自己的路径
    import Tabs from "../lib/Tabs.vue";
    import Tab from "../lib/Tab.vue"
    import {ref} from "vue"
    export default {
        name: "Tab4Demo",
        components: { Tab,Tabs},
        setup(){
            const selected=ref('导航1')
            const theme="column"
            return {selected,theme}
        }
    }
</script>
