<template>
  <div class="better-scroll-wrap">
    <div class="bscroll" :id="bsWrap" style="refStyle">
      <div class="mouse-wheel-content" style="contentStyle">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
// import BScroll from "@better-scroll/core";
// import MouseWheel from "@better-scroll/mouse-wheel";
// import ScrollBar from "@better-scroll/scroll-bar";
// import InfinityScroll from "@better-scroll/infinity";

// BScroll.use(MouseWheel);
// BScroll.use(ScrollBar);
// BScroll.use(InfinityScroll);

import BsMixin from "./bs-mixin";

export default {
  name: "BsInfinity",
  mixins: [BsMixin],
  data() {
    return {};
  },
  props: {},
  beforeMount() {}
};
</script>

<style>
.bscroll {
  position: relative;
  height: 100%;
  padding: 0 10px;
  border: 1px solid #ccc;
  overflow: hidden;
}
</style>
