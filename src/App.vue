<template>
  <div id="app">
    <tittle-bar></tittle-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import Tittle from './components/Tittle.vue'
export default {
  name: 'App',
  components: {
    TittleBar: Tittle
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
