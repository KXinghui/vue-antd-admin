<template>
  <div class="base-drawer-bar-wrap">
    <a-drawer
      class="base-drawer-bar-top-wrap"
      :width="topWidth"
      :height="topHeight"
      :title="topTitle"
      placement="top"
      :closable="false"
      :visible="topVisible"
      @close="onClose"
      :wrapClassName="topWrapClassName"
      :mask="topMask"
      v-bind="$props"
    >
      <span
        class="top-close-text"
        v-show="showClose"
        v-text="closeText"
        @click="onClose"
      ></span>
      <slot name="top"></slot>
    </a-drawer>
    <a-drawer
      class="base-drawer-bar-bottom-wrap"
      :width="bottomWidth"
      :height="bottomHeight"
      :title="bottomTitle"
      placement="bottom"
      :closable="false"
      :visible="bottomVisible"
      @close="onClose"
      :wrapClassName="bottomWrapClassName"
      :mask="bottomMask"
      v-bind="$props"
    >
      <slot name="bottom"></slot>
    </a-drawer>
  </div>
</template>

<script>
export default {
  name: "BaseDrawer",
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
      this.$emit("update:bottomVisible", !this.bottomVisible);
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
    topHeightPercent() {
      this.resizeBaseDrawerBarHeight();
    },
    bottomHeightPercent() {
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

<style>
.base-drawer-bar-wrap .ant-drawer-wrapper-body {
  height: 100%;
}

/* .ant-drawer-body, */
.base-drawer-bar-top-wrap
  .ant-drawer-content
  .ant-drawer-wrapper-body
  .ant-drawer-body,
.base-drawer-bar-bottom-wrap
  .ant-drawer-content
  .ant-drawer-wrapper-body
  .ant-drawer-body {
  height: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.base-drawer-bar-wrap .top-close-text {
  cursor: pointer;
}

.base-drawer-bar-top-wrap .identity-avatar,
.base-drawer-bar-bottom-wrap .identity-avatar {
  padding: 0;
}
</style>
