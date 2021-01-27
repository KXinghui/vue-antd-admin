<template>
  <div class="readium-wrap"></div>
</template>

<script>
// npm install readium-js
export default {
  name: "Readium",
  data() {
    return {
      topHeight: "3.5rem",
      bottomHeight: "3.5rem"
    };
  },
  props: {
    showClose: {
      type: [Boolean],
      default: false,
      required: false
    },
    closeText: {
      type: [String],
      default: "取消",
      required: false
    },
    topWrapClassName: {
      type: [String],
      default: "left",
      required: false
    },
    bottomWrapClassName: {
      type: [String],
      default: "left",
      required: false
    },
    topHeightPercent: {
      type: [String],
      default: "7.25%",
      required: false
    },
    bottomHeightPercent: {
      type: [String],
      default: "7.25%",
      required: false
    },
    topWidth: {
      type: [String],
      default: "",
      required: false
    },
    bottomWidth: {
      type: [String],
      default: "",
      required: false
    },
    topTitle: {
      type: [String],
      default: "",
      required: false
    },
    bottomTitle: {
      type: [String],
      default: "",
      required: false
    },
    topVisible: {
      type: [Boolean],
      default: true,
      required: false
    },
    bottomVisible: {
      type: [Boolean],
      default: true,
      required: false
    },
    topMask: {
      type: [Boolean],
      default: false,
      required: false
    },
    bottomMask: {
      type: [Boolean],
      default: false,
      required: false
    }
  },
  methods: {
    onClose() {
      this.$emit("update:topVisible", !this.topVisible);
      this.$emit("update:bottomisible", !this.bottomisible);
    },
    // 计算抽屉栏高度
    resizeBaseDrawerBarHeight() {
      // 网页可见区域高 [https://www.cnblogs.com/geektimi/p/5748664.html]
      let windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      this.topHeight = windowHeight * parseFloat(this.topHeightPercent) * 0.01;
      this.bottomHeight =
        windowHeight * parseFloat(this.bottomHeightPercent) * 0.01;
    }
  },
  watch: {
    topHeight() {
      this.resizeBaseDrawerBarHeight();
    },
    bottomHeight() {
      this.resizeBaseDrawerBarHeight();
    }
  },
  mounted() {
    this.resizeBaseDrawerBarHeight();
    window.addEventListener("resize", this.resizeBaseDrawerBarHeight);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeBaseDrawerBarHeight);
  }
};
</script>

<style></style>
