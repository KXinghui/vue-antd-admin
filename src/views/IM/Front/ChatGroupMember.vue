<template>
  <div class="chat-group-member-wrap">
    <base-header></base-header>
    <base-tab-bar :chat-tab-bars="chatTabBars"></base-tab-bar>
  </div>
</template>

<script>
import { CHAT_LAYOUT_MIXIN } from "../../../components/IM/mixins/ChatLayout";

export default {
  name: "ChatGroupMember",
  mixins: [CHAT_LAYOUT_MIXIN],
  data() {
    return {};
  }
};
</script>

<style></style>
