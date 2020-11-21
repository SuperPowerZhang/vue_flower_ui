<template>
  <div>导航 |
  <router-link to="/">Home</router-link> |
  <router-link to="/doc">Doc</router-link>
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
