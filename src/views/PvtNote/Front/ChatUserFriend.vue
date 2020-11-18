<template>
  <div class="chat-user-friend-wrap"></div>
</template>

<script>
export default {
  name: "ChatUserFriend",
  data() {
    return {};
  },
  props: {
    chatUserId: {
      type: [String],
      default: "",
      required: true
    }
  }
};
</script>

<style></style>
