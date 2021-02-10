/**
 * 不支持WebSocket
 */
export let URL =
  process.env.NODE_ENV === "production"
    ? "/cloud/pvtcws"
    : "https://localhost:8080/cloud/pvtcws";

/**
 * 支持WebSocket
 */
export let WEBSOCKET_URL =
  process.env.NODE_ENV === "production"
    ? "/cloud/pvtcws"
    : "ws://localhost:8080/cloud/pvtcws";
