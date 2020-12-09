/* eslint-disable no-unused-vars */
import store from "@utils/store";
import { PVTNOTE_MUTATION_TYPE } from "../mutation-type";
// import { login, logout, getInfo } from '@/api/login'
// import { getToken, setToken, removeToken } from '@/utils/auth'
const state = {
  noteGroups: [
    { name: "Java", noteNum: 12 },
    { name: "Vue", noteNum: 0 },
    { name: "SpringBoot", noteNum: 11 },
    { name: "Java", noteNum: 12 },
    { name: "Vue", noteNum: 0 },
    { name: "SpringBoot", noteNum: 11 },
    { name: "Java", noteNum: 12 },
    { name: "Vue", noteNum: 0 },
    { name: "SpringBoot", noteNum: 11 },
    { name: "Java", noteNum: 12 },
    { name: "Vue", noteNum: 0 },
    { name: "SpringBoot", noteNum: 11 },
    { name: "Java", noteNum: 12 },
    { name: "Vue", noteNum: 0 },
    { name: "SpringBoot", noteNum: 11 },
    { name: "Java", noteNum: 12 },
    { name: "Vue", noteNum: 0 },
    { name: "SpringBoot", noteNum: 11 },
    { name: "Java", noteNum: 12 },
    { name: "Vue", noteNum: 0 },
    { name: "SpringBoot", noteNum: 11 },
    { name: "Java", noteNum: 12 },
    { name: "Vue", noteNum: 0 },
    { name: "SpringBoot", noteNum: 11 },
    { name: "Java", noteNum: 12 },
    { name: "Vue", noteNum: 0 },
    { name: "SpringBoot", noteNum: 11 },
    { name: "Java", noteNum: 12 },
    { name: "Vue", noteNum: 0 },
    { name: "SpringBoot", noteNum: 11 },
    { name: "Java", noteNum: 12 },
    { name: "Vue", noteNum: 0 },
    { name: "SpringBoot", noteNum: 11 },
    { name: "Java", noteNum: 12 },
    { name: "Vue", noteNum: 0 },
    { name: "SpringBoot", noteNum: 11 },
    { name: "Java", noteNum: 12 },
    { name: "Vue", noteNum: 0 },
    { name: "SpringBoot", noteNum: 11 },
    { name: "Java", noteNum: 12 },
    { name: "Vue", noteNum: 0 },
    { name: "SpringBoot", noteNum: 11 }
  ]
};

const getters = {};

const mutations = {
  [PVTNOTE_MUTATION_TYPE.SET_NOTE_GROUPS]: (state, noteGroups) => {
    state.noteGroups = noteGroups;
  }
};

const actions = {
  Login(context, identity) {},
  Logout(context, identity) {}
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
