/**
 * 对称算法 使用 crypto-js
 *
 * 非对称算法(RSA) 使用 jsencrypt 加解密、签名、验证
 */
var CryptoJS = require("crypto-js");
import JSEncrypt from "jsencrypt";
import { isObject } from "./utils";

export function bytes2Base64(bytes) {
  return CryptoJS.enc.Base64.stringify(bytes);
}

export function base642Bytes(base64) {
  return CryptoJS.enc.Base64.parse(base64);
}
const HASH_ALG = ["MD5", "SHA1", "SHA2", "SHA3", "RIPEMD160", "SHA256"];

export function hash(alg, message) {
  if (HASH_ALG.includes(alg)) {
    return CryptoJS[alg](message).toString();
  }
}

export function str2Hex(str) {
  return CryptoJS.enc.Hex.stringify(str);
}

export function hex2Str(hex) {
  return CryptoJS.enc.Hex.parse(hex);
}

export function encrypt(alg, content, key, isPublic = true) {
  switch (alg) {
    case "AES":
      return AES.encrypt(content, key);
    case "RSA":
      return RSA.encrypt(content, key, isPublic);
    default:
      break;
  }
}

export function decrypt(alg, content, key, isPublic = false) {
  switch (alg) {
    case "AES":
      return AES.decrypt(content, key);
    case "RSA":
      return RSA.decrypt(content, key, isPublic);
    default:
      break;
  }
}

export class AES {
  static encrypt(content, key) {
    content = CryptoJS.enc.Utf8.parse(
      isObject(content) ? JSON.stringify(content) : content
    );
    let encrypted = CryptoJS.AES.encrypt(content, base642Bytes(key), {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  }
  static decrypt(content, key) {
    let decrypt = CryptoJS.AES.decrypt(content, base642Bytes(key), {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decrypt);
    // return decrypt.toString(CryptoJS.enc.Utf8);
    // return CryptoJS.enc.Utf8.stringify(decrypt).toString();
  }
}

export class RSA {
  static encrypt(content, key, isPublic) {
    content = isObject(content) ? JSON.stringify(content) : content;
    var encrypt = new JSEncrypt();
    // key = base642Bytes(key);
    let pkcs8 = true;
    let pubHeadFoot = pkcs8 ? "PUBLIC" : "RSA PUBLIC";
    let pvtHeadFoot = pkcs8 ? "PRIVATE" : "RSA PRIVATE";
    let headFoot = isPublic ? pubHeadFoot : pvtHeadFoot;
    key = `-----BEGIN ${headFoot} KEY-----${key}-----END ${headFoot} KEY-----`;
    if (isPublic) {
      encrypt.setPublicKey(key);
    } else {
      encrypt.setPrivateKey(key);
    }
    return encrypt.encrypt(content, isPublic);
  }
  static decrypt(content, key, isPublic) {
    var decrypt = new JSEncrypt();
    // key = base642Bytes(key);
    let pkcs8 = true;
    let pubHeadFoot = pkcs8 ? "PUBLIC" : "RSA PUBLIC";
    let pvtHeadFoot = pkcs8 ? "PRIVATE" : "RSA PRIVATE";
    let headFoot = isPublic ? pubHeadFoot : pvtHeadFoot;
    key = `-----BEGIN ${headFoot} KEY-----${key}-----END ${headFoot} KEY-----`;
    if (isPublic) {
      decrypt.setPublicKey(key);
    } else {
      decrypt.setPrivateKey(key);
    }
    return decrypt.decrypt(content, isPublic);
  }
  static DEFAULT_SIGN_ALG = "SHA512";
  static isSignAlg(signAlg) {
    return ["MD5", "SHA1", "SHA224", "SHA256", "SHA384", "SHA512"].includes(
      signAlg.toUpperCase()
    );
  }
  /**
   * 签名
   * @param {*} content
   * @param {*} privateKey
   * @param {*} digestName MD5 SHA1 SHA224 SHA256 SHA384 SHA512
   * @returns
   */
  static sign(content, privateKey, digestName) {
    var sign = new JSEncrypt();
    let pkcs8 = true;
    let pvtHeadFoot = pkcs8 ? "PRIVATE" : "RSA PRIVATE";
    privateKey = `-----BEGIN ${pvtHeadFoot} KEY-----${privateKey}-----END ${pvtHeadFoot} KEY-----`;
    sign.setPrivateKey(privateKey);
    if (this.isSignAlg(digestName)) {
      digestName = this.DEFAULT_SIGN_ALG;
    }
    return sign.sign(
      content,
      CryptoJS[digestName.toUpperCase()],
      digestName.toLowerCase()
    );
  }
  static verifySign(content, sign, publicKey, digestName) {
    var verify = new JSEncrypt();
    let pkcs8 = true;
    let pubHeadFoot = pkcs8 ? "PUBLIC" : "RSA PUBLIC";
    publicKey = `-----BEGIN ${pubHeadFoot} KEY-----${publicKey}-----END ${pubHeadFoot} KEY-----`;
    verify.setPublicKey(publicKey);
    if (this.isSignAlg(digestName)) {
      digestName = this.DEFAULT_SIGN_ALG;
    }
    return verify.verify(
      content,
      sign,
      CryptoJS[digestName.toUpperCase()],
      digestName.toLowerCase()
    );
  }
}

console.log(CryptoJS.enc.Hex.parse("000102030405060708090a0b0c0d0e0f"));

var key = "BiJNhbQjuOoAhn0lcqqlVouI/FwYIbO7FZdeOF/RIk0=";
var content = "DeviceLogin:computer:552682203377700864";
var enstr = encrypt("AES", content, key);
console.log(enstr);
// console.log(str2Base64(enstr))
var destr = decrypt("AES", enstr, key);
console.log(enstr + " ========== " + destr);
console.log(destr == content);

var pvtKey = `MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAIyo7lEpp+jO7sKA/PwIWrZmIzgTZO6/w0g5pmFJi83KcquNzGxcxEo2R9P51/J83SpFS2R9wr2LY4uFMXylret7fY8TLeGqf0xGrYHYOlVMba1ap2gH9kfVPllfqUZwBnZVvj9S7UkN8VLD2s89V8TjOetO7i4zRNrlo/ObQoh9AgMBAAECgYBbK9gk9XonVZG+svrHpeaeWX+0hiWi9truAqgMYS5j+jfvaJ67EjoM3DgcdtH5E+QK1RV0EmvajfG86l1ULNOYWvpjGcbq9DsvAKQ17YTA4gPyuAoYMk3aUEA+bghL5UOjpVRjYyUjUfA8vb6fcRlb60igwV+njshRVhVt19ZbQQJBAM5jWlZcWUqpoIkxAJ0dNAyFduh6wGNmMbRu4t2z30xHyXJM4AnxNyCodH7GvLbNz8JH4/fHDnFBQr7R+OL1HJECQQCueNDPohTkvg6+pGQNXMqet5SS9z2RX8e/LXjqpY7hjW7skRjyTuni5cnSbxh5spaQGd6jLLwyhIM+Rt0qEdMtAkAVM0d4T4wsizgeX5Y8jV9nWd5ZCyLwEvNQIYPUWkG5yDX9M8BfxRNwm108GJYSARoyTsgwD5aAM7/zcgYq6hrBAkB9f5AL2nWW+BMZFJyXdAiXVEv9zvQtbqz6mlXgywfUvGxupAxCt3rLaCjdQmZjm49rxf/8dcBFwkW5dTW+/iVdAkEAiJWbkrciprwrOGzULB8Sv+O9PBXhEjaxoijTgdnw8wVYc2LXWNCEkHCw84gGWjl55zjTWJwfX3JOykzu9RpQ5A==`;
var pubKey = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCMqO5RKafozu7CgPz8CFq2ZiM4E2Tuv8NIOaZhSYvNynKrjcxsXMRKNkfT+dfyfN0qRUtkfcK9i2OLhTF8pa3re32PEy3hqn9MRq2B2DpVTG2tWqdoB/ZH1T5ZX6lGcAZ2Vb4/Uu1JDfFSw9rPPVfE4znrTu4uM0Ta5aPzm0KIfQIDAQAB`;
var enstr2 = encrypt("RSA", content, pubKey);

var destr2 = decrypt("RSA", enstr2, pvtKey);
console.log(enstr2 + " ========== " + destr2);
console.log(destr2 == content);
console.log(CryptoJS.SHA256.name);
const sign = RSA.sign(content, pvtKey, "SHA512");
console.log("sign   " + sign);
console.log(RSA.verify(content, sign, pubKey, "SHA512"));
