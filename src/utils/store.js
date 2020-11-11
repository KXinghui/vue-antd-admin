import { isJson, isBoolean } from "./utils";

var store = require("store");
// 使用插件:
var expirePlugin = require("store/plugins/expire");
store.addPlugin(expirePlugin);
// store.set("test", "test", new Date().getTime() + 100000);
// console.log(store.get("test"));
// console.log(store.getExpiration("test"));

// store.set("test2", "test2");
// console.log(store.get("test2"));
// console.log(store.getExpiration("test2")); // undefined

class StoreJsAPI {
  /**
   * 设置键值
   * @param {*} key
   * @param {*} value
   * @param {*} expire 单位为毫秒 1000ms = 1s new Date().getTime() + expire
   */
  static set(key, value, expire) {
    let realValue = typeof value === "string" ? value : JSON.stringify(value);
    if (expire) {
      store.set(key, realValue, new Date().getTime() + expire);
    } else {
      store.set(key, realValue);
    }
  }
  static get(key) {
    let value = store.get(key);
    if (value) {
      let realValue = isJson(value);
      if (!isBoolean(realValue)) {
        return realValue;
      }
    }
    return value;
  }
  static remove(key) {
    store.remove(key);
  }
  static getExpiration(key) {
    return store.getExpiration(key);
  }
  static removeExpiredKeys() {
    store.removeExpiredKeys();
  }
  static hadKey(key) {
    let hadKey = false;
    if (key) {
      store.each(function(v, k) {
        if (k == key) {
          hadKey = true;
          // 跳出循环
          return false;
        }
      });
    }
    return hadKey;
  }
  /**
   * 检查过期
   * @param {*} key
   */
  static checkExpiration(key) {
    let expiration = this.getExpiration(key);
    if (
      (!expiration && this.hadKey(key)) ||
      (expiration && expiration > new Date().getTime())
    ) {
      return false;
    }
    return true;
  }
}

// get(key: string, optionalDefaultValue?: any): any;
// set(key: string, value: any): any;
// remove(key: string): void;
// each(callback: (val: any, namespacedKey: string) => void): void;
// clearAll(): void;
// hasNamespace(namespace: string): boolean;
// createStore(plugins?: Function[], namespace?: string): StoreJsAPI;
// addPlugin(plugin: Function): void;
// namespace(namespace: string): StoreJsAPI;

export default StoreJsAPI;
// StoreJsAPI

// get(key: string, optionalDefaultValue?: any): any;
// set(key: string, value: any): any;
// remove(key: string): void;
// each(callback: (val: any, namespacedKey: string) => void): void;
// clearAll(): void;

// hasNamespace(namespace: string): boolean;
// createStore(plugins?: Function[], namespace?: string): StoreJsAPI;
// addPlugin(plugin: Function): void;
// namespace(namespace: string): StoreJsAPI;
