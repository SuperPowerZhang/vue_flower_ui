<template>
    <template v-if="visible">
    <Teleport to="body">
        <div class="flower-dialogWrapper" @click="clickWrapper">
            <div class="flower-dialog">
        <header>
            <slot name="title"/>
            <i class="iconfont" @click="close">&#xe644;</i></header>
        <main>
           <slot name="content"/>
        </main>
    <footer v-if="buttonNeed">
        <Button @click="clickOk">确认</Button>
        <Button :theme="theme" @click="clickCancel">取消</Button>
    </footer >
            </div>
    </div>
    </Teleport>
    </template>
</template>

<script lang="ts">
    import Button from "./Button.vue";
    export default {
        name: "Dialog",
        props:{
            visible:{
                type:Boolean,
                default:false
            },
            WrapperClose:{
                type:Boolean,
                default: true
            },
            ok:{
                type:Function
            },
            cancel:{
                type:Function
            },
            title:{
                type:String,
                default:'标题填写预警'
            },
            buttonNeed:{
                type:Boolean,
                default:true
            }
        },
        setup(props:any,context:any){
            const theme='text'
            const close=()=>{
                context.emit('update:visible',false)
            }
            const clickWrapper=()=>{
                if(props.WrapperClose){
                    close()
                }
            }
            const clickOk=(e:Event)=>{
                if(props.ok?.()===true){
                    close()
                }
                e.stopPropagation()
            }
            const clickCancel=(e:Event)=>{
                if(props.ok?.()===true){
                    //emit cancel目前未用到
                    context.emit('cancel')
                    close()
                }
                e.stopPropagation()
            }
            return {theme,clickOk,clickCancel,close,clickWrapper}
        },
        components:{Button},

    }
</script>

<style  lang="scss">
    $greyWrapper:rgba(27, 31, 35, 0.5);
    $border: 1px solid rgb(229, 231, 235);
    .flower-dialogWrapper{
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: $greyWrapper;
        width: 100vw;
        height: 100vh;
        font-size: 14px;
        z-index:100;
        .flower-dialog{
            background-color: #fff;
            margin-left: 16px;
            margin-right: 16px;
            border-radius: 6px;
            @media (min-width: 500px) {
                width: 446px;
                margin-left: auto;
                margin-right: auto;
            }

        >header{
                background-color: rgb(246, 248, 250);
                padding: 16px;
                font-weight: 600;
                border-radius: 6px 6px 0  0;
                border-bottom: $border ;
            display: flex;
            justify-content: space-between;
            >i{
                font-weight: 400;
                color: rgb(88, 96, 105);
            }
            }
            >main{
                padding: 16px;
                border-bottom: $border ;
            }
            >footer{
                display: flex;
                justify-content: center;
                padding: 16px;
            }
        }

    }



</style>