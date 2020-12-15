<template>
  <div class="logo">ArifAlgo</div>
  <div class="sidenav">
    <router-link to="/dashboard">Dashboard</router-link>
    <router-link to="/arts">Arts</router-link>
    <router-link to="/learns">Learns</router-link>
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
  padding: 5px 5px 5px 5px;
  font-size: 35px;
  font-weight: bold;
}

.sidenav {
  /* The navigation menu links */

  a {
    padding: 7px 7px 7px 7px;
    text-decoration: none;
    font-size: 25px;
    color: black;
    display: flex;

    /* When you mouse over the navigation links, change their color */
    &:hover {
      color: #f2b705;
    }
  }
}
</style>