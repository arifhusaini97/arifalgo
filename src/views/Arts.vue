<template>
  <div class="arts">
    <div class="card">
      <div class="card-image"></div>
      <div class="card-text">
        <span class="date">17/12/2020</span>
        <h2>Circle 1</h2>
        <p>
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla
        </p>
      </div>
      <div class="card-stats">
        <div class="stat">
          <div class="value">4<sup>m</sup></div>
          <div class="type">read</div>
        </div>

        <div class="stat border">
          <div class="value">5123</div>
          <div class="type">views</div>
        </div>

        <div class="stat">
          <div class="value">32</div>
          <div class="type">comments</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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

  .card {
    display: grid;
    grid-template-columns: 300px;
    grid-template-rows: 210px 210px 80px;
    grid-template-areas: "image" "text" "stats";

    // font-family: roboto;
    border-radius: 18px;
    background: white;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
    text-align: center;

    transition: 0.5s ease;
    cursor: pointer;

    .card-image {
      grid-area: image;
      background: url("../assets/arts_1.png");
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      background-size: cover;
    }
    .card-text {
      grid-area: text;
      margin: 25px;

      .date {
        color: rgb(255, 7, 110);
        font-size: 13px;
      }
      p {
        color: grey;
        font-size: 15px;
        font-weight: 300;
      }
      h2 {
        margin-top: 0px;
        font-size: 28px;
      }
    }
    .card-stats {
      grid-area: stats;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      background: rgb(255, 7, 110);

      .stat {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 10px;
        color: white;

        .type {
          font-size: 11px;
          font-weight: 300;
          text-transform: uppercase;
        }

        .value {
          font-size: 22px;
          font-weight: 500;

          sup {
            font-size: 12px;
          }
        }

        .border {
          border-left: 1px solid rgb(172, 26, 87);
          border-right: 1px solid rgb(172, 26, 87);
        }
      }
    }

    &:hover {
      transform: scale(1.2);
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
    }
  }
}
</style>
