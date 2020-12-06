<template>
    <div class="flower-tab" :title="title"> <slot /></div>
</template>

<script lang="ts">
    export default {
        name: "Tab",
        props:{
            title:String
        }
    }
</script>

<style >
</style>