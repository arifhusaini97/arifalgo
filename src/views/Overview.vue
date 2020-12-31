<template>
  <div class="overview">
    <div class="user-profile">
      <div class="user-profile_user-panel">
        <div class="user-profile_card">
          <h1>Card</h1>
        </div>
      </div>
      <div class="user-profile_user-panel">
        <div class="user-profile_qualification"><h1>Qualification</h1></div>
      </div>
    </div>
    <div class="description">
      <div class="description-content"><h1>Description</h1></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overview",
  components: {},
};
</script>

<style lang="scss" scoped>
.overview {
  min-height: 100%;
  height: 100%;

  .user-profile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 50%;
    height: 50%;

    .user-profile_user-panel {
      background-color: white;
      border: 1px solid #dfe3e8;

      .user-profile_card {
        // width:50%;
        // padding: 3%;
        font-weight: bold;
        font-size: 50%;
      }
      .user-profile_qualification {
        // padding: 3%;
        font-weight: bold;
        font-size: 50%;
      }
    }
  }
  .description {
    display: flex;
    min-height: 50%;
    height: 50%;
    width: 100%;

    .description-content {
      // padding: 3%;
      width: 100%;
      background-color: white;
      // border-radius: 5px;
      border: 1px solid #dfe3e8;
      font-size: 50%;
    }
  }
}
</style>
