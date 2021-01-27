/* eslint-disable no-unused-vars */
import store from "@utils/store";
import { PVTNOTE_MUTATION_TYPE } from "../mutation-type";
// import { login, logout, getInfo } from '@/api/login'
// import { getToken, setToken, removeToken } from '@/utils/auth'
const state = {
  noteGroups: [
    { id: "001", name: "Java", noteNum: 12 },
    { id: "002", name: "Vue", noteNum: 0 },
    { id: "003", name: "SpringBoot", noteNum: 11 },
    { id: "004", name: "Java", noteNum: 12 },
    { id: "005", name: "Vue", noteNum: 0 },
    { id: "006", name: "SpringBoot", noteNum: 11 },
    { id: "007", name: "Java", noteNum: 12 },
    { id: "008", name: "Vue", noteNum: 0 },
    { id: "009", name: "SpringBoot", noteNum: 11 },
    { id: "011", name: "Java", noteNum: 12 },
    { id: "021", name: "Vue", noteNum: 0 },
    { id: "031", name: "SpringBoot", noteNum: 11 },
    { id: "041", name: "Java", noteNum: 12 },
    { id: "051", name: "Vue", noteNum: 0 },
    { id: "061", name: "SpringBoot", noteNum: 11 },
    { id: "071", name: "Java", noteNum: 12 },
    { id: "081", name: "Vue", noteNum: 0 },
    { id: "091", name: "SpringBoot", noteNum: 11 },
    { id: "1019", name: "Java", noteNum: 12 },
    { id: "2019", name: "Vue", noteNum: 0 },
    { id: "3019", name: "SpringBoot", noteNum: 11 },
    { id: "4019", name: "Java", noteNum: 12 },
    { id: "5019", name: "Vue", noteNum: 0 },
    { id: "6019", name: "SpringBoot", noteNum: 11 },
    { id: "7019", name: "Java", noteNum: 12 },
    { id: "8019", name: "Vue", noteNum: 0 },
    { id: "9019", name: "SpringBoot", noteNum: 11 },
    { id: "9012", name: "Java", noteNum: 12 },
    { id: "8012", name: "Vue", noteNum: 0 },
    { id: "7012", name: "SpringBoot", noteNum: 11 },
    { id: "6012", name: "Java", noteNum: 12 },
    { id: "5012", name: "Vue", noteNum: 0 },
    { id: "4012", name: "SpringBoot", noteNum: 11 },
    { id: "3012", name: "Java", noteNum: 12 },
    { id: "2012", name: "Vue", noteNum: 0 },
    { id: "1012", name: "SpringBoot", noteNum: 11 },
    { id: "0911", name: "Java", noteNum: 12 },
    { id: "0810", name: "Vue", noteNum: 0 },
    { id: "0710", name: "SpringBoot", noteNum: 11 },
    { id: "0610", name: "Java", noteNum: 12 },
    { id: "0510", name: "Vue", noteNum: 0 },
    { id: "0410", name: "SpringBoot", noteNum: 11 }
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
