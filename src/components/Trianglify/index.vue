<template>
  <div
    class="trianglify-wrap"
    :id="trianglifyRef"
    :ref="trianglifyRef"
    :style="trianglifyStyle"
  ></div>
</template>

<script>
const trianglify = require("trianglify");

export default {
  name: "Trianglify",
  data() {
    return {
      trianglifyRef:
        "trianglify-" +
        Math.random()
          .toString()
          .substr(2),
      trianglifyInterval: null
    };
  },
  props: {
    width: {
      type: [String, Number],
      default: "",
      required: true
    },
    height: {
      type: [String, Number],
      default: "",
      required: true
    },
    intervalSecond: {
      type: [String, Number],
      default: "",
      required: false
    },
    options: {
      type: [Object],
      default() {
        return {};
      },
      required: false
    }
  },
  computed: {
    trianglifyStyle() {
      return {
        width: parseInt(this.width),
        height: parseInt(this.height),
        position: "relative"
      };
    },
    trianglifyOptions() {
      return Object.assign(this.options, {
        width: parseInt(this.width),
        height: parseInt(this.height)
      });
    }
  },
  methods: {
    trianglify() {
      let vm = this;
      const canvas = trianglify(vm.trianglifyOptions).toCanvas();
      let trianglifyEle = vm.$refs[vm.trianglifyRef];
      let children = trianglifyEle.childNodes[0];
      children
        ? //   替换
          trianglifyEle.replaceChild(canvas, children)
        : //   添加
          vm.$refs[vm.trianglifyRef].appendChild(canvas);
    },
    init() {
      let vm = this;
      vm.destroy();
      let intervalSecond = vm.intervalSecond;
      if (intervalSecond && intervalSecond > 0) {
        vm.trianglifyInterval = setInterval(() => {
          vm.trianglify();
        }, vm.intervalSecond * 1000);
      } else {
        vm.trianglify();
      }
    },
    destroy() {
      let vm = this;
      let trianglifyInterval = vm.trianglifyInterval;
      if (trianglifyInterval) {
        clearInterval(trianglifyInterval);
      }
    }
  },
  watch: {
    intervalSecond() {
      this.init();
    },
    trianglifyOptions() {
      this.init();
    }
  },
  mounted() {
    this.init();
  },
  destroyed() {
    this.destroy();
  }
};
</script>

<style scoped>
.trianglify-wrap canvas {
  transition: 0.5s;
  position: absolute;
}
</style>
