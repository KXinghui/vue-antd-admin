<template>
  <div class="chat-group-member-wrap">
    <chat-header></chat-header>
    <chat-tab-bar
      :chat-tab-bars="chatTabBars"
      :active-item-key="activeKey"
      @change="changeActiveTab"
      :color="color"
      :active-color="activeColor"
    ></chat-tab-bar>
  </div>
</template>

<script>
import { CHAT_LAYOUT_MIXIN } from "../../../components/IM/mixins/ChatLayout";

export default {
  name: "ChatGroupMember",
  mixins: [CHAT_LAYOUT_MIXIN],
  data() {
    return {
      chatActiveTabIndex: 1
    };
  }
};
</script>

<style>
.chat-group-member-wrap {
  height: 100%;
  background-color: #f5f5f5;
}
</style>
