<template>
  <div class="better-scroll-wrap">
    <!-- :style="{ height, width, 'max-height': height }" -->
    <div :class="['bscroll', scrollXWrapClass]" :id="bsWrap" :ref="bsWrap">
      <div class="pull-scroller">
        <div class="pull-tips">
          <div v-show="beforePullDown" class="before-pull-down">
            <slot name="beforePullDown"></slot>
          </div>
          <div v-show="isPullingDown" class="pulling-down">
            <slot name="isPullingDown"
              ><span class="pulldown-text"
                ><a-divider
                  ><a-icon type="loading" /> Loading...</a-divider
                ></span
              ></slot
            >
          </div>
          <div v-show="!beforePullDown">
            <div v-show="!isPullingDown" class="after-pull-down">
              <slot name="afterPullDown"
                ><span class="pulldown-text">Refresh success</span></slot
              >
            </div>
          </div>
        </div>
        <div :class="['pull-list', scrollXContentClass]">
          <slot></slot>
        </div>
        <div class="pullup-tips">
          <div v-show="beforePullUp" class="before-pull-up">
            <slot name="beforePullUp"></slot>
          </div>
          <div v-show="isPullingUp" class="pulling-up">
            <slot name="isPullingUp"
              ><!-- <span class="pullup-text"
                > --><a-divider><a-icon type="loading" /> Loading...</a-divider
              ><!-- </span
              > --></slot
            >
          </div>
          <div v-show="!beforePullUp">
            <div v-show="!isPullingUp" class="after-pull-up">
              <slot name="afterPullUp"
                ><span class="pullup-text">Pull up and load success</span></slot
              >
            </div>
          </div>
        </div>
        <div v-show="isScrollEnd" class="scroll-end">
          <slot name="scroll-end">
            <a-divider>我是有底线的</a-divider>
          </slot>
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

// [BScroll warn]: EventEmitter has used unknown event type

const TIME_BOUNCE = 800;
const TIME_STOP = 600;

export default {
  name: "BsPull",
  mixins: [BsMixin],
  data() {
    return {
      beforePullDown: true,
      beforePullUp: true,
      isPullingDown: false,
      isPullingUp: false,
      defaultBsOptions: {
        probeType: 2,
        pullDownRefresh: true,
        pullUpLoad: true,
        scrollbar: { fade: true, interactive: true } || true,
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 300
        }
      }
    };
  },
  props: {
    isScrollEnd: {
      type: [Boolean],
      default: false,
      required: false
    },
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
        this.$refs[this.bsWrap] || `#${this.bsWrap}`,
        Object.assign(this.defaultBsOptions, this.bsOptions)
      );
      this.bscroll = bscroll;
      this.bscroll.on("pullingDown", this.pullingDown);
      this.bscroll.on("scroll", this.scroll);
      this.bscroll.on("scrollEnd", e => {
        if (e.y == -1) {
          console.log("scrollEnd   " + JSON.stringify(e));
        }
      });
      this.bscroll.on("pullingUp", this.pullingUp);
    },
    async pullingDown() {
      this.beforePullDown = false;
      this.isPullingDown = true;
      await this.pullingDownHandler();
      // let vm = this;
      // setTimeout(function() {
      //   vm.isPullingDown = false;
      // }, 3000);
      // this.isPullingDown = false;
      this.finishPullDown();
    },
    async finishPullDown() {
      await new Promise(resolve => {
        let timer = setTimeout(() => {
          this.bscroll.finishPullDown();
          resolve();
          this.isPullingDown = false;
          clearTimeout(timer);
        }, TIME_STOP);
      });
      let timer = setTimeout(() => {
        this.beforePullDown = true;
        this.bscroll.refresh();
        clearTimeout(timer);
      }, TIME_BOUNCE);
    },
    async pullingUp() {
      this.beforePullUp = false;
      this.isPullingUp = true;
      await this.pullingUpHandler();
      // let vm = this;
      // setTimeout(function() {
      //   vm.isPullingUp = false;
      // }, 3000);
      // this.isPullingUp = false;
      this.finishPullUp();
    },
    async finishPullUp() {
      await new Promise(resolve => {
        let timer = setTimeout(() => {
          this.bscroll.finishPullUp();
          resolve();
          this.isPullingUp = false;
          clearTimeout(timer);
        }, TIME_STOP);
      });
      let timer = setTimeout(() => {
        this.beforePullUp = true;
        this.bscroll.refresh();
        clearTimeout(timer);
      }, TIME_BOUNCE);
    }
  },
  mounted() {
    this.initBscroll();
  }
};
</script>

<style scoped>
.better-scroll-wrap {
  height: 100%;
  width: 100%;
}

.better-scroll-wrap .scroll-x-wrap {
  white-space: nowrap;
}
.better-scroll-wrap .scroll-x-content {
  display: inline-block;
}

.bscroll {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.before-pull-down,
.pulling-down,
.after-pull-down,
.before-pull-up,
.pulling-up,
.after-pull-up {
  display: flex;
  justify-content: center;
  align-content: center;
}

.after-pull-down,
.after-pull-up {
  margin: 1rem 0;
}

.pullup-text,
.pulldown-text {
  transition: 0.5s;
}
</style>
