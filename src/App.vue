<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <!--<NavBar />-->
  <SideBar />
  
  <!--<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>-->
  
  <div class="main">testing.qwertyuiop</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SideBar from "./components/SideBar.vue";
// import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    SideBar,
    // NavBar,
    //HelloWorld
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;

  /* Style page content */
  .main {
    margin-left: 160px; /* Same as the width of the sidebar */
    padding: 0px 10px;
  }
}
</style>
