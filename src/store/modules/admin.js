/* eslint-disable no-unused-vars */
import { ADMIN_MUTATION_TYPE } from "../mutation-type";
const state = () => {
  return {
    isMobile: true,
    // 布局设置
    layoutSetting: {
      showSider: true,
      foldSider: true,
      floatSider: false,
      showSiderLogo: true,
      showMainBreadcrumbBar: true,
      showTagBar: false,
      /* IM */
      showDrawer: true,
      drawerPlacement: "left"
    }
  };
};

const getters = {
  someGetter(state, getters, rootState, rootGetters) {
    getters.someOtherGetter; // -> 'foo/someOtherGetter'
    rootGetters.someOtherGetter; // -> 'someOtherGetter'
  }
};

const mutations = {
  [ADMIN_MUTATION_TYPE.SHOW_DRAWER](state, payload) {
    state.layoutSetting.showDrawer = payload;
  },
  [ADMIN_MUTATION_TYPE.SET_LAYOUT_SETTING](state, payload) {
    if (state.layoutSetting === payload) {
      state.layoutSetting = payload;
    } else {
      state.layoutSetting = Object.assign({}, payload);
    }
  },
  [ADMIN_MUTATION_TYPE.SET_IS_MOBILE](state, payload) {
    if (payload === undefined) {
      return;
    }
    state.isMobile = payload;
  }
};

const actions = {
  someAction({ dispatch, commit, getters, rootGetters }) {
    getters.someGetter; // -> 'foo/someGetter'
    rootGetters.someGetter; // -> 'someGetter'

    dispatch("someOtherAction"); // -> 'foo/someOtherAction'
    dispatch("someOtherAction", null, { root: true }); // -> 'someOtherAction'

    commit("someMutation"); // -> 'foo/someMutation'
    commit("someMutation", null, { root: true }); // -> 'someMutation'
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
