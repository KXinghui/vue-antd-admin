<template>
  <div class="better-scroll" v-on="$listeners">
    <div class="better-scroll-wrap" :style="{ height, width }" :id="bsWrap">
      <!-- :ref="bsWrap" -->
      <div class="mouse-wheel-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
// import BScroll from "@better-scroll/core";
// import MouseWheel from "@better-scroll/mouse-wheel";
// import ScrollBar from "@better-scroll/scroll-bar";
// BScroll.use(MouseWheel);
// BScroll.use(ScrollBar);

import BsMixin from "./bs-mixin";

export default {
  name: "BsCore",
  mixins: [BsMixin]
};
</script>

<style scoped>
.better-scroll-wrap {
  position: relative;
  height: 100%;
  overflow: hidden;
}
</style>
