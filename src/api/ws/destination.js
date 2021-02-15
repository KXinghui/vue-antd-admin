/**
 * subscribe 扫码登陆
 * @param {*} scanCode
 */
export function scanCodeLogin(scanCode) {
  return `/topic/scancode.login.${scanCode}`;
}
