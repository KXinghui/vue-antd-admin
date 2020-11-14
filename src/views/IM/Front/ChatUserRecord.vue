<template>
  <div>
    <div></div>
    <div v-if="isChatFriend">
      <chat-record
        v-for="chatRecord in chatRecords"
        :chat-user="identity"
        :chat-record="chatRecord"
        :is-batch="isBatch"
        :chat-record-ids="chatRecordIds"
        @changeChatRecord="changeChatRecord"
        :key="chatRecord.id"
      ></chat-record>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
import { CHAT_RECORD_MIXIN } from "../../../components/IM/mixins/ChatRecord";

export default {
  name: "ChatUserRecord",
  mixins: [CHAT_RECORD_MIXIN],
  data() {
    return {
      chatFriend: null,
      isChatFriend: false
    };
  },
  props: {
    chatUserId: {
      type: [String],
      default: "",
      required: true
    }
  },
  beforeMount() {
    // 检查该好友是否其好友 isChatFriend
    // 加载聊天记录
    console.log(this.chatUserId);
  },
  mounted() {
    console.log(this.chatUserId);
  }
};
</script>

<style></style>
