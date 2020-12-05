<template>
    <FlowerContainer>
        <template v-slot:description>默认导航栏</template>
        <template v-slot:lib>
            <Tabs v-model:selected="x" >
                <Tab title="导航1" >导航1内容</Tab>
                <Tab title="导航2">导航2内容</Tab>
                <Tab >导航3内容</Tab>
            </Tabs>
        </template>
    </FlowerContainer>
    <FlowerContainer>
        <template v-slot:description>对比导航栏</template>
        <template v-slot:lib>
            <Tabs v-model:selected="y" :theme="theme[0]" >
                <Tab title="导航1" >导航1内容</Tab>
                <Tab title="导航2">导航2内容</Tab>
                <Tab >导航3内容</Tab>
            </Tabs>
        </template>
    </FlowerContainer>
    <FlowerContainer>
        <template v-slot:description>简明导航栏</template>
        <template v-slot:lib>
            <Tabs v-model:selected="z" :theme="theme[1]" >
                <Tab title="导航1" >导航1内容</Tab>
                <Tab title="导航2">导航2内容</Tab>
                <Tab >导航3内容</Tab>
            </Tabs>
        </template>
    </FlowerContainer>
</template>
<!--                -->

<script lang="ts">
    import Tabs from "../lib/Tabs.vue";
    import Tab from "../lib/Tab.vue"
    import FlowerContainer from "../lib/FlowerContainer.vue"
    import {ref} from "vue"
    export default {
        name: "TabsDemo",
        components: {Tab,Tabs,FlowerContainer},
        setup(){
            const x=ref('导航1')
            const y=ref('导航1')
            const z=ref('导航1')
            const theme=["black","simple"]
            return {x,y,z,theme}
        }
    }
</script>

<style >

</style>