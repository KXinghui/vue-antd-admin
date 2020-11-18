<template>
  <div>
    <a-row>
      <a-col
        :xs="24"
        :sm="20"
        :md="20"
        :lg="10"
        :xl="10"
        v-viewer="{
          movable: true,
          filter: function() {
            return !isBatch;
          }
        }"
      >
        <div v-if="isChatFriend">
          <base-record
            v-for="chatRecord in chatRecords"
            :chat-user="identity"
            :chat-record="chatRecord"
            :is-batch="isBatch"
            :chat-record-ids="chatRecordIds"
            @changeChatRecord="changeChatRecord"
            :key="chatRecord.id"
          ></base-record>
        </div>
        <div v-else></div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { BASE_LAYOUT_MIXIN } from "../../../../components/Mobile/mixins/BaseLayout";

export default {
  name: "ChatUserRecord",
  mixins: [BASE_LAYOUT_MIXIN],
  data() {
    return {
      msName: "im",
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
