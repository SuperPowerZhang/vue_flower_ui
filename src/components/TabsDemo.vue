<template>
    <FlowerContainer>
        <template v-slot:description>Tabs1</template>
        <template v-slot:lib>
            <Tabs>
                <Tab>Tab组件1</Tab>
                <Tab>Tab组件2</Tab>
                <Tab>Tab组件3</Tab>
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