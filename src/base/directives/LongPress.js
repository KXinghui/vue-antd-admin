export const DEFAULT_LONG_PRESS_SECOND = 3;
// [https://segmentfault.com/a/1190000016065880]
export default {
  // eslint-disable-next-line no-unused-vars
  inserted(el, binding, vnode) {
    let { value } = binding;
    if (!value) {
      value = DEFAULT_LONG_PRESS_SECOND;
    }
  }
};
