<template>
    <div class="topnav">
        <div class="toggleAside" @click="toggleAside">
            <i class="iconfont">&#xe64a;</i>
            </div>
        <div class="logo" >
            <img src="../assets/logonew.jpg" style="width: 50px;height: 50px">

            </div>
        <ul class="menu">
            <li>
                <router-link to="/">Home </router-link>
            </li>
            <li>
                <router-link to="/doc"> Doc</router-link>
            </li>
        </ul>
        <hr />

    </div>
</template>

<script lang="ts">
    import {inject,Ref} from "vue"
    export default {
        name: "Topnav",
        setup(){
            const asideVisible= inject< Ref <boolean>>('asideVisible')
            const toggleAside=()=>{
                asideVisible.value=!asideVisible.value
            }

            return {toggleAside}
        }
    }
</script>

<style lang="scss" scoped>
    $color: #02bcb0;
    .topnav {
        color: $color;
        display: flex;
        padding: 16px;
        width: 100%;
        z-index: 20;
        justify-content: center;
        align-items: center;
        >.toggleAside{
            display:none;
        }
        >.logo{
        max-width: 6em;
        margin-right: auto;
            >svg {
            width: 32px;
            height: 32px;
        }
    }
        >.menu{
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;
            >li {
                margin: 0 1em;
            }
        }
        @media (max-width: 500px) {
            >.menu {
                display: none;
            }
            >.logo {
                margin: 0 auto;
            }
            >.toggleAside {
                display: inline-block;
                width: 32px;
                height: 32px;
                >.iconfont{
                        font-family:"iconfont" !important;
                        font-size:32px;
                        font-style:normal;
                    color: rgb(36, 41, 46);
                        -webkit-font-smoothing: antialiased;
                        -webkit-text-stroke-width: 0.2px;
                        -moz-osx-font-smoothing: grayscale;
                    }
                }
    }
    }

</style>