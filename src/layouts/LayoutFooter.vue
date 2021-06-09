<template>
  <div :class="['layout-footer', themeClass]" v-text="footerTitle"></div>
</template>

<script>
import { THEME_MIXIN } from "@mixins/theme-mixin.js";

export default {
  name: "LayoutFooter",
  mixins: [THEME_MIXIN],
  data() {
    return { collapsed: false };
  },
  props: {
    footerTitle: {
      type: [String],
      default: `Copyright © 2020 Vue Antd Admin`,
      required: false
    }
  }
};
</script>

<style lang="less" src="../styles/layout.less"></style>
