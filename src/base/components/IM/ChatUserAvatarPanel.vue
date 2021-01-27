<template>
  <div class="chat-user-avatar-panel-wrap">
    <div class="chat-users-avatar-wrap">
      <div
        v-for="chatUser in chatUsers"
        class="chat-user-avatar-wrap"
        :key="chatUser.id"
      >
        <identity-avatar identity="chatUser" />
        <span v-text="chatUser.nickname"></span>
      </div>
    </div>
    <div v-if="isChatGroup" class="chat-user-group-wrap"></div>
  </div>
</template>

<script>
import IdentityAvatar from "../Identity/IdentityAvatar";

export default {
  name: "ChatUserAvatarPanel",
  components: {
    IdentityAvatar
  },
  props: {
    chatUsers: {
      type: [Array],
      default: function() {
        return [];
      },
      required: true
    },
    isChatGroup: {
      type: [Boolean],
      default: false,
      required: true
    }
  }
};
</script>

<style>
.chat-user-avatar-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
