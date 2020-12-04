<template>

    <Dialog v-model:visible="x">组件展示</Dialog>
</template>

<script>
    import Dialog from "../lib/Dialog.vue";
    import {ref} from 'vue';
    export default {
        name: "DialogDemo",
        components:{
            Dialog
        },
        setup(){
            const x=ref(true)
            return {x}
        }
    }
</script>

<style >

</style>