<template>
  <div class="better-scroll-wrap">
    <div class="bscroll" :style="{ height, width }" :ref="bsWrap">
      <div class="pull-scroller">
        <div class="pull-wrapper">
          <div v-show="beforePullDown">
            <slot name="beforePullDown"></slot>
          </div>
          <div v-show="!beforePullDown">
            <div v-show="isPullingDown">
              <slot name="isPullingDown"><span>Loading...</span></slot>
            </div>
            <div v-show="!isPullingDown">
              <slot name="afterPullDown"><span>Refresh success</span></slot>
            </div>
          </div>
        </div>
        <ul class="pull-list">
          <slot></slot>
        </ul>
        <div class="pullup-tips">
          <div v-if="!isPullUpLoad" class="before-trigger">
            <slot name="beforePullUpLoad"
              ><span class="pullup-txt">Pull up and load more</span></slot
            >
          </div>
          <div v-else class="after-trigger">
            <slot name="isPullUpLoad"
              ><span class="pullup-txt">Loading...</span></slot
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import BScroll from "@better-scroll/core";
// import MouseWheel from "@better-scroll/mouse-wheel";
// import ScrollBar from "@better-scroll/scroll-bar";
// import PullDown from "@better-scroll/pull-down";
// import Pullup from "@better-scroll/pull-up";

// BScroll.use(MouseWheel);
// BScroll.use(ScrollBar);
// BScroll.use(PullDown);
// BScroll.use(Pullup);
import BsMixin from "./bs-mixin";

const TIME_BOUNCE = 800;
const TIME_STOP = 600;

export default {
  name: "BsPull",
  mixins: [BsMixin],
  data() {
    return {
      beforePullDown: true,
      isPullingDown: false,
      isPullUpLoad: false
    };
  },
  props: {
    pullingDownHandler: {
      type: [Function],
      default() {
        return {};
      },
      required: false
    },
    scrollHandler: {
      type: [Function],
      default() {
        return {};
      },
      required: false
    },
    scrollEnd: {
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
  methods: {
    initBscroll() {
      let BScroll = this.BScroll;
      let bscroll = new BScroll(
        `#${this.bsWrap}`,
        Object.assign(
          {
            pullDownRefresh: true,
            pullUpLoad: true,
            scrollbar: { fade: true, interactive: true } || true,
            mouseWheel: {
              speed: 20,
              invert: false,
              easeTime: 300
            }
          },
          this.bsOptions
        )
      );
      this.bscroll = bscroll;
      this.bscroll.on("pullingDown", this.pullingDown);
      this.bscroll.on("scroll", this.scroll);
      this.bscroll.on("scrollEnd", e => {
        console.log("scrollEnd   " + e);
      });
      this.bscroll.on("pullingUp", this.pullingUp);
    },
    async pullingDown() {
      this.beforePullDown = false;
      this.isPullingDown = true;
      await this.pullingDownHandler();
      this.isPullingDown = false;
      this.finishPullDown();
    },
    async finishPullDown() {
      await new Promise(resolve => {
        setTimeout(() => {
          this.bscroll.finishPullDown();
          resolve();
        }, TIME_STOP);
      });
      setTimeout(() => {
        this.beforePullDown = true;
        this.bscroll.refresh();
      }, TIME_BOUNCE);
    },
    async pullingUp() {
      this.isPullUpLoad = true;

      await this.pullingUpHandler();

      this.bscroll.finishPullUp();
      this.bscroll.refresh();
      this.isPullUpLoad = false;
    }
  },
  mounted() {
    this.initBscroll();
  }
};
</script>

<style>
.bscroll {
  position: relative;
  height: 100%;
  padding: 0 10px;
  border: 1px solid #ccc;
  overflow: hidden;
}
</style>
