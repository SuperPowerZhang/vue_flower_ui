<template>
   <article class="markdown-body" v-html="md" />
</template>

<script >
    import md from '../markdown/intro.md'
    export default {
        name: "Intro",
        data(){
            return {md}
        }
    }
</script>

<style scoped>

</style>