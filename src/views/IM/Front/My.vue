<template>
  <div class="chat-my-wrap">
    <!-- <chat-header
      style="height: 10rem; max-height: 10rem; background-color: white;"
    >
      <div slot="left">
        <identity-avatar
          :identity="identity"
          avatar-shape="square"
        ></identity-avatar>
        <div class="">{{ identity.nickname }}</div>
        <div class="">聊天号：{{ identity.chatNo }}</div>
      </div>
      <div slot="right"></div>
    </chat-header> -->
    <chat-main style="margin-bottom:3.25rem;"></chat-main>
    <!-- <chat-tab-bar
      :chat-tab-bars="chatTabBars"
      :active-item-key="activeKey"
      :color="color"
      :active-color="activeColor"
    ></chat-tab-bar> -->
  </div>
</template>

<script>
// import IdentityAvatar from "../../../components/Identity/IdentityAvatar";
import { CHAT_LAYOUT_MIXIN } from "../../../components/IM/mixins/ChatLayout";
export default {
  name: "ChatGroupMember",
  mixins: [CHAT_LAYOUT_MIXIN],
  // components: { IdentityAvatar },
  data() {
    return {
      chatActiveTabIndex: 2,
      identity: { name: "asf", nickname: "asf" }
    };
  }
};
</script>

<style>
.chat-my-wrap {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
}
</style>
