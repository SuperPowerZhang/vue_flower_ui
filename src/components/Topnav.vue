<template>
    <div class="topnav">
        <div class="logo">
            logo
            <svg></svg>
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

<script>
    export default {
        name: "Topnav"
    }
</script>

<style lang="scss" scoped>
    $color: #02bcb0;
    .topnav {
        color: $color;
        display: flex;
        padding: 16px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 20;
        justify-content: center;
        align-items: center;
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

    }
    /*@media (max-width: 500px) {*/
    /*    >.menu {*/
    /*        display: none;*/
    /*    }*/
    /*    >.logo {*/
    /*        margin: 0 auto;        }*/
    /*    >.toggleAside {*/
    /*        display: inline-block;        }*/
    /*}*/

</style>