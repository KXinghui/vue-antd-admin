<template>
  <div class="layout-tag-bar">
    <layout-tag></layout-tag>
  </div>
</template>

<script>
import LayoutTag from "./LayoutTag";

export default {
  name: "LayoutTagBar",
  components: {
    LayoutTag
  },
  data() {
    return {};
  }
};
</script>

<style>
.layout-tag-bar {
  border: 1px solid red;
  height: 100%;
}
</style>
