<template>
  <div class="sidebar"><SideBar /></div>

  <div class="main"><router-view /></div>
</template>

<script>
import SideBar from "./components/SideBar.vue";

export default {
  name: "App",
  components: {
    SideBar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  // font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-columns: 1fr 9fr;

  min-height: 100%;
  height: 100%;

  .sidebar {
    min-height:100%;
    height: 100%; /* Full-height: remove this if you want "auto" height */
    min-width: 75px;
    // width: 12.8%; /* Set the width of the sidebar */
    // position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    // z-index: 1; /* Stay on top */
    // top: 0; /* Stay at the top */
    // left: 0;
    background-color: teal; /* Black */
    // overflow-x: hidden; /* Disable horizontal scroll */
    flex-direction: column;
    border-right: double;
    border-right-width: 0.4%;
    border-right-style: solid;
    border-color: #2c3e50;
  }

  /* Style page content */
  .main {
    min-height: 100%;
    height: 100%;
    // min-width: 510px;
    // width: 87.2%;
    // width:100%;
    // position: relative;
    // right: 0px;
    // margin-left:75px; /* Same as the width of the sidebar */
    // position: fixed;
    // top: 50%;
    // left: 50%;
    // margin-top: -100px;
  }
}
</style>
