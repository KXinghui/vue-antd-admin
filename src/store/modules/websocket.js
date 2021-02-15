/* eslint-disable no-unused-vars */
// import { login, logout, getInfo } from '@/api/login'
// import { getToken, setToken, removeToken } from '@/utils/auth'
const state = {
  // key destinetion value [send|subscribe]Instance
  stompClient: null,
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
  SET_STOMPCLIENT: (state, { stompClient }) => {
    state.stompClient = stompClient;
  },
  GET_STOMPCLIENT: state => {
    return state.stompClient;
  },
  GET_SUBSCRIBE: (state, { destination }) => {
    let subscribeMap = state.subscribeMap;
    return subscribeMap.get(destination);
  },
  DELETE_SUBSCRIBE: (state, { destination }) => {
    let subscribeMap = state.subscribeMap;
    if (!subscribeMap) {
      subscribeMap = new Map();
    }
    if (subscribeMap.has(destination)) {
      subscribeMap.delete(destination);
    }
  },
  SET_SUBSCRIBE: (state, { destination, subscribeInstance, headers }) => {
    let subscribeMap = state.subscribeMap;
    if (!subscribeMap) {
      let subscribeMap2 = new Map();
      subscribeMap2.delete;
    }
    if (subscribeMap.has(destination)) {
      let subscribeInstanceInMap = subscribeMap.get(destination);
      if (subscribeInstanceInMap) {
        // 取消订阅
        "unsubscribe" in subscribeInstanceInMap &&
          subscribeInstanceInMap.unsubscribe(headers);
      }
    }
    subscribeMap.set(destination, subscribeInstance);
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
