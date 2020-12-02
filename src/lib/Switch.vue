<template>
   <button @click="toggle" :class="{checked}">
       <span></span>
   </button>
</template>

<script lang="ts">
    import {ref,provide} from 'vue';
    export default {
        name: "Switch.vue",
        setup(){
            const checked=ref(false)
            const toggle=()=>{
                console.log(111)
                checked.value=!checked.value
            }
            return {checked,toggle}
        }
    }
</script>

<style scoped lang="scss">
    $h: 32px;
    $border-color: #d9d9d9;
    $color: #333;
    $blue: #40a9ff;
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
        }

    }
    button.checked{
        background-color: $blue;
    }
    button.checked > span{
        left: 34px ;
    }

</style>