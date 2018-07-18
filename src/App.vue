<template>
  <div id="app">
    <header-section></header-section>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/Tittle.vue'
export default {
  name: 'App',
  components: {
    headerSection: header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
