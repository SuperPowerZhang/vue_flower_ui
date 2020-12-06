<template>
    <button @click="toggle" :class="{checked:value}" :class="{[`theme-${theme}`]:theme}">
        <span></span>
    </button>
</template>

<script lang="ts">
    export default {
        props:{
            value:Boolean,
            theme:{
                type:String,
                default:'normal'
            }
        },
        name: "Switch.vue",
        setup(props:any,context:any){
            const toggle=()=>{
                context.emit('update:value',!props.value)
            }
            return {toggle}
        }
    }
</script>

<style scoped lang="scss">
    $h: 32px;
    $border-color: #d9d9d9;
    $color: #333;
    $blue: rgb(200, 225, 255);
    $green:rgb(44, 151, 75);
    $radius: 4px;
    $red: red;
    $grey: grey;
    button{
        position: relative;
        height: $h;
        width: $h*2;
        padding: 0 12px;
        border: 1px solid $border-color;
        border-radius: $h/2;
        background-color: $grey;
        outline:none;
        >span{
            position: absolute;
            top: 2px;
            left: 2px;
            height: $h - 6px;
            width: $h - 6px;
            background-color: #fff;
            border-radius: ($h - 4px)/2;
            transition: left 250ms;
        }
        &.checked{
            background-color: $green;
            border-color: $green;
            &.theme-simple{
                background-color: $blue;
                border-color: $blue;
            }
        }
        &.checked > span{
            left: 34px ;
        }
    }
</style>