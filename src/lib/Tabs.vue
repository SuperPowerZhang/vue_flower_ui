<template>
<!--    <slot />-->
    <div class="flower-tabs-hContainer">
        <div class="flower-tab-h selected" >a</div>
        <div class="flower-tab-h" v-for="(t,index) in titles" :key="index">{{t}}</div>
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
        setup(props:any,context:any){
            const defaults=context.slots.default()
            console.log(defaults[0].props)
            defaults.forEach((tag:VNode)=>{
                if(tag.type!==Tab){
                    throw new Error("Tabs里面必须是Tab类型组件")
                }
            })
            const titles=defaults.map((tag:VNode)=>{
                    return tag.props?.title?tag.props.title:"默认标题"
            })
            return {titles,defaults}
        }
    }
</script>

<style lang="scss">
    $distance:8px;
    $red : rgb(249,130,108);
    .flower-tabs-hContainer{
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
            &:hover{
                border-bottom: 2px solid rgb(209, 213, 218);
                border-bottom:2px solid $red;
            }
            &:focus{

                font-weight: 600;
            }
            @media(max-width:500px){
                font-size:14px;
            }

        }
    }

</style>