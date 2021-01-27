/**
 * 权限
 */
import store from "@store";
import { isString } from "../utils/utils";

export default {
  /* eslint-disable no-unused-vars */
  inserted(el, binding, vnode) {
    const { value } = binding;
    if (!value) {
      throw new Error(`请设置权限`);
    }
    const permissions = store.getters.permissions || [];
    // store 没有 state 但有 getters。mutations commit 没有获取到
    // store.state && store.state.identity
    // store.commit("identity/GET_PERMISSIONS")
    const { key, pmsns } = value;
    const permissionsValue = permissions.map(permission => {
      return permission[key || "id"];
    });
    let pmsnsAry = [];
    if (isString(pmsns)) {
      pmsnsAry = [pmsns];
    }
    if (Array.isArray(pmsns)) {
      pmsnsAry = [...pmsns];
    }
    const hasPermissions = pmsnsAry.some(permission => {
      return permissionsValue.includes(permission);
    });
    if (!hasPermissions) {
      el.parentNode && el.parentNode.removeChild(el);
    }
  }
};
