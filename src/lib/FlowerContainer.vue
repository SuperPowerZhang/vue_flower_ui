<template>
    <div class="flower-container">
        <h3 class="flower-container-h3">
            {{component.__sourceCodeTitle}}
        </h3>
        <div class="flower-container-lib">
        <component :is="component"/>
        </div>
        <div class="flower-container-code">
        <Button @click="toggle" theme="text" >代码查看/隐藏</Button>
        <div v-if="codeVisible">
              <pre  class="language-html" v-html="html" />
        </div>
        </div>
    </div>
</template>

<script lang="ts">

    import Button from "./Button.vue";
    import 'prismjs';
    import 'prismjs/themes/prism.css';
    import {computed,ref} from 'vue';
    const Prism=(window as any).Prism
    export default {
        name: "FlowerContainer",
        props:{
            component:Object
        },
        components:{
            Button
        },
        setup(props:any){
            const codeVisible=ref(false)
            const html = computed(() => {
                return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
            })
            const toggle=()=>{
                codeVisible.value=!codeVisible.value
            }
            return {Prism,html,codeVisible,toggle}
        }
    }
</script>

<style lang="scss">
    .flower-container{
        max-width: 1000px;
        border-radius: 6px;
        margin-bottom: 16px;
        >.flower-container-h3{
            font-size: 20px;
            color: rgb(36, 41, 46);
            padding: 8px;
            /*border-bottom: 1px solid rgb(209, 213, 218);*/
            @media (max-width: 500px) {
                width: 100%;
                margin-top: 8px;
                font-size: 18px;
                padding-bottom: 8px;
            }
        }
        >.flower-container-lib{
            border-radius: 6px;
            max-width: 1000px;
            flex-wrap: wrap;
            padding: 16px;
            background-color: rgb(255, 255, 255);
            border:1px solid rgb(225, 228, 232);
            @media (max-width: 500px) {
                width: 100%;
                padding: 8px;
            }
        }
    }

</style>