<template>
  <div>导航 |
  <router-link to="/">Flower</router-link> |
  <router-link to="/2">Grass</router-link>
  </div>
    <hr />
  <router-view />

</template>

<script>
import Flower from './components/Flower.vue'

export default {
  name: 'App',

}
</script>
