/* eslint-disable no-unused-vars */
// import { login, logout, getInfo } from '@/api/login'
// import { getToken, setToken, removeToken } from '@/utils/auth'
import { map } from "../../utils/utils";

const state = {
  // key destinetion value [send|subscribe]Instance
  subscribeMap: new Map(),
  // 暂时不使用
  transactionMap: null
};

const getters = {
  routes: state => {
    return state;
  }
};

const mutations = {
  GET_SUBSCRIBE: (state, { destination }) => {
    let subscribeMap = map(state.subscribeMap);
    return subscribeMap.get(destination);
  },
  DELETE_SUBSCRIBE: (state, { destination }) => {
    let subscribeMap = map(state.subscribeMap);
    if (subscribeMap.has(destination)) {
      subscribeMap.delete(destination);
    }
    state.subscribeMap = subscribeMap;
  },
  SET_SUBSCRIBE: (state, { destination, subscribeInstanceId }) => {
    let subscribeMap = map(state.subscribeMap);
    // let subscribeInstanceId = subscribeMap.get(destination);
    subscribeMap.set(destination, subscribeInstanceId);
    state.subscribeMap = subscribeMap;
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
