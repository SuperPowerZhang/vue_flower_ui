<template>
    <article class="markdown-body" v-html="md" />

</template>

<script>
    import md from '../markdown/install.md'
    export default {
        name: "Install",
        data(){
            return {md}
        }
    }
</script>

<style scoped>

</style>