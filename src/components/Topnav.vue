<template>
    <div class="topnav">
<!--           -->
        <div class="toggleAside" >
            <svg class="icon" aria-hidden="true"  @click="toggleAside">
                <use xlink:href="#icon-liebiao"></use>
            </svg>
        </div>
        <div class="menu">
            <ul>
            <li>
                <router-link to="/">Home </router-link>
            </li>
            <li>
                <router-link to="/doc"> Doc</router-link>
            </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import {inject,Ref} from "vue"
    export default {
        name: "Topnav",
        setup(){
            const asideVisible= inject< Ref <boolean>>('true')
            const toggleAside=()=>{
                asideVisible.value=!asideVisible.value
            }
            return {toggleAside}
        }
    }
</script>

<style lang="scss" >
    $color: rgb(22, 22, 22);
    .topnav {
        color: $color;
        display: flex;
        padding: 16px;
        line-height: 32px;
        width: 100%;
        z-index: 20;
        /*justify-content: space-between;*/
        align-items: center;
        font-family: myFirstFont;
        >.toggleAside{
                display: inline-block;
                width: 32px;
                height: 32px;
                margin-left: 0;
                >.icon{
                    font-size:32px;
                    color: rgb(36, 41, 46);
                }
            }
        >.menu {
            display: inline-block;
            margin-right: 0;
            > ul {
                display: flex;
                justify-content: flex-end;
                flex-wrap: nowrap;
                li {
                display: inline-block;

                > a {
                    display: inline-block;
                    padding-left: 8px;
                    padding-rigth: 8px;
                    margin-left: 8px;
                }
            }
        }

        }
    }


    /*    }*/
    /*    @media (max-width: 500px) {*/
    /*        >.menu {*/
    /*            display: none;*/
    /*        }*/
    /*        >.logo {*/
    /*            margin: 0 auto;*/
    /*        }*/



</style>