<template>
    <FlowerContainer>
        <template v-slot:description>默认Tabs</template>
        <template v-slot:lib>
            <Tabs>
                <Tab title="1">Tab组件1</Tab>
                <Tab title="2">Tab组件1</Tab>
                <Tab >Tab组件3</Tab>
            </Tabs>
        </template>
    </FlowerContainer>
</template>

<script lang="ts">
    import Tabs from "../lib/Tabs.vue";
    import Tab from "../lib/Tab.vue"
    import FlowerContainer from "../lib/FlowerContainer.vue"
    export default {
        name: "TabsDemo",
        components: {Tab,Tabs,FlowerContainer}
    }
</script>

<style >

</style>