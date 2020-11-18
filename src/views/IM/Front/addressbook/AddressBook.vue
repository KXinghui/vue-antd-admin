<template>
  <div class="chat-addressbook-wrap">
    <base-header></base-header>
    <base-tab-bar
      :base-tab-bars="baseTabBars"
      :active-item-key="activeKey"
      @change="changeActiveTab"
      :color="color"
      :active-color="activeColor"
    ></base-tab-bar>
  </div>
</template>

<script>
import { BASE_LAYOUT_MIXIN } from "../../../../components/Mobile/mixins/BaseLayout";

export default {
  name: "ChatGroupMember",
  mixins: [BASE_LAYOUT_MIXIN],
  data() {
    return {
      msName: "im",
      activeTabIndex: 1
    };
  }
};
</script>

<style>
.chat-addressbook-wrap {
  height: 100%;
  background-color: #f5f5f5;
}
</style>
