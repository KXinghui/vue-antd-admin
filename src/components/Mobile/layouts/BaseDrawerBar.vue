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
    return {};
  },
  props: {
    showClose: {
      type: [Boolean],
      default: true,
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
    topHeight: {
      type: [String],
      default: "3.5rem",
      required: false
    },
    bottomHeight: {
      type: [String],
      default: "3.5rem",
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
    }
  },
  mounted() {}
};
</script>

<style scoped>
.base-drawer-bar-wrap .ant-drawer-wrapper-body {
  height: 100%;
}

.base-drawer-bar-wrap .ant-drawer-body {
  height: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.base-drawer-bar-wrap .top-close-text {
  cursor: pointer;
}

.base-drawer-bar-wrap .ant-drawer-body .identity-avatar {
  padding: 0;
}
</style>
