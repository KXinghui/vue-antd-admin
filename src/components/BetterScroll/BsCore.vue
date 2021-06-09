<template>
  <div class="better-scroll" v-on="$listeners">
    <div :class="['better-scroll-wrap', scrollXWrapClass]" :id="bsWrap">
      <!-- :ref="bsWrap" -->
      <div :class="['mouse-wheel-content', scrollXContentClass]">
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

.scroll-x-wrap {
  white-space: nowrap;
}
.scroll-x-content {
  /* display: inline-block; */
  display: flex;
  flex-direction: row;
  align-items: center;
}

.better-scroll-wrap {
  /* border: 1px solid red; */
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}
/* .mouse-wheel-content {
  height: 100%;
  width: 100%;
} */
</style>
