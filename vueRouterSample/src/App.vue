<template>
  <div id="app">
    <div id="nav">
      <AppHeader></AppHeader>
    </div>

    <!-- <router-view>에서는 현재 라우트에 맞는 컴포넌트가 렌더링</router-view> -->
    <router-view></router-view>
    <router-view name="middle"></router-view>
    <router-view name="bottom"></router-view>
  </div>
</template>
<script>
import AppHeader from "./components/common/AppHeader.vue";
export default {
  components: {
    AppHeader
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
