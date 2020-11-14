/**
 * 不支持WebSocket
 */
export let URL =
  process.env.NODE_ENV === "production"
    ? "/pvtnote/pvtnws"
    : "https://localhost:8080/pvtnote/pvtnws";

/**
 * 支持WebSocket
 */
export let WEBSOCKET_URL =
  process.env.NODE_ENV === "production"
    ? "/pvtnote/pvtnws"
    : "ws://localhost:8080/pvtnote/pvtnws";
