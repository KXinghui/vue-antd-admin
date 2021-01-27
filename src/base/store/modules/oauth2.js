/* eslint-disable no-unused-vars */
import { OAUTH2_MUTATION_TYPE } from "../mutation-type";
const state = () => {
  return {
    github: {
      client_id: "",
      redirect_uri: ""
    },
    wechat: {
      client_id: "",
      redirect_uri: ""
    },
    qq: {
      client_id: "",
      redirect_uri: ""
    }
  };
};

const getters = {};

const mutations = {
  [OAUTH2_MUTATION_TYPE.SET_GITHUB](state, payload) {
    state.github = payload;
  },
  [OAUTH2_MUTATION_TYPE.SET_WECHAT](state, payload) {
    state.wechat = payload;
  },
  [OAUTH2_MUTATION_TYPE.SET_QQ](state, payload) {
    state.qq = payload;
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
