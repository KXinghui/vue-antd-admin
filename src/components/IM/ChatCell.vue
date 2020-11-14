<template>
  <div class="chat-record-msg-wrap">
    <template v-if="isHtml">{{ chatMsg.html }}</template>
    <div v-if="isFile" class="chat-record-file-wrap">
      <div v-if="isImage" class="chat-record-img">
        <img v-lazy="chatMsg.url" :alt="imgAlt" />
      </div>
      <div v-else class="chat-record-file">
        <div class="chat-record-file-info-wrap">
          <identity-avatar
            class="chat-record-file-avatar"
            :identity="{ name: chatMsg.extension }"
            avatar-shape="square"
            :avatar-size="50"
          ></identity-avatar>
          <div class="chat-record-file-info">
            <a-tooltip
              :title="chatMsg.fileName"
              :get-popup-container="getPopupContainer"
            >
              <div class="filename" v-text="chatMsg.fileName"></div>
            </a-tooltip>
            <div class="filesize" v-text="chatMsg.fileSize"></div>
          </div>
        </div>
        <a-icon type="download" @click="downloadFile" />
      </div>
    </div>
    <template v-if="chatMsgType === isDynamic"> </template>
    <template v-if="chatMsgType === isRecord"> </template>
    <template v-if="chatMsgType === isBizCard"> </template>
  </div>
</template>

<script>
import { download } from "../../utils/file-utils";
import { msg } from "../../utils/antd-utils";
import { ChatMsgTypeEnum } from "../../consts/im";
import IdentityAvatar from "../Identity/IdentityAvatar";

export default {
  name: "ChatCell",
  components: { IdentityAvatar },
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
    chatRecord: {
      type: [Object],
      default: function() {
        return null;
      },
      required: true
    }
  },
  computed: {
    chatMsg() {
      let msg = this.chatRecord.message;
      return JSON.parse(msg);
    },
    isHtml() {
      return ChatMsgTypeEnum.HTML.equals(this.chatMsgType);
    },
    isImage() {
      let contentType = this.chatMsg.contentType;
      return contentType && contentType.indexOf("image") != -1;
    },
    imgAlt() {
      /* <span v-text="chatMsg.fileName"></span>
          <span v-text="chatMsg.fileSize"></span>
          <a :href="chatMsg.url" download><a-icon type="download"/></a> */
      return this.chatMsg.fileName;
    },
    isFile() {
      return ChatMsgTypeEnum.FILE.equals(this.chatMsgType);
    },
    isDynamic() {
      return ChatMsgTypeEnum.DYNAMIC.equals(this.chatMsgType);
    },
    isRecord() {
      return ChatMsgTypeEnum.RECORD.equals(this.chatMsgType);
    },
    isBizCard() {
      return ChatMsgTypeEnum.BIZ_CARD.equals(this.chatMsgType);
    },
    chatMsgType() {
      return this.chatRecord.chatMsgTypeEnum || ChatMsgTypeEnum.HTML.name;
    }
  },
  methods: {
    downloadFile() {
      let chatMsg = this.chatMsg;
      let fileName = chatMsg.fileName;
      let isDownload = download({ url: chatMsg.url }, fileName);
      isDownload.then(result => {
        let responseResult = {
          code: result ? "1" : "0",
          msg: result ? `下载${fileName}成功` : `下载${fileName}失败`
        };
        msg(responseResult);
      });
    },
    getPopupContainer(trigger) {
      return trigger.parentElement;
    }
  },
  mounted() {}
};
</script>

<style>
/* .chat-record-msg-wrap {
} */
.chat-record-img img {
  width: 100%;
  cursor: pointer;
}
.chat-record-file,
.chat-record-file-info-wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.chat-record-file {
  justify-content: space-between;
}

.chat-record-file-info-wrap {
  max-width: 90%;
}

.chat-record-file-info {
  max-width: 65%;
}
.chat-record-file-info .filename {
  /* font-size: x-large; */
  /* 强制不换行，省略号 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.1rem;
  font-weight: bold;
}
</style>
