/* eslint-disable no-unused-vars */
import { ADMIN_MUTATION_TYPE } from "../mutation-type";
const state = () => {
  return {
    isMobile: true,
    loading: {
      isLoad: false,
      text: "加载中..."
    },
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
      drawerPlacement: "left",
      driverGuide: false,
      layoutTheme: "dark"
    },
    // 主题设置
    themeSetting: {
      "primary-color": "",
      "secondary-color": "",
      "text-color": "",
      "text-color-secondary": "",
      "heading-color": "",
      "layout-header-background": "",
      "layout-body-background": "",
      "btn-primary-bg": "",
      "processing-color": ""
    },
    supportThirdPartys: [
      { thirdParty: "github", title: "GitHub" },
      { thirdParty: "gitee", title: "码云" },
      { thirdParty: "oschina", title: "开源中国" },
      { thirdParty: "alipay", title: "支付宝" },
      { thirdParty: "weibo", title: "微博" },
      { thirdParty: "wechat", title: "微信" },
      { thirdParty: "qq", title: "QQ" }
    ],
    thirdPartySupport: [
      "github",
      "gitee",
      "oschina"
      // "alipay",
      // "weibo",
      // "wechat",
      // "qq"
    ]
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
  [ADMIN_MUTATION_TYPE.LOADING](state, payload) {
    if (state.loading === payload) {
      state.loading = payload;
    } else {
      state.loading = Object.assign({}, payload);
    }
  },
  [ADMIN_MUTATION_TYPE.SET_LAYOUT_SETTING](state, payload) {
    if (state.layoutSetting === payload) {
      state.layoutSetting = payload;
    } else {
      state.layoutSetting = Object.assign({}, payload);
    }
  },
  [ADMIN_MUTATION_TYPE.SET_THEME_SETTING](state, payload) {
    if (state.themeSetting === payload) {
      state.themeSetting = payload;
    } else {
      state.themeSetting = Object.assign({}, payload);
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
