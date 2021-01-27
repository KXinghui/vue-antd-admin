<template>
  <a-drawer
    class="base-drawer-wrap"
    :width="width"
    :title="title"
    :placement="placement"
    :closable="false"
    :visible="visible"
    @close="onClose"
    :wrapClassName="wrapClassName"
    :mask="mask"
    v-bind="$props"
  >
    <slot></slot>
  </a-drawer>
</template>

<script>
export default {
  name: "BaseDrawer",
  data() {
    return {};
  },
  props: {
    wrapClassName: {
      type: [String],
      default: "left",
      required: false
    },
    width: {
      type: [String],
      default: "",
      required: false
    },
    title: {
      type: [String],
      default: "",
      required: false
    },
    visible: {
      type: [Boolean],
      default: true,
      required: false
    },
    mask: {
      type: [Boolean],
      default: true,
      required: false
    },
    placement: {
      type: [String],
      default: "left",
      required: false,
      validator(value) {
        return ["left", "right"].includes(value);
      }
    }
  },
  methods: {
    onClose() {
      this.$emit("update:visible", !this.visible);
    }
  },
  mounted() {}
};
</script>

<style>
/* .base-drawer-wrap {
  height: 3.25rem;
  max-height: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #e1dfde;
  background-color: white;
  position: fixed;
  width: 100%;
  top: 0;
  padding: 0 1rem;
} */
.base-drawer-wrap .base-drawer-left,
.base-drawer-wrap .base-drawer-middle,
.base-drawer-wrap .base-drawer-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  border: 1px solid red;
}

.base-drawer-wrap .base-drawer-left {
  justify-content: flex-start;
}
.base-drawer-wrap .base-drawer-middle {
  justify-content: space-between;
}
.base-drawer-wrap .base-drawer-right {
  justify-content: flex-end;
  align-content: flex-end;
  /* flex-direction: row-reverse; */
}
.base-drawer-wrap .icon {
  cursor: pointer;
}
.base-drawer-wrap .base-drawer-left .icon {
  padding: 0rem 1.2rem 0rem 0;
}
.base-drawer-wrap .base-drawer-right .icon {
  padding-right: 1.2rem;
}
.base-drawer-wrap .base-drawer-right .icon:last-of-type {
  padding-right: 0;
}
</style>
