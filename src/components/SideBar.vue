<template>
  <div class="sidenav">
    <div><h1>ArifAlgo</h1></div>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
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
  width: 160px; /* Set the width of the sidebar */
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
  a {
    padding: 6px 8px 6px 16px;
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