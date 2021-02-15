/* TODO WebSocket */
import { client, disconnect, getHeader } from "@utils/websocket";
import { msg } from "@utils/antd-utils";
import { WEBSOCKET_MUTATION_TYPE } from "../store/mutation-type";
import { mapMutations } from "vuex";

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
      let stompClient = vm[WEBSOCKET_MUTATION_TYPE.GET_STOMPCLIENT];
      if (stompClient) {
        disconnect(stompClient);
      }
      this.stompClient = client(options, headers, vm.wsconnect, vm.wserror);
      vm[WEBSOCKET_MUTATION_TYPE.SET_STOMPCLIENT](this.stompClient);
    },
    wssend(destination, body, headers) {
      if (!this.stompClient) {
        this.wsclient();
      }
      let stompClient = this.stompClient;
      stompClient.send(destination, body, Object.assign(headers, getHeader()));
    },
    wssubscribe(destination, subscribeCallback, headers) {
      let vm = this;
      debugger;
      if (!vm.stompClient) {
        this.wsclient();
      }
      let stompClient = vm.stompClient;
      let subscribeInstance = stompClient.subscribe(
        destination,
        subscribeCallback,
        Object.assign(headers, getHeader())
      );
      vm[WEBSOCKET_MUTATION_TYPE.SET_SUBSCRIBE](destination, subscribeInstance);
    },
    wsunsubscribe(destination, headers) {
      let vm = this;
      let subscribeInstance = vm[WEBSOCKET_MUTATION_TYPE.GET_SUBSCRIBE](
        destination
      );
      if (subscribeInstance && "unsubscribe" in subscribeInstance) {
        subscribeInstance.unsubscribe(Object.assign(headers, getHeader()));
      }
      vm[WEBSOCKET_MUTATION_TYPE.DELETE_SUBSCRIBE](destination);
    },
    ...mapMutations("websocket", [
      // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      WEBSOCKET_MUTATION_TYPE.SET_STOMPCLIENT,
      WEBSOCKET_MUTATION_TYPE.GET_STOMPCLIENT,
      WEBSOCKET_MUTATION_TYPE.GET_SUBSCRIBE,
      WEBSOCKET_MUTATION_TYPE.DELETE_SUBSCRIBE,
      WEBSOCKET_MUTATION_TYPE.SET_SUBSCRIBE
    ])
  }
};
