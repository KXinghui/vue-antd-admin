<template>
  <div class="chat-main-wrap" v-on="$listeners">
    <div
      class="chat-main-scroll"
      :pullingDownHandler="pullingDownHandler"
      :pullingUpHandler="pullingUpHandler"
    >
      <bs-pull
        :height="chatMainScrollHeight"
        :isRefresh.sync="isRefresh"
        :pullingDownHandler="pullingDownHandler"
        :pullingUpHandler="pullingUpHandler"
      >
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
      isRefresh: false
    };
  },
  props: {
    isAutoHeight: {
      type: [Boolean],
      default: true,
      required: false
    },
    listenClassWrap: {
      type: [Array],
      default: function() {
        return ["chat-header-wrap", "chat-tabbar-wrap"];
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
    chatMainScrollHeight() {
      let height = 650;
      if (this.isAutoHeight) {
        // TODO 计算滚动容器高度
      }
      return `${height}px`;
    }
  },
  methods: {
    resizeCchatMainScrollHeight() {
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
    this.resizeCchatMainScrollHeight();
    window.addEventListener("resize", this.resizeCchatMainScrollHeight);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeCchatMainScrollHeight);
  }
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
