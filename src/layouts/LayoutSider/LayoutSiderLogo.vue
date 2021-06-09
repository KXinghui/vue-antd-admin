<template>
  <div :class="['layout-sider-logo-container', themeClass]">
    <img class="layout-sider-logo-img" :src="logoUrl" />
    <span
      :class="[collapsed ? 'logo-title-display' : 'logo-title']"
      v-text="logoTitle"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { THEME_MIXIN } from "@mixins/theme-mixin.js";
// Vue 引入图片的两种方式：
//方法1：直接将图片引入为模块
// import logoUrl from "../assets/logo.png";

export default {
  name: "LayoutSiderLogo",
  mixins: [THEME_MIXIN],
  data() {
    return {};
  },
  props: {
    collapsed: {
      type: [Boolean],
      default: true,
      required: false
    },
    logoUrl: {
      type: [String, Object],
      default: require("@assets/logo.png"),
      required: false
    },
    logoTitle: {
      type: [String],
      default: "Vue Antd Admin",
      required: false
    }
  },
  computed: {
    ...mapGetters([
      "layoutSideerCollapsed",
      "anotherGetter"
      // ...
    ])
  }
};
</script>

<style lang="less" src="../../styles/layout.less"></style>

<style>
/* .layout-sider-logo-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0;
}
.layout-sider-logo-img {
  width: 2.8rem;
}
.logo-title,
.logo-title-display {
  color: white;
  font-size: 1.1rem;
}
.logo-title-display {
  display: none;
} */
</style>
