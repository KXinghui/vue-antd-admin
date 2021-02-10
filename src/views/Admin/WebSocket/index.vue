<template>
  <div class="websocket">
    <a-space align="center">
      <a-textarea
        v-model="sendMsg"
        placeholder="Send Msg"
        :auto-size="{ minRows: 3, maxRows: 5 }"
      />
      <a-button type="primary" @click="send">{{ actionType }}</a-button>
      <a-select style="width: 120px" @change="handleChange">
        <a-select-option v-for="aType in actionTypes" :key="aType">
          {{ aType }}
        </a-select-option>
      </a-select>
      <a-input v-model="destination"></a-input>
      <a-input v-model="token"></a-input>
      <a-input v-model="tokenCode"></a-input>
      <a-button type="primary" @click="reconnect">重连</a-button>
      <a-textarea
        v-model="receiveMsg"
        placeholder="System Msg"
        :auto-size="{ minRows: 3, maxRows: 5 }"
      />
    </a-space>
  </div>
</template>

<script>
import { client, disconnect, HEADERS, getHeader } from "@utils/websocket";
import { msg } from "@utils/antd-utils";
import WS_MIXIN from "../../../mixins/ws-mixin";

export default {
  name: "WebSocket",
  mixins: [WS_MIXIN],
  data() {
    return {
      tokenCode: "TokenCode",
      token: "Token",
      actionTypes: [
        "send",
        "connect",
        "disconnect",
        "subscribe",
        "unsubscribe"
      ],
      destination: "",
      actionType: "send",
      stompClient: null,
      sendMsg: "",
      receiveMsg: ""
    };
  },
  methods: {
    createClient() {
      let vm = this;
      this.stompClient = client(
        { binary: false },
        HEADERS,
        vm.connect,
        vm.error
      );
    },
    reconnect() {
      let vm = this;
      disconnect(this.stompClient);
      this.stompClient = client(
        { binary: false },
        getHeader(vm),
        vm.connect,
        vm.error
      );
    },
    send() {
      let destination = this.destination;
      let sendMsg = this.sendMsg;
      let stompClient = this.stompClient;
      let actionType = this.actionType;
      try {
        if ("send" === actionType) {
          for (let dest of destination.split(",")) {
            stompClient.send(dest, sendMsg, getHeader(this));
          }
        } else if ("subscribe" === actionType) {
          for (let dest of destination.split(",")) {
            stompClient.subscribe(
              dest,
              function(frame) {
                console.log(dest, "==============", frame);
              },
              getHeader(this)
            );
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    succFrame(frame) {
      console.log("succFrame   ", frame);
    },
    errFrame(frame) {
      console.log("errFrame   ", frame);
    },
    connect(connectFrame) {
      // this.receiveMsg = connectFrame;
      msg({ code: "1", msg: "连接成功=======" });
      console.log("connectFrame ", connectFrame);
      this.stompClient.subscribe(
        "/topic/send.msg",
        function(response) {
          console.log("/topic/send.msg     ", response);
        },
        HEADERS
      );
    },
    error(errorFrame) {
      msg({ code: "-1", msg: "连接失败=======" });
      console.log("errorFrame ", errorFrame);
    },
    handleChange(value) {
      this.actionType = value;
      console.log("改变值 ", this.actionType);
    }
  },
  created() {
    this.createClient();
  },
  mounted() {},
  beforeDestroy() {
    disconnect(this.stompClient);
  }
};
</script>

<style></style>
