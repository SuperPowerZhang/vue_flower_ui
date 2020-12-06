<template>
    <demo>
        对比导航栏
    </demo>
    <Tabs v-model:selected="y" :theme="theme" >
        <Tab title="导航1" >导航1内容</Tab>
        <Tab title="导航2">导航2内容</Tab>
        <Tab >导航3内容</Tab>
    </Tabs>
</template>


<script lang="ts">
    import Tabs from "../lib/Tabs.vue";
    import Tab from "../lib/Tab.vue"
    import {ref} from "vue"
    export default {
        name: "Dialog2",
        components: { Tab,Tabs},
        setup(){
            const y=ref('导航1')
            const theme="black"
            return {y,theme}
        }
    }
</script>

<style >

</style>