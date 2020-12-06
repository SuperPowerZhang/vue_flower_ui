<template>
    <FlowerContainer>
        <template v-slot:description>默认导航栏</template>
        <template v-slot:lib>
            <Tab1Demo />
            <div>
                <Button>查看代码</Button>
                <div>
                    <pre>{{Tab1Demo.__sourceCode}}</pre>
                </div>
            </div>

        </template>
    </FlowerContainer>
    <FlowerContainer>
        <template v-slot:description>对比导航栏</template>
        <template v-slot:lib>
            <Tab2Demo />
            <div>
                <Button>查看代码</Button>
                <div>
                    <pre>{{Tab2Demo.__sourceCode}}</pre>
                </div>
            </div>
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
    <FlowerContainer>
        <template v-slot:description>纵向导航栏</template>
        <template v-slot:lib>
            <Tabs v-model:selected="a" :theme="theme[2]" >
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
    import Tab1Demo from "./Tab1Demo.vue";
    import Tab2Demo from "./Tab2Demo.vue";
    import Button from "../lib/Button.vue";
    export default {
        name: "TabsDemo",
        components: {Button, Tab1Demo, Tab2Demo, Tab,Tabs,FlowerContainer},
        setup(){
            const x=ref('导航1')
            const y=ref('导航1')
            const z=ref('导航1')
            const a=ref('导航1')
            const theme=["black","simple","column"]
            return {a,x,y,z,theme,Tab1Demo,Tab2Demo}
        }
    }
</script>

<style >

</style>