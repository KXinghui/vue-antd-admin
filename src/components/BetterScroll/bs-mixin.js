import BScroll from "@better-scroll/core";
import MouseWheel from "@better-scroll/mouse-wheel";
import ScrollBar from "@better-scroll/scroll-bar";
import NestedScroll from "@better-scroll/nested-scroll";
import ObserveDom from '@better-scroll/observe-dom'

import PullDown from "@better-scroll/pull-down";
import Pullup from "@better-scroll/pull-up";
import InfinityScroll from "@better-scroll/infinity";

BScroll.use(MouseWheel);
BScroll.use(ScrollBar);

// Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location:

const DEFAULT_BS_OPTIONS = {
  click: true,
  stopPropagation: true,
  dblclick: { delay: 300 } || true,
  scrollX: false,
  scrollY: true,
  probeType: 3,
  scrollbar: { fade: true, interactive: true },
  mouseWheel: {
    speed: 20,
    invert: false,
    easeTime: 300
  },
  observeDOM: false
};

export default {
  data() {
    return {
      bsWrap: "bs-" + this._uid,
      BScroll: null,
      defaultBsOptions: DEFAULT_BS_OPTIONS
    };
  },
  props: {
    isRefresh: {
      type: [Boolean],
      default: false,
      required: false
    },
    /* height: {
      type: [String, Number],
      default: "100%",
      required: false
    },
    width: {
      type: [String, Number],
      default: "",
      required: false
    }, */
    probeType: {
      type: [Number],
      default: 0,
      required: false,
      validator(value) {
        return 0 <= value && value <= 3;
      }
    },
    scrollY: {
      type: [Boolean],
      default: true,
      required: false
    },
    scrollX: {
      type: [Boolean],
      default: false,
      required: false
    },
    options: {
      type: [Object],
      default() {
        return this.defaultBsOptions;
      },
      required: false
    }
  },
  computed: {
    bsOptions() {
      return Object.assign(
        Object.assign(this.defaultBsOptions, this.options) || {},
        {
          scrollY: this.scrollY,
          scrollX: this.scrollX,
          probeType: this.probeType
        }
      );
    },
    scrollXWrapClass() {
      return this.bsOptions.scrollX ? "scroll-x-wrap" : "";
    },
    scrollXContentClass() {
      return this.bsOptions.scrollX ? "scroll-x-content" : "";
    }
  },
  methods: {
    initBscroll() {
      if (this.bsOptions.nestedScroll) {
        BScroll.use(NestedScroll);
      }
      if(this.bsOptions.observeDom){
        BScroll.use(ObserveDom);
      }
      let bscroll = new BScroll(
        this.$refs[this.bsWrap] || `#${this.bsWrap}`,
        this.bsOptions
      );
      this.bscroll = bscroll;
    },
    refreshBscroll() {
      if (this.isRefresh) {
        let bscroll = this.bscroll;
        bscroll && bscroll.refresh();
        this.$emit("update:isRefresh", !this.isRefresh);
      }
    },
    destroyBscroll() {
      let bscroll = this.bscroll;
      bscroll && bscroll.destroy();
    }
  },
  beforeMount() {
    if (this.$options.name === "BsPull") {
      BScroll.use(PullDown);
      BScroll.use(Pullup);
    }
    /* if (this.$options.name === "BsSlide") {
      BScroll.use(Slide);
    } */
    if (this.$options.name === "BsInfinity") {
      BScroll.use(InfinityScroll);
    }
    this.BScroll = BScroll;
  },
  mounted() {
    this.initBscroll();
  },
  beforeDestroy() {
    this.destroyBscroll();
  },
  watch: {
    bsOptions() {
      this.initBscroll();
    },
    isRefresh() {
      this.refreshBscroll();
    }
    /* height() {
      this.refreshBscroll();
    } */
  }
};
