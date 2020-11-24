<template>
  <div
    class="base-main-wrap"
    :style="{ top: baseMainTop, height: baseMainHeight }"
    v-on="$listeners"
  >
    <div
      class="base-main-scroll"
      :pullingDownHandler="pullingDownHandler"
      :pullingUpHandler="pullingUpHandler"
    >
      <bs-pull
        :isRefresh.sync="isRefresh"
        :pullingDownHandler="pullingDownHandler"
        :pullingUpHandler="pullingUpHandler"
      >
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
      </bs-pull>
    </div>
  </div>
</template>

<script>
// import BsCore from "../../BetterScroll/BsCore";
import BsPull from "../../BetterScroll/BsPull";
export default {
  name: "BaseMain",
  components: { BsPull },
  data() {
    return {
      isRefresh: false
    };
  },
  props: {
    baseMainTop: {
      type: [String, Number],
      default: "7%",
      required: false
    },
    baseMainHeight: {
      type: [String, Number],
      default: "84%",
      required: false
    },
    isAutoHeight: {
      type: [Boolean],
      default: true,
      required: false
    },
    listenClassWrap: {
      type: [Array],
      default: function() {
        return ["base-header-wrap", "base-tabbar-wrap"];
      },
      required: false
    },
    listenRef: {
      type: [Array],
      default: function() {
        return [];
      },
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
  },
  computed: {
    baseMainScrollHeight() {
      let height = "84%" || this.baseMainHeight;
      if (this.isAutoHeight) {
        // TODO 计算滚动容器高度
      }
      return height.indexOf("%") != -1 ? height : `${height}px`;
    }
  },
  methods: {
    resizeBaseMainScrollHeight() {
      // TODO 计算滚动容器高度
      let height = 650;
      if (this.isAutoHeight) {
        if (this.listenClassWrap) {
          let windowHeight =
            window.innerHeight || document.documentElement.clientHeight;
          let listensHeight = 0;
          this.listenClassWrap.forEach(classWrap => {
            listensHeight += document.getElementsByClassName(classWrap)[0];
          });
          height = windowHeight - listensHeight;
        }
      }
      return `${height}px`;
    }
  },
  mounted() {
    this.resizeBaseMainScrollHeight();
    window.addEventListener("resize", this.resizeBaseMainScrollHeight);
    console.log(this.baseMainScrollHeight);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeBaseMainScrollHeight);
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
  /* position: absolute; */
  width: 100%;
  /* top: 0;
  padding: 0 1rem; */
  /* #e1dfde */
  /* padding: 2rem 0.5rem; */
  position: absolute;
  top: 7%;
  height: 84%;
}
.base-main-scroll {
  width: 100%;
  height: 100%;
}
</style>
