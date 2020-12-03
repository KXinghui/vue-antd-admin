<template>
  <div
    class="base-main-wrap"
    :style="{ top: baseMainTop, height: baseMainHeight }"
    v-on="$listeners"
  >
    <div class="base-main-scroll">
      <!-- :pullingDownHandler="pullingDownHandler"
      :pullingUpHandler="pullingUpHandler" -->
      <!-- <bs-pull
        :isRefresh.sync="isRefresh"
        :pullingDownHandler="pullingDownHandler"
        :pullingUpHandler="pullingUpHandler"
      > -->
      <bs-core :options="{ scrollbar: false, nestedScroll: true }">
        <!-- <div slot="isPullingDown">
          <slot name="isPullingDown"></slot>
        </div>
        <div slot="afterPullDown">
          <slot name="afterPullDown"></slot>
        </div> -->
        <slot name="header"></slot>
        <slot name="main"></slot>
        <!-- <b-scroll> </b-scroll> -->
        <slot name="footer"></slot>
      </bs-core>
      <!-- </bs-pull> -->
    </div>
  </div>
</template>

<script>
import BsCore from "../../BetterScroll/BsCore.vue";
// import BsPull from "../../BetterScroll/BsPull";
export default {
  name: "BaseMain",
  components: { /* BsPull, */ BsCore },
  data() {
    return {
      isRefresh: false
    };
  },
  props: {
    baseMainTop: {
      type: [String, Number],
      default: "7.25%",
      required: false
    },
    baseMainHeight: {
      type: [String, Number],
      default: "85.5%",
      required: false
    },
    pullingDownHandler: {
      type: [Function],
      default() {
        return {};
      },
      required: false
    },
    pullingUpHandler: {
      type: [Function],
      default() {
        return {};
      },
      required: false
    }
  }
};
</script>

<style>
.base-main-wrap {
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background-color: #e1dfde; */
  background-color: white;
  width: 100%;
  position: absolute;
}
.base-main-scroll {
  width: 100%;
  height: 100%;
}
</style>
