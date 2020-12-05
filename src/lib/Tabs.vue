<template>
<!--    <slot />-->
    <div class="flower-tabs-hContainer">
        <div @click="select(t)" class="flower-tab-h" :class="{selected:t===selected}" v-for="(t,index) in titles" :key="index">{{t}}</div>
    </div>

    <component v-for="(c,index) in defaults" :is="c" :key="index" />
<!--    <component :is="defaults[0]" />-->
<!--    <component :is="defaults[1]" />-->
<!--    <component :is="defaults[2]" />-->

</template>

<script lang="ts">
    import Tab from "./Tab.vue";
    import {VNode} from "vue"

    export default {
        name: "Tabs",
        props:{
            selected: {
                type:String
            }
        },
        setup(props:any,context:any){
            const defaults=context.slots.default()
            const select=(title:String)=>{
                context.emit('update:selected',title)
            }
            console.log(defaults[0].props)
            defaults.forEach((tag:VNode)=>{
                if(tag.type!==Tab){
                    throw new Error("Tabs里面必须是Tab类型组件")
                }
            })
            const titles=defaults.map((tag:VNode)=>{
                    return tag.props?.title?tag.props.title:"默认标题"
            })
            return {titles,defaults,select}
        }
    }
</script>

<style lang="scss">
    $distance:8px;
    $red : rgb(249,130,108);
    .flower-tabs-hContainer{
        width: 100%;
        margin-left: $distance;
        margin-right: $distance;
        display: flex;
        justify-content: space-between;
        border-bottom:1px solid rgb(209, 213, 218);
        @media(max-width:500px){
            width: 100%;
        }
        .flower-tab-h{
            padding:8px $distance;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 2px;
            border-bottom: 2px solid transparent;
            &:hover,
            &:focus{
                border-bottom: 2px solid rgb(209, 213, 218);
            }
            &.selected{
                font-weight: 600;
                border-bottom:2px solid $red;
            }
            @media(max-width:500px){
                font-size:14px;
            }

        }
    }

</style>