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

<style lang="scss" >
$green: #2ea44f;
$padding-big: 5px 16px;
$padding-small:3px 12px;
$padding-cute:4px 8px;
$border-color: rgba(27, 31, 35, 0.15);
$font-size-small:12px;
$color: rgb(36, 41, 46);
$light-grey:rgb(250, 251, 252);
$radius: 6px;
$white:rgb(255, 255, 255);
$margin:4px;
.flower-button {
    box-sizing: border-box;
    padding: $padding-big;
    cursor: pointer;
    margin-top: 8px;
    outline: none;
    border: 1px solid $border-color;
    border-radius: $radius;
    background-color: $green;
    color: $white;
    margin-left: $margin;
    margin-right:$margin;
    &.theme-button{

        &:hover,
        &:focus{
            background-color: #2c974b;
        }
    }
    &.theme-small{
        padding:$padding-small ;
    }
    &.theme-text{
        background-color: $light-grey;
        color:$color;
        &:hover,
        &:focus{
            background-color: #f3f4f6;
        }
    }
    &.theme-link{
        padding:$padding-cute;
        color: #24292e;
        background-color: $white;
        &:hover,
        &:focus{
            color: #0366d6;
        }
    }
    &.theme-wide{
        width: 250px;
        color: rgb(42, 41, 52);
        background-color:rgb(248, 249, 250);
        &:hover,
        &:focus{
        background-color: rgb(243, 244, 246);
        }
    }
    &.theme-disabled{
        background-color: rgb(246, 248, 250);
        color: rgb(209, 213, 218);
    }
    &.theme-loading{
        background-color:rgb(248, 249, 250);
        color:$color;
        &::after{
            display: inline-block;
            content: "";
            width: 12px;
            height: 12px;
            border:1px solid rgb(204, 205, 207);
            border-right-color: rgb(36, 41, 46);
            border-radius: 6px;
            margin-left: 6px;
            vertical-align: middle;

        }
    }
}

</style>