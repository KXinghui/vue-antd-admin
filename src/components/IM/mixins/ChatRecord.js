import ChatRecord from "../ChatRecord.vue";

export const CHAT_RECORD_MIXIN = {
  components: {
    ChatRecord
  },
  data() {
    return {
      chatRecordIds: [],
      isBatch: false,
      identity: {},
      chatRecords: []
    };
  },
  methods: {
    changeChatRecord(value, checked) {
      let index = this.chatRecordIds.indexOf(value);
      if (checked) {
        if (index == -1) {
          this.chatRecordIds.push(value);
        }
      } else {
        this.chatRecordIds.splice(index, 1);
      }
      console.log(this.chatRecordIds);
    }
  }
};
