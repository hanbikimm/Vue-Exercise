<template>
  <div id="app">
    <MainHome></MainHome>
  </div>
</template>

<script>

import MainHome from './components/MainHome.vue';

export default {
  name: 'App',
  components: {
    MainHome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
