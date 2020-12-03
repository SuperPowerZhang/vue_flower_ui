<template>

    <button class="flower-button"  :class="{[`theme-${theme}`]:theme}" v-bind="$attrs"><slot /></button>


</template>

<script >
    export default {
        name: "Button",
        props:{
            theme:{
                type:String,
                default:"button"
            }
        }

    }
</script>

<style >

</style>