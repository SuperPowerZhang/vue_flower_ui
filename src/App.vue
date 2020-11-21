<template>
<router-view />
</template>

<script>
import {ref,provide} from 'vue';

export default {
  name: 'App',
    setup(){
      const width=document.documentElement.clientWidth
        console.log(width)
      const asideVisible=ref(width>500?true:false)
        provide('asideVisible',asideVisible)
    },

}
</script>
