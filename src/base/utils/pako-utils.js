// import { str2Base64 } from "./crypto-utils";

const pako = require("pako");
// import { str2Base64, base642Str } from "./crypto-utils";

export function uint8ArrayToStr(fileData) {
  var dataString = "";
  for (var i = 0; i < fileData.length; i++) {
    dataString += String.fromCharCode(fileData[i]);
  }
  return dataString;
}

export function uint8ArrayToBase64(u8Arr) {
  let CHUNK_SIZE = 0x8000; //arbitrary number
  let index = 0;
  let length = u8Arr.length;
  let result = "";
  let slice;
  while (index < length) {
    slice = u8Arr.subarray(index, Math.min(index + CHUNK_SIZE, length));
    result += String.fromCharCode.apply(null, slice);
    index += CHUNK_SIZE;
  }
  // web image base64图片格式: "data:image/png;base64," + b64encoded;
  // return  "data:image/png;base64," + btoa(result);
  return btoa(result);
}

export function strToUint8Array(str) {
  var arr = [];
  for (var i = 0, j = str.length; i < j; ++i) {
    arr.push(str.charCodeAt(i));
  }
  var tmpUint8Array = new Uint8Array(arr);
  return tmpUint8Array;
}
export function base64ToUint8Array(base64String) {
  let padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  let base64 = (base64String + padding).replace(/\\-/g, "+").replace(/_/g, "/");

  let rawData = window.atob(base64);
  let outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export function str2ab(str) {
  var buf = new ArrayBuffer(str.length * 2); // 每个字符占用2个字节
  var bufView = new Uint16Array(buf);
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}
export function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

/**
 * 压缩
 * @param {*} str
 */
export function gzipStr(str) {
  // window.btoa(uint8ArrayToStr(pako.gzip(str)));
  return uint8ArrayToBase64(pako.gzip(str));
}

/**
 * 解压
 * @param {*} str
 */
export function ungzipStr(str) {
  return pako.ungzip(base64ToUint8Array(str), { to: "string" });
}
