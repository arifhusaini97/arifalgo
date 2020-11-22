<template>
  <div class="nav">
    <div class="navigation_logo">ArifAlgo</div>
    <div class="navigation_user">arifhusaini97</div>
  </div>
</template>

<script>
export default {
    name:"NavBar",
}
</script>

<style lang="scss" scoped>
.nav {
  // width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: #49538C;
    color: white;
    // position:fixed;
    // z-index: 1;
    
    .navigation_logo {
      font-weight: bold;
      font-size: 24px;
    }
    .navigation_user {
      font-weight: bold;
    }
  }
</style>