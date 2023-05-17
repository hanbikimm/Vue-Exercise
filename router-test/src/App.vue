<template>
  <div id="app">
    <div>
    <h1>Router Test</h1>
    <router-link :to="{ name: 'FirstHome' }">첫번째로 이동</router-link>
    <router-link :to="{ name: 'SecondHome' }">두번째로 이동</router-link>
    <router-view></router-view>
  </div>
    
    
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
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
