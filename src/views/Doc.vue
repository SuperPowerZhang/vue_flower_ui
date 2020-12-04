<template>
    <div class="layout">
        <Topnav class="nav"/>
        <div class="content">
           <div class="aside" v-if="asideVisible">
            <h2>组件列表</h2>
            <ol>
                <li><router-link to="doc/switch">Switch 组件</router-link></li>
                <li><router-link to="doc/button">Button 组件</router-link></li>
                <li><router-link to="doc/dialog">Dialog 组件</router-link></li>
                <li><router-link to="doc/tabs">Tabs 组件</router-link></li>
            </ol>
        </div>
        <div class="main">
            <router-view />
        </div>
    </div>
    </div>
</template>

<script lang="ts">
    import {
        inject,
        Ref
    } from "vue";
    import Topnav from '../components/Topnav.vue';


    export default {
        name: "Doc",
        components:{
            Topnav
        },
        setup(){
            const asideVisible = inject < Ref < boolean >> ("asideVisible");
            return {asideVisible}
        }
    }
</script>

<style lang="scss" scoped>
    $aside-index : 10;
    .layout {
        display: flex;
        flex-direction: column;
        height: 100vh;
        >.nav{
            flex-shrink: 0;
        }
        >.content {
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-grow: 1;
            margin-top: 70px;
            /*padding-left: 156px;*/
            @media (max-width: 500px) {
                padding-left: 0;
                margin-top: 20px;
                justify-content:start ;
            }
       >.aside{
           background: rgb(255, 255, 255);
           padding: 16px 0;
           height: 100%;
           z-index: $aside-index;
           color: rgb(36, 41, 46);
           @media (min-width: 500px) {
               width: 180px;
           }
           >h2 {
               margin-bottom: 4px;
               padding: 0 16px;
               width: 110px;
               @media (max-width: 500px) {
                   font-size: 18px;
                   font-weight: 700;
                   padding: 0 8px;
               }
           }
           >ol {
               >li {

                   &:hover,
                   &:focus{
                       background-color: rgb(3, 102, 214);
                       color: rgb(255,255,255);
                   }
                   >a {
                       display: block;
                       padding: 6px 8px;
                       color:rgb(149, 157, 165);
                       text-decoration: none;
                   }
                   .router-link-active {
                       background: white;
                   }
               }
           }
       }
            >.main{
                overflow: auto;
                padding: 16px ;
            }
        }
        }


</style>