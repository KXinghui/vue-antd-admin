<template>
  <div class="layout-footer" v-text="footerTitle"></div>
</template>

<script>
export default {
  name: "LayoutFooter",
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
<style>
.layout-footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: inherit;
}
</style>
