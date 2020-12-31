<template>
  <div class="arts">
    <div class="platform">
      <div class="platform-content">
        <teleport to="#modals"
          ><div class="modal-blur" v-if="modal"></div
        ></teleport>
        <teleport to="#modals"
          ><div class="modal" v-if="modal">
            <div class="button-custom"   @click="modal = !modal">
              <a>
                <span class="left">
                  <span class="circle-left"></span>
                  <span class="circle-right"></span>
                </span>
                <span class="right">
                  <span class="circle-left"></span>
                  <span class="circle-right"></span>
                </span>
              </a>
            </div></div
        ></teleport>
        <CardSmall
          @click="modal = !modal"
        /><CardSmall /><CardSmall /><CardSmall /><CardSmall /><CardSmall /><CardSmall /><CardSmall />
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
  data() {
    return {
      modal: false,
    };
  },
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
      color: #bf5934;
    }
  }
}
.modal-blur {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  background: grey;
  text-align: center;
  border-radius: 1%;
  border-style: outset;
  // border-width: 7px;
  filter: blur(4px);
  opacity: 75%;
}
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 75%;
  width: 75%;
  background: white;
  text-align: center;
  border-radius: 1%;
  border-style: outset;
  border-width: 7px;
  // filter: blur(4px);
  // opacity:75%;
}
@mixin transition() {
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.button-custom {
  a {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 2.5%;
    top: 2.5%;
    background-color: #ffffff;
    border-radius: 50px;
    opacity: 1;
    @include transition();
    -webkit-box-shadow: 0px 0px 30px 0px rgba(247, 149, 29, 0.5);
    -moz-box-shadow: 0px 0px 30px 0px rgba(247, 149, 29, 0.5);
    box-shadow: 0px 0px 30px 0px rgba(247, 149, 29, 0.5);

    & > span {
      background-color: #f5a700;
      display: block;
      height: 12%;
      border-radius: 6px;
      @include transition();
      position: absolute;
      top: 47%;
      // margin-top: -6px;
      left: 18%;
      width: 64%;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      -moz-justify-content: space-between;
      -ms-justify-content: space-between;

      span {
        display: block;
        background-color: #ed7f00;
        // width: 12px;
        // height: 12px;
        width: 20%;
        height: 100%;
        border-radius: 6px;
        @include transition();
        position: absolute;
        left: 0;
        top: 0;
      }

      &.left {
        transform: rotate(45deg);
        transform-origin: center;

        .circle-left {
          @include transition();
          margin-left: 0;
        }

        .circle-right {
          @include transition();
          // margin-left: 52px;
          margin-left: 80%;
        }
      }

      &.right {
        transform: rotate(-45deg);
        transform-origin: center;

        .circle-left {
          @include transition();
          margin-left: 0;
        }

        .circle-right {
          @include transition();
          // margin-left: 52px;
          margin-left: 80%;
        }
      }
    }

    &:hover {
      & > span {
        background-color: #2faee0;
        @include transition();

        span {
          @include transition();
          background-color: #008ac9;
        }

        &.left {
          .circle-left {
            @include transition();
            // margin-left: 52px;
            margin-left: 80%;
          }

          .circle-right {
            @include transition();
            margin-left: 0;
          }
        }

        &.right {
          .circle-left {
            @include transition();
            // margin-left: 52px;
            margin-left: 80%;
          }

          .circle-right {
            @include transition();
            margin-left: 0;
          }
        }
      }
    }
  }
}
</style>
