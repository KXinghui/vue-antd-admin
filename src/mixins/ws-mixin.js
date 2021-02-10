/* TODO WebSocket */
import { client, disconnect, getHeader } from "@utils/websocket";
import { msg } from "@utils/antd-utils";

export const WS_MIXIN = {
  data() {
    return {
      stompClient: null
    };
  },
  methods: {
    wsconnect(connectFrame) {
      // this.receiveMsg = connectFrame;
      msg({ code: "1", msg: "连接成功=======" });
      console.log("connectFrame ", connectFrame);
    },
    wserror(errorFrame) {
      msg({ code: "-1", msg: "连接失败=======" });
      console.log("errorFrame ", errorFrame);
    },
    wsclient(options, headers) {
      let vm = this;
      this.stompClient = client(options, headers, vm.wsconnect, vm.wserror);
    },
    wsreClient(options, headers) {
      let vm = this;
      disconnect(this.stompClient);
      this.stompClient = vm.wsClient(options, headers);
    },
    wssend(destination, body, headers) {
      let stompClient = this.stompClient;
      stompClient.send(destination, body, Object.assign(headers, getHeader()));
    },
    wssubscribe(destination, subscribeCallback, headers) {
      let stompClient = this.stompClient;
      stompClient.subscribe(
        destination,
        subscribeCallback,
        Object.assign(headers, getHeader())
      );
    }
  }
};
