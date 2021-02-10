// npm install webstomp-client --registry=https://registry.npm.taobao.org
// npm i sockjs-client
// RabbitMQ 支持 WebStomp https://www.rabbitmq.com/web-stomp.html

/**
 * http://127.0.0.1:15674/ws 仅适用于支持Websocket的客户端
 * var ws = new WebSocket('ws://127.0.0.1:15674/ws');
 *
 */
/**
 * DEPRECATED: undefined is not a recognized STOMP version. In next major client version, this will close the connection.
 * Uncaught Error: Incompatibile SockJS! Main site uses: "1.5.0", the iframe: "1.0.0".
 * 【https://blog.csdn.net/qq_35432904/article/details/104496507】
 */

import webstomp from "webstomp-client";
import SockJS from "sockjs-client";
// eslint-disable-next-line no-unused-vars
import { URL, WEBSOCKET_URL } from "@configs/websocket";
import { isProd } from "@utils/utils";
import { msg } from "@utils/antd-utils";
import store from "../store";

export const HEADERS = {
  Authorization: "Token",
  AuthorizationCode: "TokenCode"
  /* login: "pvtnote",
  passcode: "pvtnote" */
};

export function getHeader() {
  if (isProd()) {
    // 从Vuex获取Token和TokenCode
    return {
      Authorization: store.getters.token.token,
      AuthorizationCode: store.getters.token.tokenCode
    };
  } else {
    return {
      Authorization: "Token",
      AuthorizationCode: "TokenCode"
    };
  }
}

/**
 * 浏览器是否支持WebSocket
 */
export function isSupport() {
  if (
    (!!window.WebSocket.WebSocket && window.WebSocket.prototype.send) ||
    typeof WebSocket != "undefined"
  ) {
    return true;
  } else {
    return false;
  }
}

export const OPTIONS = {
  protocols: ["v10.stomp", "v11.stomp", "v12.stomp"],
  binary: false,
  heartbeat: { incoming: 1000000, outgoing: 1000000 },
  debug: isProd() ? false : true
};

export function client(options, headers, connectCallBack, errorCallBack) {
  let targetOptions = Object.assign(options, OPTIONS);
  let stompClient = !isSupport()
    ? /* webstomp.client(WEBSOCKET_URL, targetOptions) */
      webstomp.over(new WebSocket(WEBSOCKET_URL), targetOptions)
    : webstomp.over(new SockJS(URL), targetOptions);
  stompClient.connect(
    Object.assign(headers, getHeader()),
    connectCallBack,
    errorCallBack
  );
  return stompClient;
}

export function disconnect(stompClient) {
  if (stompClient && stompClient instanceof webstomp.client) {
    stompClient.disconnect(function() {
      msg({ code: "1", msg: "断连成功=======" });
    }, getHeader());
  }
}

/**
 * WebStompClient
 * 事务 begin commit abort
 * ack(messageID, subscription, headers={}) nack(messageID, subscription, headers={})
 */
/**
 * webstomp
 */
// client(url, [options])
// over(ws, [options])
//  options
//  protocols: default to ['v10.stomp', 'v11.stomp', 'v12.stomp']
//  binary: default to false. See binary section.
//  heartbeat: default to {incoming: 10000, outgoing: 10000}. You can provide false to cut it (recommended when the server is a SockJS server) or a definition object.
//  debug: default to true. Will log frame using console.log

/**
 * WebStompClient
 */
// disconnect(disconnectCallback, headers={})
// send(destination, body='', headers={})
// subscribe(destination, callback, headers={})
// unsubscribe(id, header={})
// onreceive(frame)

// begin([transaction])
// commit(transaction)
// abort(transaction)
// ack(messageID, subscription, headers={})
// nack(messageID, subscription, (headers = {}));
