/* eslint-disable no-unused-vars */
// import { login, logout, getInfo } from '@/api/login'
// import { getToken, setToken, removeToken } from '@/utils/auth'
const state = {
  // key destinetion value [send|subscribe]Instance
  subscribeMap: new Map(),
  // 暂时不使用
  transactionMap: new Map()
};

const getters = {
  routes: state => {
    return state;
  }
};

const mutations = {
  GET_SUBSCRIBE: (state, { destination }) => {
    let subscribeMap = new Map(state.subscribeMap);
    return subscribeMap.get(destination);
  },
  DELETE_SUBSCRIBE: (state, { destination }) => {
    let subscribeMap = new Map(state.subscribeMap);
    if (subscribeMap.has(destination)) {
      subscribeMap.delete(destination);
    }
    state.subscribeMap = subscribeMap;
  },
  SET_SUBSCRIBE: (state, { destination, subscribeInstance, headers }) => {
    let subscribeMap = new Map(state.subscribeMap);
    let subscribeInstanceInMap = subscribeMap.get(destination);
    if (subscribeInstanceInMap) {
      // 取消订阅
      "unsubscribe" in subscribeInstanceInMap &&
        subscribeInstanceInMap.unsubscribe(headers);
    }
    subscribeMap.set(destination, subscribeInstance);
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
