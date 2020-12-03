<template>
    <div>1111
    <button v-bind="$attrs"><slot /></button>
    </div>

</template>

<script >
    export default {
        name: "Button",
        inheritAttrs:false,
        setup(props,context){
            console.log({...props})
            console.log("——————————————————————————")
            console.log({...context.attrs})
            console.log(typeof context.attrs.size)
            console.log(typeof context.attrs.testBool)
            console.log(typeof context.attrs.disabled)
        }

    }
</script>

<style scoped>

</style>