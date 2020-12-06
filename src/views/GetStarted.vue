<template>
    <article class="markdown-body" v-html="md" />
</template>

<script>
    import md from '../markdown/get-started.md'

    export default {
        name: "GetStarted",
        data(){
            return {md}
        }
    }
</script>

<style scoped>

</style>