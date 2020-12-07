<template>
  <!-- class="layout-main-container" -->
  <div class="layout-main-container" :style="layoutMainStyle">
    <!-- 面包屑导航 -->
    <a-row v-show="showMainBreadcrumbBar">
      <a-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
        <a-breadcrumb>
          <a-breadcrumb-item
            v-for="parentMenu in menu.parentMenus"
            :key="parentMenu.id"
          >
            <router-link v-if="parentMenu.url" :to="parentMenu.url">{{
              parentMenu.name
            }}</router-link>
            <span v-else>{{ parentMenu.name }}</span>
          </a-breadcrumb-item>
        </a-breadcrumb>
      </a-col>
    </a-row>
    <!-- 主要内容 -->
    <!-- <bs-core> -->
    <div
      :class="['layout-main', 'animate__animated', animateClass]"
      :ref="layoutMainRef"
    >
      <transition mode="out-in">
        <keep-alive :target="target" :max="10">
          <router-view />
          <a-back-top
            :visibility-height="10"
            :target="() => this.$refs[this.layoutMainRef]"
          />
        </keep-alive>
      </transition>
    </div>
    <!-- <a-back-top :visibility-height="100" /> -->
    <!-- </bs-core> -->
  </div>
</template>

<script>
var elementResizeDetectorMaker = require("element-resize-detector");
// import BsCore from "../components/BetterScroll/BsCore";

export default {
  name: "LayoutMain",
  // components: { BsCore },
  data() {
    return {
      animateClass: "animate__bounceInLeft",
      layoutMainRef:
        "layoutMain-" +
        Math.random()
          .toString()
          .substr(2),
      layoutMainStyle: {}
    };
  },
  props: {
    showMainBreadcrumbBar: {
      type: [Boolean],
      default: true,
      required: false
    },
    menu: {
      type: [Array, Object],
      default() {
        return [] || null;
      },
      required: false
    }
  },
  methods: {
    // LayoutMain高度自适应：使用 element-resize-detector 监听dom元素的高度
    resizeLayoutMainHeight(element) {
      var height = element.offsetHeight;
      let isNotNone = height <= 830;
      let minHeight = isNotNone ? "99%" : "";
      console.log("高度自适应   " + height);
      if (
        this.layoutMainStyle.minHeight &&
        this.layoutMainStyle.minHeight == minHeight
      ) {
        return;
      }
      this.layoutMainStyle = {
        minHeight
      };
    },
    target() {
      return this.$refs[this.layoutMainRef];
    }
  },
  mounted() {
    let layoutMainEle = this.$refs[this.layoutMainRef];
    if (layoutMainEle) {
      this.erd = elementResizeDetectorMaker({
        strategy: "scroll",
        callOnAdd: true
      });
      this.erd.listenTo(layoutMainEle, this.resizeLayoutMainHeight);
    }
  },
  destroyed() {
    let layoutMainEle = this.$refs[this.layoutMainRef];
    if (layoutMainEle) {
      this.erd.uninstall(layoutMainEle);
    }
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.animateClass =
        toDepth < fromDepth
          ? "animate__bounceInRight"
          : "animate__bounceInLeft";
    }
  }
};
</script>

<style lang="less" src="../styles/layout.less"></style>

<style>
/* .layout-main-container {
  border: 1px solid red;
  margin: 1px 0;
  min-height: none;
  padding: 1rem;
  background: #fff;
}
.layout-main {
  border: 1px solid blue;
  height: 100%;
  width: 100%;
  padding: 1rem 0;
} */
</style>
