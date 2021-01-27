/**
 * 角色
 */
import store from "store";
import { isString } from "../utils/utils";

export default {
  // eslint-disable-next-line no-unused-vars
  inserted(el, binding, vnode) {
    const { value } = binding;
    if (!value) {
      throw new Error(`请设置角色`);
    }
    // const rolesInStore =
    //   store.state && store.state.identity ? store.state.identity.roles : [];
    // store.commit(`${IDENTITY_MUTATION_TYPE.NAMESPACE}${IDENTITY_MUTATION_TYPE.GET_ROLES}`)
    const rolesInStore = store.getters.roles || [];
    console.log(rolesInStore);
    const { key, roles } = value;
    const rolesValue = rolesInStore.map(role => {
      return role[key || "id"];
    });

    let rolesAry = [];
    if (isString(roles)) {
      rolesAry = [roles];
    }
    if (Array.isArray(roles)) {
      rolesAry = [...roles];
    }
    const hasRoles = rolesAry.some(role => {
      return rolesValue.includes(role);
    });
    if (!hasRoles) {
      el.parentNode && el.parentNode.removeChild(el);
    }
  }
};
