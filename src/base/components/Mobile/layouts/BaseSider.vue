<template>
  <aside class="base-sider-wrap" :style="[leftOrRight, topOrBottom]">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: "BaseSider",
  data() {
    return {};
  },
  props: {
    placement: {
      type: [String],
      default: "rightTop",
      required: false,
      validator(value) {
        return [
          "leftTop",
          "leftCenter",
          "leftBottom",
          "rightTop",
          "rightCenter",
          "rightBottom"
        ].includes(value);
      }
    }
  },
  computed: {
    leftOrRight() {
      let isLeft = this.placement.indexOf("left") != -1;
      return {
        [isLeft ? "left" : "right"]: "1.4rem"
      };
    },
    topOrBottom() {
      let isCenter = this.placement.indexOf("Center") != -1;
      if (isCenter) {
        return {
          top: "50%"
        };
      }
      let isTop = this.placement.indexOf("Top") != -1;
      return {
        [isTop ? "top" : "bottom"]: "25%"
      };
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
.base-sider-wrap {
  border: 1px solid red;
  position: absolute;
  height: 12rem;
  width: 2rem;
  z-index: 20;
}
</style>
