<template>
    <div>
        <div class="topnav"></div>
        <div class="logo"></div>
        <div class="menu"></div>
    </div>
    <div class="content">
        <div class="aside">边栏导航</div>
        <div class="main">主要内容</div>
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

</style>