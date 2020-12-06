<template>
<!--    <slot />-->
    <div class="flower-tabs-hContainer" :class="{[`theme-${theme}`]:theme}">
        <div @click="select(t)" class="flower-tab-h" :class="{selected:t===selected}" v-for="(t,index) in titles" :key="index">{{t}}</div>
    </div>
    <div class="flower-tabs-contentContainer" :class="{[`theme-${theme}`]:theme}">
        <component  v-for="(c,index) in defaults" :is="c"  :class="{selected:c.title===selected}" :key="index" />
    </div>
</template>

<script lang="ts">
    import Tab from "./Tab.vue";
    import {VNode} from "vue"

    export default {
        name: "Tabs",
        props:{
            selected: {
                type:String
            },
            theme:{
                type:String,
                default:"white"
            }
        },
        setup(props:any,context:any){
            const defaults=[...context.slots.default()]
            const select=(title:String)=>{
                context.emit('update:selected',title)
            }
            defaults.forEach((tag:any)=>{
                // if(tag.type!==Tab){
                //     throw new Error("Tabs里面必须是Tab类型组件")
                // }
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
        padding-left: $distance;
        padding-right: $distance;
        margin-bottom: 32px;
        display: flex;
        justify-content: space-between;
        border-bottom:1px solid rgb(209, 213, 218);
        .flower-tab-h{
            padding:8px $distance;
            margin-left: auto;
            margin-right: auto;
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
        &.theme-white {
            @media(max-width: 500px) {
                width: 100%;
            }
        }
        &.theme-black{
            @media(max-width:500px){
                width: 100%;
            }
            background-color: rgb(36, 41, 46);
            .flower-tab-h{
                color: rgb(255,255,255);
                &:hover,
                &:focus{
                    color:rgb(150, 182, 193);
                }
                &.selected{
                    font-weight: 600;
                    border-bottom:2px solid rgb(255,255,255);
                    transition: all 250ms;
                }
            }
        }
        &.theme-simple{
            display: inline-block;
            justify-content: space-between;
            border:1px solid rgb(225, 228, 232);
            border-right: 0 solid rgb(225, 228, 232);
            border-radius: 6px;
            padding-left: 0;
            padding-right: 0;
            margin-bottom: 16px;
            .flower-tab-h{
                display: inline-block;
                color: rgb(36,41,46);
                border-bottom: 0;
                border-right: 1px solid rgb(225, 228, 232);
                padding: 5px 16px;
                &:hover,
                &:focus{
                    background-color: rgb(3, 102, 214);
                    color:rgb(255,255,255);
                }
                &.selected{
                    font-weight: 600;
                    transition: all 250ms;
                    background-color: rgb(3, 102, 214);
                    color:rgb(255,255,255);
                }
            }
            :first-child{
                border-radius: 6px 0 0 6px;
            }
            :last-child{
                border-radius:  0 6px 6px 0;
            }
        }
        &.theme-column {
            flex-direction: column;
            font-size: 14px;
            padding: 16px;
            background-color:rgb(36, 41, 46);
            width: 100%;
            border-bottom: 0;
            margin-bottom: 20px;
            .flower-tab-h {
                color: rgb(255,255,255);
                display: block;
                width: 100%;
                padding-top: 8px;
                padding-bottom: 8px;
                text-align: left;
                border-bottom: 1px solid rgb(68, 77, 86);
            &:hover,
            &:focus{
                color:rgb(150, 182, 193);
                border-bottom: 1px solid rgb(68, 77, 86);
            }
            &.selected{
                font-weight: 600;
                border-bottom:1px solid rgb(68, 77, 86);
                transition: all 250ms;
            }
        }
        }
    }
    .flower-tabs-contentContainer{
        padding-left: $distance;
        padding-right: $distance;
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
        &.theme-simple{
            padding-left: 0;
            padding-right: 0;
            margin-right:  $distance;
            background-color: rgb(246, 248, 250);
            >div{
                text-align: left;
                padding: 16px;
            }
        }
        &.theme-column{
            >div{
                text-align: left;
                padding: 16px;
            }
        }
    }

</style>