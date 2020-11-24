<template>
  <div class="better-scroll" v-on="$listeners">
    <div class="better-scroll-wrap" :id="bsWrap">
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
.better-scroll {
  height: 100%;
  width: 100%;
}

.better-scroll-wrap {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.mouse-wheel-content {
  height: 100%;
  width: 100%;
}
</style>
