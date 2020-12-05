<template>
<!--    <slot />-->
    <div class="flower-tabs-hContainer">
        <div @click="select(t)" class="flower-tab-h" :class="{selected:t===selected}" v-for="(t,index) in titles" :key="index">{{t}}</div>
    </div>
    <div class="flower-tabs-contentContainer">
        <component  v-for="(c,index) in defaults" :is="c"  :class="{selected:c.title===selected}" :key="index" />
    </div>
    <!--        -->
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
            const defaults=[...context.slots.default()]
            const select=(title:String)=>{
                context.emit('update:selected',title)
            }
            console.log(defaults[0].props)
            defaults.forEach((tag:any)=>{
                if(tag.type!==Tab){
                    throw new Error("Tabs里面必须是Tab类型组件")
                }
                tag['title']=tag.props?.title?tag.props.title:"默认标题"
            })
            const titles=defaults.map((tag:any)=>{
                    return tag.title
            })
            return {titles,defaults,select}
        }
    }
</script>

<style lang="scss">
    $distance:16px;
    $red : rgb(249,130,108);
    .flower-tabs-hContainer{
        width: 100%;
        margin-left: $distance;
        margin-right: $distance;
        margin-bottom: 32px;
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
                transition: all 250ms;
            }
            @media(max-width:500px){
                font-size:14px;
            }

        }
    }
    .flower-tabs-contentContainer{
        margin-left: $distance;
        margin-right: $distance;
        @media (max-width: 500px) {
            width: 100%;
            font-size: 14px;
        }
        >div{
            display:none;
            width: 100%;
            padding: 80px 40px;
            border: 1px solid rgb(234, 236, 239);
            border-radius: 6px;
            text-align: center;
        &.selected{
            display: block;
            transition: all 250ms;
        }
            @media (max-width: 500px) {
                width: 100%;
                font-size: 14px;
                padding:24px;
            }
        }

    }

</style>