<template>
  <div class="chat-main-wrap" v-on="$listeners">
    <div class="chat-main-scroll">
      <bs-pull height="600px">
        <slot name="header"></slot>
        <slot name="main"></slot>
        <!-- <b-scroll> </b-scroll> -->
        <slot name="footer"></slot>
      </bs-pull>
    </div>
  </div>
</template>

<script>
// import BsCore from "../../BetterScroll/BsCore";
import BsPull from "../../BetterScroll/BsPull";
export default {
  name: "ChatMain",
  components: { BsPull },
  data() {
    return {
      chatRecordStyle: {},
      overlayStyle: {
        /* "max-width": "60%" */
      },
      visible: true
    };
  },
  props: {
    showBackIcon: {
      type: [Boolean],
      default: false,
      required: false
    },
    defaultBack: {
      type: [Boolean],
      default: true,
      required: false
    },
    backRoute: {
      type: [Object],
      default() {
        return null;
      },
      required: false
    }
  },
  methods: {
    /* async pullingDownHandler() {
      console.log("trigger pullDown");
      this.beforePullDown = false;
      this.isPullingDown = true;
      STEP += 1;
      /* await this.requestData(); */
    /*console.log(STEP);
      this.isPullingDown = false;
      this.finishPullDown();
    }, */
    clickBackIcon() {
      if (this.defaultBack) {
        this.$router.go(-1);
      } else {
        let backRoute = this.backRoute;
        if (backRoute) {
          this.$router.push(backRoute);
        } else {
          this.$emit("back");
        }
      }
    },
    changeChatRecord(e) {
      if (!e || !e.target) {
        return;
      }
      this.$emit("changeChatRecord", e.target.value, e.target.checked);
    },
    handleButtonClick(e) {
      console.log("click left button", e);
    },
    handleMenuClick(e) {
      console.log("click", e);
    }
  },
  mounted() {}
};
</script>

<style>
.chat-main-wrap {
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background-color: #e1dfde; */
  background-color: white;
  /* position: absolute; */
  width: 100%;
  /* top: 0;
  padding: 0 1rem; */
  /* #e1dfde */
  /* padding: 2rem 0.5rem; */
  position: absolute;
  top: 4rem;
}
.chat-main-scroll {
  width: 100%;
}
</style>
