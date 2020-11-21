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
        <div class="main">主要内容</div>
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
            flex-grow: 1;
            margin-top: 70px;
            padding-left: 156px;
            @media (max-width: 500px) {
                padding-left: 0;
            }
            >.aside{
                background-color: pink;
            }
        }

    }

</style>