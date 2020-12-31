<template>
  <router-link to="/"><div class="logo">ArifAlgo</div></router-link>
  <div class="sidenav">
    <router-link to="/overview">Overview</router-link>
    <router-link to="/arts">Arts</router-link>
    <router-link to="/learns">Learns</router-link>
    <router-link to="/data">Data</router-link>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style lang="scss" scoped>
/* The sidebar menu */

.logo {
  // padding: 25px 5px 25px 5px;

  padding: 13% 1% 13% 1%;
  // font-size: 35px;
  font-size: 100%;
  font-weight: bold;
  color: white;
}

.sidenav {
  /* The navigation menu links */

  a {
    // padding: 7px 7px 7px 7px;
    // padding: 7% 7% 7% 7%;
    text-decoration: none;
    // font-size: 25px;
    font-size: 100%;
    height: 20%;
    color: white;
    display: flex;
    flex-direction: column;
    margin-top: 20%;

    /* When you mouse over the navigation links, change their color */
    &:hover {
      color: #f2b705;
    }
  }
}
</style>