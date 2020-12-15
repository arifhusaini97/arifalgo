<template>
  <div class="sidenav">
    <div class="logo">ArifAlgo</div>
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
.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 170px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  // z-index: 1; /* Stay on top */
  // top: 0; /* Stay at the top */
  // left: 0;
  background-color: white; /* Black */
  // overflow-x: hidden; /* Disable horizontal scroll */
  flex-direction: column;
  border-right: double;
  border-right-width: 5px;
  border-right-style: solid;

  /* The navigation menu links */

  .logo{
    padding: 5px 5px 5px 5px;
    font-size: 35px;
    font-weight: bold;
  }

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