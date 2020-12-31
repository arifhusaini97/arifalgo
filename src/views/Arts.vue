<template>
  <div class="arts">
    <div class="platform">
      <div class="platform-content">
        <CardSmall /><CardSmall /><CardSmall /><CardSmall /><CardSmall /><CardSmall /><CardSmall /><CardSmall />
      </div>
      <div class="platform-page">1 2 3 4</div>
    </div>
  </div>
</template>

<script>
import CardSmall from "../components/CardSmall.vue";
export default {
  name: "Arts",
  components: { CardSmall },
};
</script>

<style lang="scss" scoped>
.arts {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  // font-size: 40px;
  color: black;
  font-weight: 600;
  background-color: grey;
  .platform {
    display: grid;
      grid-template-columns: 1fr;
    grid-template-rows: 10fr 1fr;
    justify-content: center;
    align-items: center;
    background: white;
    height: 95%;
    width: 95%;
    // padding: 10px 10px 10px 10px;
    border-radius: 1%;
    background-size: cover;

    .platform-content {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      // grid-template-columns: 1fr 1fr;

      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      // padding: 10px 10px 10px 10px;
      border-radius: 1%;
      background-size: cover;
    }
    .platform-page {
      display: flex;
      justify-content: center;
      align-items: center;
      color:#bf5934;
    }
  }
}
</style>
