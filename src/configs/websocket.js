/**
 * 不支持WebSocket
 */
export let URL =
  process.env.NODE_ENV === "production"
    ? "/cloud/pvtcws"
    : "https://localhost:8081/cloud/pvtcws";

/**
 * 支持WebSocket
 */
export let WEBSOCKET_URL =
  process.env.NODE_ENV === "production"
    ? "/cloud/pvtcws"
    : "wss://localhost:8081/cloud/pvtcws";
