<template>
  <div class="icon-selector-wrp">
    <div class="antd"></div>
    <div class="font-awesome"></div>
    <icon
      provider=""
      icon=""
      :class="{ 'is-select': isSelect(icon) }"
      @click="selectIcon(icon)"
    ></icon>
  </div>
</template>

<script>
// https://blog.csdn.net/wildye/article/details/89816963

import Icon from "./index";
import IconConsts from "@consts/components/icon.json";

export default {
  name: "",
  components: {
    Icon
  },
  data() {
    return {};
  },
  props: {
    type: {
      type: [String],
      required: true
    },
    selectedIcons: {
      type: [Array],
      default: function() {
        return [];
      },
      required: false
    }
  },
  mounted() {
    console.log(IconConsts);
  },
  methods: {
    isSelect(icon) {
      return this.selectedIcons && this.selectedIcons.includes(icon);
    },
    selectIcon(icon) {
      let selectIcons = this.selectedIcons.slice();
      if (!selectIcons.includes(icon)) {
        selectIcons.push(icon);
      }
      this.$emit("selectedIcons", selectIcons);
    },
    copyIcon(icon) {
      return `<icon icon="${icon}" />`;
    },
    deselectIcon(icon) {
      let selectIcons = this.selectedIcons.slice();
      if (selectIcons.includes(icon)) {
        selectIcons.splice(selectIcons.indexOf(icon), 1);
      }
      this.$emit("selectedIcons", selectIcons);
    }
  }
};
</script>

<style>
.is-select {
}
</style>
