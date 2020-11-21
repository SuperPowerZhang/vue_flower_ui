<template>
    <div class="layout">
        <Topnav class="nav"/>
    <div class="content">
        <div class="aside">边栏导航</div>
        <div class="main">主要内容</div>
    </div>
    </div>
</template>

<script>
    import Topnav from '../components/Topnav.vue'
    export default {
        name: "Doc",
        components:{
            Topnav
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
            flex-grow: 1;
            margin-top: 80px;
            padding-left: 156px;
            @media (max-width: 500px) {
                padding-left: 0;
            }
        }

    }

</style>