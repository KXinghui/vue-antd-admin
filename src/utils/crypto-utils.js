var CryptoJS = require("crypto-js");

const HASH_ALG = ["MD5", "SHA1", "SHA2", "SHA3", "RIPEMD160", "SHA256"];

export function hash(alg, message) {
  if (HASH_ALG.includes(alg)) {
    CryptoJS[alg](message);
  }
}

export function str2Base64(str) {
  debugger;
  return CryptoJS.enc.Base64.stringify(str);
}

export function base642Str(base64) {
  return CryptoJS.enc.Base64.parse(base64);
}

export function str2Hex(str) {
  return CryptoJS.enc.Hex.stringify(str);
}

export function hex2Str(hex) {
  return CryptoJS.enc.Hex.parse(hex);
}
