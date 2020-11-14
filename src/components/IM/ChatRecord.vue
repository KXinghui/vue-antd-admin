<template>
  <div class="chat-record-container">
    <div class="chat-record-top">
      {{ chatRecord.createDate | relativeDate }}
    </div>
    <div
      :class="['chat-record-wrap', chatRecordWrapClass]"
      :style="chatRecordStyle"
      @click="clickChatRecord(chatRecord.id)"
    >
      <a-dropdown v-if="!isBatch">
        <a-button size="small" style="margin: 0 .3rem; padding: 0 .2rem;">
          <a-icon size="small" type="ellipsis" />
        </a-button>
        <a-menu slot="overlay" @click="handleMenuClick">
          <a-menu-item key="1">
            <a-icon type="user" />1st menu item
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="user" />2nd menu item
          </a-menu-item>
          <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
        </a-menu>
      </a-dropdown>
      <div
        :class="['ant-popover', chatRecordClass]"
        style="position: relative; margin"
      >
        <!-- v-if="isUseBubbleCard" -->
        <!-- style="left: 43px; top: 948px; transform-origin: 50% 90.8px;" -->
        <div class="ant-popover-content">
          <div :class="['ant-popover-arrow', chatRecordMsgClass]"></div>
          <div role="tooltip" class="ant-popover-inner">
            <div>
              <!-- <div class="ant-popover-title">Title</div> -->
              <div
                :class="[
                  'chat-record-msg',
                  'ant-popover-inner-content',
                  chatRecordMsgCustClass,
                  chatRecordMsgClass
                ]"
              >
                <chat-record-msg
                  :chat-record="chatRecord"
                  :is-batch="isBatch"
                />
              </div>
            </div>
          </div>
          <div :class="[chatRecordWrapClass]">
            <template v-if="chatRecord.isOwn != 1">
              <!-- 未(已)读 -->
              <template v-if="chatRecord.isToRead == 1">已读</template>
              <template v-else
                ><span style="color:#ffa39e;">未读</span></template
              >
            </template>
          </div>
        </div>
      </div>
      <identity-avatar :identity="chatUser" />
      <a-checkbox
        v-show="isBatch"
        @change="changeChatRecord"
        :value="chatRecord.id"
        :checked="isChecked"
      ></a-checkbox>
    </div>
  </div>
</template>

<script>
import IdentityAvatar from "../Identity/IdentityAvatar";
import ChatRecordMsg from "./ChatRecordMsg";

export default {
  name: "ChatRecord",
  components: { IdentityAvatar, ChatRecordMsg },
  data() {
    return {
      chatRecordStyle: {},
      overlayStyle: {
        /* "max-width": "60%" */
      },
      visible: true
    };
  },
  props: {
    isBatch: {
      type: [Boolean],
      default: false,
      required: false
    },
    chatRecordIds: {
      type: [Array],
      default: function() {
        return [];
      },
      required: false
    },
    chatRecordMsgCustClass: {
      type: [Object],
      default: function() {
        return null;
      },
      required: false
    },
    chatUser: {
      type: [Object],
      default: function() {
        return {};
      },
      required: true
    },
    chatRecord: {
      type: [Object],
      default: function() {
        return null;
      },
      required: true
    }
  },
  computed: {
    isUseBubbleCard() {
      return false;
    },
    isChecked() {
      let chatRecordIds = this.chatRecordIds || [];
      return chatRecordIds.indexOf(this.chatRecord.id) != -1;
    },
    chatRecordWrapClass() {
      return this.chatRecord.isOwn == 0
        ? "chat-record-left"
        : "chat-record-right";
    },
    chatRecordClass() {
      return this.chatRecord.isOwn == 0
        ? "ant-popover-placement-rightTop"
        : "ant-popover-placement-leftTop";
    },
    chatRecordMsgClass() {
      return this.chatRecord.isOwn == 0
        ? "chat-record-msg-left"
        : "chat-record-msg-right";
    }
  },
  methods: {
    clickChatRecord(chatRecordId) {
      if (!this.isBatch) {
        return;
      }
      this.$emit(
        "changeChatRecord",
        chatRecordId,
        this.chatRecordIds.indexOf(chatRecordId) == -1
      );
    },
    changeChatRecord(e) {
      if (!e || !e.target) {
        return;
      }
      this.$emit("changeChatRecord", e.target.value, e.target.checked);
    },
    handleButtonClick(e) {
      console.log("click left button", e);
    },
    handleMenuClick(e) {
      console.log("click", e);
    }
  },
  mounted() {}
};
</script>

<style>
.chat-record-top {
  text-align: center;
}

.chat-record-wrap {
  margin: 0.6rem 1rem 1.2rem;
}
.chat-record-right {
  /* padding-right: 0.5rem; */
  display: flex;
  justify-content: flex-end;
}
.chat-record-left {
  /* padding-left: 0.5rem; */
  display: flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
}
/* .ant-popover-inner {
  max-width: 80%;
} */
div.chat-record-msg {
  /* 自动换行 */
  word-wrap: break-word;
  word-break: normal;
  border-radius: 0.5rem;
  padding: 0.7rem 0.8rem;
}
.chat-record-wrap .ant-popover-content .chat-record-msg-right {
  background-color: #52c41a;
  border-color: #52c41a;
  /* border-top-color: #52c41a;
  border-right-color: #52c41a;
  border-bottom-color: #52c41a;
  border-left-color: #52c41a; */
}
/* .chat-record-wrap .ant-popover-content .chat-record-msg-left {
} */
/* .ant-popover-arrow {
  position: absolute;
  display: block;
  width: 8.48528137px;
  height: 8.48528137px;
  background: transparent;
  background-color: red;
  border-style: solid;
  border-width: 4.24264069px;
  transform: rotate(45deg);
} */
.ant-popover {
  width: 70%;
}
</style>
