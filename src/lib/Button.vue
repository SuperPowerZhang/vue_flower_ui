<template>
    <button class="flower-button"  :class="classes" v-bind="$attrs" :disabled="disabled" >
        <slot />
        <span v-if="loading" class="flower-loadingFlag"></span>
    </button>
</template>

<script >
    import {computed} from 'vue'
    export default {
        name: "Button",
        props:{
            theme:{
                type:String,
                default:"button"
            },
            size:{
                type:String,
                default:"normal"
            },
            level:{
                type: String,
                default:"normal"
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            loading: {
                type: Boolean,
                default: false,
            },
            other:{
                type:String,
                default:"normal"
            }
        },
        setup(props){
            const {theme,size,other}=props;
            const classes=computed(()=>{
                return {
                    [`theme-${theme}`]:theme,
                    [`size-${size}`]:size,
                    [`other-${other}`]:other
                }
            })
            return {classes}
        }
    }
</script>

<style lang="scss" >
    $green: #2ea44f;
    $padding-big:8px 20px;
    $padding-normal: 5px 16px;
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
        padding: $padding-normal;
        cursor: pointer;
        outline: none;
        border: 1px solid $border-color;
        border-radius: $radius;
        background-color: $green;
        color: $white;
        margin: $margin;
        vertical-align: middle;
        height: 36px;
        &.theme-button{
            &:hover,
            &:focus{
                background-color: #2c974b;
            }
            &.size-small{
                height: 23px;
                font-size: 10px;
                padding:$padding-small ;
            }
            &.size-big{
                height: 51px;
                font-size: 22px;
                padding:$padding-big ;
            }
            &[disabled]{
                background-color: rgb(246, 248, 250);
                color: rgb(209, 213, 218);
            }
            &.other-loading{
                background-color:rgb(248, 249, 250);
                color:$color;
                >.flower-loadingFlag{
                    display: inline-block;
                    content: "";
                    width: 12px;
                    height: 12px;
                    border:1px solid rgb(204, 205, 207);
                    border-right-color: rgb(36, 41, 46);
                    border-radius: 6px;
                    margin-left: 6px;
                    vertical-align: middle;
                    animation: loadingRotate 1s infinite linear;
                }
            }
        }
        @keyframes loadingRotate{
            0%{transform: rotate(0deg)}
            100%{transform: rotate(360deg)}
        }
        &.theme-text{
            background-color: $light-grey;
            color:$color;
            &:hover,
            &:focus{
                background-color: #f3f4f6;
            }
            &.size-small{
                height: 23px;
                font-size: 10px;
                padding:$padding-small ;
            }
            &.size-big{
                height: 51px;
                font-size: 22px;
                padding:$padding-big ;
            }
        }
        &.theme-link{
            padding:$padding-cute;
            color: #0366d6;
            background-color: $white;
            &:hover,
            &:focus{
                background-color: rgb(3, 102, 214);
                color: $white;
            }
            &.size-small{
                height: 23px;
                font-size: 10px;
                padding:$padding-small ;
            }
            &.size-big{
                height: 51px;
                font-size: 22px;
                padding:$padding-big ;
            }
        }
        &.other-wide{
            width: 250px;
            color: rgb(42, 41, 52);
            background-color:rgb(248, 249, 250);
            &:hover,
            &:focus{
                background-color: rgb(243, 244, 246);
            }
        }
    }
</style>