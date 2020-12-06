<template>
    <div class="flower-container">
        <h3 class="flower-container-h3">
<!--            标题-->
            <slot name="description"></slot>
        </h3>
        <div class="flower-container-lib">

                <slot name="lib"></slot>
        </div>
<!--        <div class="flower-container-demo">-->

<!--        </div>-->
    </div>
</template>

<script lang="ts">
    export default {
        name: "FlowerContainer",
        // props:{
        //     component:Object
        //
        // }
    }
</script>

<style lang="scss">
    .flower-container{
        max-width: 1000px;
        >.flower-container-h3{
            font-size: 20px;
            color: rgb(36, 41, 46);
            border-bottom:1px solid rgb(234, 236, 239);
            padding-bottom: 16px;
            @media (max-width: 500px) {
                width: 100%;
                margin-top: 8px;
                font-size: 18px;
                padding-bottom: 8px;
            }
        }
        >.flower-container-lib{
            border-radius: 6px;
            /*display: flex;*/
            max-width: 1000px;
            /*justify-content: space-between;*/
            flex-wrap: wrap;
            padding: 16px;
            @media (max-width: 500px) {
                width: 100%;
                padding: 8px;
            }
        }
    }



</style>