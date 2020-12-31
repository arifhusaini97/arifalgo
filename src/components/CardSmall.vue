<template>
  <div class="card">
    <div class="card-image"></div>
    <div class="card-text">
      <!--<span class="date">17/12/2020</span>-->
      <h2>Circle 1</h2>
      
    </div>
    
  </div>
</template>

<script>
export default {
  name: "CardSmall",
  components: {},
};
</script>

<style lang="scss" scoped>

.card {
  display: grid;
  //   width: 144px;
  //   height: 233px;
  //   grid-template-columns: 144px;
  //   grid-template-rows: 144px 89px;
  width: 55%;
  height: 75%;


//   width: 50px/100px *100%;
//   height: 50px/100px *100%;
  grid-template-rows: 80% 20%;
  grid-template-areas: "image" "text";
  border-radius: 3%;
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  transition: 0.5s ease;
  margin-left: 22.5%;
  
  margin-right: 22.5%;

  cursor: pointer;

  .card-image {
    grid-area: image;
    background: url("../assets/arts_1.png");
    border-top-left-radius: 3%;
    border-top-right-radius: 3%;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: contain;
  }
  .card-text {
    display: flex;
    flex-direction: column;
    grid-area: text;
    // margin: 13px;
    border-radius: 3%;
    background-color: #bf5934;
    color: white;
    justify-content: center;
    align-items: center;

    // .date {
    //   color: white;
    //   font-size: 25%;
    // }

    h2 {
      font-size: 100%;
    }
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  }

}
</style>
