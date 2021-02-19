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
    wsclient(options, headers, isDisConnect = false) {
      let vm = this;
      let stompClient = vm.stompClient;
      if (isDisConnect) {
        disconnect(stompClient);
      }
      this.stompClient = client(options, headers, vm.wsconnect, vm.wserror);
    },
    wsdisconnect() {
      let vm = this;
      let stompClient = vm.stompClient;
      if (stompClient) {
        disconnect(stompClient);
      }
    },
    wssend(destination, body, headers = {}) {
      if (!this.stompClient) {
        this.wsclient();
      }
      let stompClient = this.stompClient;
      /**
       * 使用SockJS连接还没建立起来，往通道发送数据，会报错 The connection has not been established yet
       * 如果使用WebSocket会报这个错InvalidStateError: An attempt was made to use an object that is not, or is no longer, usable
       */
      stompClient.connect(Object.assign(headers, getHeader()), () => {
        stompClient.send(
          destination,
          body,
          Object.assign(headers, getHeader())
        );
      });
    },
    wssubscribe(destination, subscribeCallback, headers = {}) {
      let vm = this;
      if (!vm.stompClient) {
        vm.wsclient();
      }
      let stompClient = vm.stompClient;
      stompClient.connect(Object.assign(headers, getHeader()), () => {
        let subscribeInstance = stompClient.subscribe(
          destination,
          subscribeCallback,
          Object.assign(headers, getHeader())
        );
        console.log("subscribeInstance  " + subscribeInstance);
        // vm[WEBSOCKET_MUTATION_TYPE.SET_SUBSCRIBE]({
        //   destination,
        //   subscribeInstance,
        //   headers
        // });
      });
    },
    wsunsubscribe(destination, headers = {}) {
      let vm = this;
      let subscribeInstance = vm[WEBSOCKET_MUTATION_TYPE.GET_SUBSCRIBE]({
        destination
      });
      if (subscribeInstance && "unsubscribe" in subscribeInstance) {
        subscribeInstance.unsubscribe(Object.assign(headers, getHeader()));
      }
      // vm[WEBSOCKET_MUTATION_TYPE.DELETE_SUBSCRIBE]({ destination });
    },
    ...mapMutations(WEBSOCKET_MUTATION_TYPE.NAMESPACE, [
      // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      WEBSOCKET_MUTATION_TYPE.GET_SUBSCRIBE,
      WEBSOCKET_MUTATION_TYPE.DELETE_SUBSCRIBE,
      WEBSOCKET_MUTATION_TYPE.SET_SUBSCRIBE
    ])
  }
};
