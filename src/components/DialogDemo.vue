<template>
    <div >
        <FlowerContainer>
            <template v-slot:description>需手动关闭的对话框</template>
            <template v-slot:lib>
                <Button  @click="toggle" >展示/关闭</Button>
                <Dialog v-model:visible="x" :WrapperClose="WrapperClose" :ok="ok" :title="title" >
                    <template v-slot:title>
                        <span>标题替换提示</span>
                    </template>
                    <template v-slot:content>
                        <p>内容替换提示</p>
                        <p>内容替换提示</p>
                    </template>
                </Dialog>
            </template>
        </FlowerContainer>
        <FlowerContainer>
            <template v-slot:description>自动关闭的对话框</template>
            <template v-slot:lib>
                <Button  @click="showDialogWhile" >展示</Button>
                <Dialog  :visible="y"  :WrapperClose="WrapperClose" :buttonNeed="buttonNeed" :ok="ok" :cancel="cancel" :title="title" >
                    <template v-slot:title>
                        <span>标题替换提示</span>
                    </template>
                    <template v-slot:content>
                        <p>内容替换提示</p>
                        <p>内容替换提示</p>
                    </template>
                </Dialog>
            </template>
        </FlowerContainer>
        <FlowerContainer>
            <template v-slot:description>一键创建的对话框</template>
            <template v-slot:lib>
                <div class="flower-button-container">
                    <Button  @click="showDialog" >创建</Button>
                </div>
            </template>
        </FlowerContainer>



    </div>
</template>

<script>
    import Button from "../lib/Button.vue";
    import Dialog from "../lib/Dialog.vue";
    import FlowerContainer from "../lib/FlowerContainer.vue"
    import {openDialog} from "../lib/openDialog"
    import {ref} from 'vue';
    export default {
        name: "DialogDemo",
        components:{
            FlowerContainer,
            Dialog,
            Button
        },
        setup(){
            const theme='text'
            const x=ref(false)
            let y=false
            const WrapperClose= true
            const buttonNeed=false
            const toggle=()=>{
                x.value=!x.value
            }
            const ok=()=>{
                return true
            }
            //这里的cancel意义不大，因为取消对话框一般不需要校验什么，应该不需要返回值，以防万一需要
            const cancel=()=>{
                return true
            }
            const title="标题"
            const showDialog=()=>{
                openDialog({title:"参数里的标题",content:"参数里的内容"})
            }
            const showDialogWhile=()=>{
                console.log(2222)
                console.log(y)
                y =true
                console.log(y)
                setTimeout(()=>{
                    y=false
                },250)
                setTimeout(()=>{
                    console.log(y,"更新了")
                },500)
            }

            return {title,buttonNeed,theme,WrapperClose,x,y,toggle,ok,cancel,showDialog,showDialogWhile}
        }
    }
</script>

<style >

</style>