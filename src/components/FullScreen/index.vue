<template>
  <!-- <a-tooltip :title="tooltipText" :get-popup-container="getPopupContainer"> -->
  <a-icon class="btn" :type="btnType" @click="toggleFullScreen" />
  <!-- </a-tooltip> -->
</template>

<script>
import {
  openFullscreen,
  exitFullScreen,
  isFullScreen
} from "@utils/full-screen";
import { isString } from "@utils/utils";

export default {
  name: "FullScreen",
  data() {
    return {
      isFullScreen: false
    };
  },
  // Props with type Object/Array must use a factory function to return the default value
  props: {
    element: {
      type: [Object, String],
      default: function() {
        return null;
      },
      required: false
    }
  },
  computed: {
    tooltipText() {
      return this.isFullScreen ? "退出全屏" : "全屏";
    },
    btnType() {
      return this.isFullScreen ? "fullscreen-exit" : "fullscreen";
    }
  },
  methods: {
    toggleFullScreen() {
      let ele = this.element;
      if (!ele) {
        ele = document.body;
      }
      if (isString(ele)) {
        debugger;
        ele.includes("#")
          ? document.getElementById(ele)
          : ele.includes(".")
          ? document.getElementsByClassName(ele)[0]
          : this.$refs[this.modalRef] || this.$refs[this.modalRef].$el;
      }
      isFullScreen() ? exitFullScreen() : openFullscreen(ele);
      this.isFullScreen = !isFullScreen();
    }
    /* getPopupContainer(trigger) {
      return trigger.parentElement;
    } */
  }
};
</script>

<style></style>
