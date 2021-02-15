/**
 * subscribe 扫码登录
 * @param {*} scanCode
 */
export function scanCodeLogin(scanCode) {
  return `/topic/scancode.login.${scanCode}`;
}
