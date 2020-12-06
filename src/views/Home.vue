
<template>
    <div class="home">
    <Topnav :toggleAsideButtonVisible="false"/>
    <div class="banner">
        <div class="logo" >
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-huadian-xiangrikui"></use>
            </svg>
        </div>
        <h1>Flower UI</h1>
        <h2>好用的UI框架</h2>
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
                    <div>
                        <h4>基于Vue 3</h4>
                        <p>使用了Vue3的API</p>
                    </div>

                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-typescript-def"></use>
                    </svg>
                    <div>
                        <h4>基于Typescript</h4>
                        <p>源代码采用typescript书写</p>
                </div>

                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-daima"></use>
                    </svg>
                    <div>
                        <h4>代码易读</h4>
                        <p>组件源代码简洁易用</p>
                    </div>

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

<style lang="scss" >
    $green: #02bcb0;
    $border-radius: 3px;
    $color: #007974;
    $white:rgb(243, 243, 243);
    .home{
        background: rgb(252,250,217);
        background: linear-gradient(90deg, rgba(252,250,217,1) 0%, rgba(222,201,225,1) 100%);
        max-width:1200px;
        height: 100vh;
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
                margin-bottom:16px ;
            }
             >h2{
                 margin-bottom:10px;
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
                 margin-top: 24px;
                 margin-bottom: 20px;
                 max-width: 6em;
                 >svg {
                     width: 80px;
                     height: 80px;
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
                    display: inline-grid;
                    grid-template-columns:40px 150px ;
                    padding: 8px 16px;
                    text-align: left;
                    justify-content: space-between;
                        line-height: 30px;
                        >div{
                            text-align: left;
                            margin-left: 8px;
                            h4{
                                font-size: 16px;
                            }
                            p{
                                font-size: 12px;
                            }
                        }
                    >.icon{
                        font-size: 40px ;
                        margin-top: 10px;
                    }
                }
            }
            }
        }
    }

</style>
