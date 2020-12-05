
<template>
    <div class="home">
    <Topnav />
    <div class="banner">
        <div class="logo" >
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-huadian-xiangrikui"></use>
            </svg>
        </div>
        <h1>Flower UI</h1>
        <h2>厉害的UI框架</h2>
         <p class="actions">
             <router-link to="/doc">开始</router-link>
             <a href="https://github.com/SuperPowerZhang/vue_flower_ui">Github</a>
         </p>
        <div class="flower-home-intro">
            <ul>
                <li>
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-Vue"></use>
                </svg>
                    基于Vue 3
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-typescript-def"></use>
                    </svg>
                    基于Typescript
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-daima"></use>
                    </svg>
                    组件易用
                </li>
            </ul>
        </div>
    </div>
    </div>
</template>

<script>
    import Topnav from '../components/Topnav.vue'
    export default {
        name: "Home",
        components:{
            Topnav
        }
    }
</script>

<style lang="scss" scoped>
    $green: #02bcb0;
    $border-radius: 3px;
    $color: #007974;
    $white:rgb(243, 243, 243);
    .home{
        background: rgb(252,250,217);
        background: linear-gradient(90deg, rgba(252,250,217,1) 0%, rgba(222,201,225,1) 100%);
        height: 100vh;
        max-width:1200px;
        .banner {
            /*font-family: "Luckiest Guy";*/
            color: rgb(22,22,22);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-left: 16px;
            margin-right: 16px;
            >h1{
                font-family:myFirstFont;
                margin-bottom:20px ;
            }
             >h2{
                 margin-bottom:16px;
             }
            >.actions {
                padding: 8px 0;
                a {
                    margin: 0 8px;
                    background: rgb(16, 168, 13);
                    color: $white;
                    display: inline-block;
                    padding: 12px 24px;
                    border-radius: $border-radius;
                    &:last-child{
                        background-color: rgb(250, 251, 252);
                        color: rgb(36,41,46);
                    }
                }

            }
            >.logo{
                 margin-top: 30px;
                 margin-bottom: 24px;
                 max-width: 6em;
                 >svg {
                     width: 100px;
                     height: 100px;
                 }
             }
            >.flower-home-intro{
                margin-top: 24px;
                margin-bottom: 24px;
                width: 100%;
                >ul{
                    display: flex;
                    flex-wrap: wrap;
                    li{
                    display: inline-block;
                    padding: 8px 16px;
                    margin-left: auto;
                    margin-right: auto;
                    text-align: center;
                    justify-content: space-between;
                    >.icon{
                        font-size: 24px ;
                    }
                }
            }
            }
        }
    }
    /*.features {*/
    /*    margin: 64px auto;*/
    /*    padding: 0 16px;*/
    /*@media (min-width: 800px) {*/
    /*    width: 800px;*/
    /*    >ul {*/
    /*    >li {*/
    /*        width: 50%;*/
    /*    }*/
    /*}*/
    /*}*/
    /*@media (min-width: 1200px) {*/
    /*    width: 1200px;*/
    /*    >ul {*/
    /*    >li {*/
    /*        width: 33.3333%;*/
    /*    }*/
    /*}*/
    /*}*/
    /*>ul {*/
    /*    display: flex;*/
    /*    flex-wrap: wrap;*/
    /*>li {*/
    /*    margin: 16px 0;*/
    /*    display: grid;*/
    /*    justify-content: start;*/
    /*    align-content: space-between;*/
    /*    grid-template-areas:*/
    /*            "icon title"*/
    /*            "icon text";*/
    /*    grid-template-columns: 80px auto;*/
    /*    grid-template-rows: 1fr auto;*/
    /*>svg {*/
    /*    grid-area: icon;*/
    /*    width: 64px;*/
    /*    height: 64px;*/
    /*}*/
    /*>h3 {*/
    /*    grid-area: title;*/
    /*    font-size: 28px;*/
    /*}*/
    /*>p {*/
    /*    grid-area: text*/
    /*}*/
    /*}*/
    /*}*/
    /*}*/


</style>
