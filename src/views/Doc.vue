<template>
    <div class="layout">
        <Topnav class="nav" toggleAsideButtonVisible="true"/>
        <div class="content">
           <div class="aside" v-if="asideVisible">
               <h4>文档</h4>
               <ol>
                   <li><router-link to="/doc">介绍</router-link></li>
                   <li><router-link to="/doc/install">安装</router-link></li>
                   <li><router-link to="/doc/get-started">开始使用</router-link></li>
               </ol>
            <h4>组件列表</h4>
            <ol>
                <li><router-link to="/doc/tabs">Tabs 组件</router-link></li>
                <li><router-link to="/doc/dialog">Dialog 组件</router-link></li>
                <li><router-link to="/doc/button">Button 组件</router-link></li>
                <li><router-link to="/doc/switch">Switch 组件</router-link></li>
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
    // import Tabs from '../lib/Tabs.vue'
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

<style lang="scss" >
    $aside-index : 10;
    .layout {
        background-color: rgb(246, 248, 250);
        max-width: 1200px;
        @media(max-width:500px){
            min-height: 100vh;
        }
        > .content {
        > .aside {
            font-size: 14px;
            padding: 16px;
            background-color:rgb(36, 41, 46);
            color: rgb(255,255,255);
            @media(min-width:500px){
                width: 250px;
            }
            > h4 {
                padding: 16px 12px;
                text-align: center;
            }
            > ol {
                > li {
                    > a {
                        display: block;
                        padding-top: 8px ;
                        padding-bottom:8px;
                        text-decoration: none;
                        font-weight: 600;
                        &.router-link-active{
                            color:rgb(190, 189, 165)
                        }
                    }
                    &:hover,
                    &:focus {
                        color:rgb(190, 189, 165)
                    }
                }
            }
        }
            >.main{
                flex:1;
                padding: 16px;
                @media(max-width:500px){
                    width: 100%;
                }
            }
        }

    }
    @media(min-width: 500px) {
        .layout {
            display: flex;
            flex-direction: column;
            > .nav {
                flex-shrink: 0;
            }
            > .content {
                display: flex;
                flex-direction: row;
                flex-grow: 1;
                margin: 70px 100px;
            }

            > .aside {
                background: rgb(255, 255, 255);
                padding: 16px 0;
                height: 100%;
                z-index: $aside-index;
                color: rgb(36, 41, 46);
                width: 180px;

                > h2 {
                    @media (min-width: 500px) {
                        padding: 0 16px;
                        width: 180px;
                    }
                }
            }
        }
        >.main {
            max-width: 1000px;
        }
    }

</style>